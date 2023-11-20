import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useApiResponse } from "../hooks/useApiResponse";
import axiosInstance from "../axios/axiosInstance";
import kakaoCircle from "../assets/kakaoCircle.png";

declare global {
  interface Window {
    Kakao: any;
  }
}

const { Kakao } = window;

// db에 post하는 요청보내고 url 생성해줘야 함.
const SharerBtn: FC = () => {
  const { apiResponse } = useApiResponse();
  const { nanoId } = useParams();
  const bodyData = {
    id: nanoId,
    prompt: apiResponse.prompt,
    card: apiResponse.card,
    result: apiResponse.result,
    cardId: apiResponse.cardId,
  };

  //  Clipboard API 사용 제한이 있어서, fallback 함수를 만들어줌.
  const copyToClipboardFallback = (url: string) => {
    const textarea = document.createElement("textarea");
    textarea.textContent = url;
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();

    try {
      const successful = document.execCommand("copy");
      if (successful) {
        alert(`링크가 복사되었습니다. ${url}`);
      } else {
        console.error("Copy command was unsuccessful");
      }
    } catch (err) {
      console.error("Fallback copy method failed", err);
    }

    document.body.removeChild(textarea);
  };

  // Clipboard API 사용
  const copyToClipboard = async (url: string) => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(url);
        alert("링크가 복사되었습니다.");
      } else {
        copyToClipboardFallback(url);
      }
    } catch (err) {
      console.error("링크 복사에 실패했습니다.", err);
      copyToClipboardFallback(url);
    }
  };

  // 트위터 공유하기
  const twitterShare = () => {
    const url = `https://gptarot.jiwoo.best/answer/${nanoId}`;
    const text = `GPT가 알려주는 오늘의 운세`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      text
    )}&url=${encodeURIComponent(url)}`;
    window.open(twitterUrl);
  };

  useEffect(() => {
    Kakao.init(import.meta.env.VITE_KAKAO_API_KEY);
    console.log(Kakao.isInitialized());
  }, []);

  // TODO: 카카오톡 공유하기
  const kakaoShare = async () => {
    try {
      await axiosInstance.post("/save", bodyData);
      const url = `https://gptarot.jiwoo.best/answer/${nanoId}`;

      Kakao.Share.sendDefault({
        objectType: "feed",
        content: {
          title: "GPTarot | 지피타로",
          description: `${bodyData.prompt}`,
          imageUrl: `https://gptarot.jiwoo.best/${bodyData.cardId}.webp`,
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
        buttons: [
          {
            title: "친구의 운세 보기",
            link: {
              mobileWebUrl: url,
              webUrl: url,
            },
          },
          {
            title: "나도 질문하기",
            link: {
              mobileWebUrl: "https://gptarot.jiwoo.best",
              webUrl: "https://gptarot.jiwoo.best",
            },
          },
        ],
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = async () => {
    try {
      const url = `https://gptarot.jiwoo.best/answer/${nanoId}`;
      copyToClipboard(url);
      await axiosInstance.post("/save", bodyData);
    } catch (error) {
      alert("결과 저장에 실패했습니다.");
      console.error(error);
    }
  };

  return (
    <>
      <button
        className="flex justify-center items-center w-[40px] h-[40px] p-3 rounded-full cursor-pointer text-violet-400/50 hover:text-violet-400 hover:border-violet-400 hover:bg-violet-500/50"
        type="button"
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={faArrowUpFromBracket} />
      </button>
      <button
        className="flex justify-center items-center w-[40px] h-[40px] p-3 rounded-full cursor-pointer text-violet-400/50 hover:text-violet-400 hover:border-violet-400 hover:bg-violet-500/50"
        type="button"
        onClick={twitterShare}
      >
        <FontAwesomeIcon icon={faTwitter} />
      </button>
      <button
        className="flex justify-center items-center w-[40px] h-[40px] p-2 rounded-full cursor-pointer text-violet-400/50 hover:text-violet-400 hover:border-violet-400 hover:bg-violet-500/50"
        type="button"
        onClick={kakaoShare}
      >
        <img
          src={kakaoCircle}
          alt="카톡공유하기"
          className="opacity-50 -z-10"
        />
      </button>
    </>
  );
};

export default SharerBtn;
