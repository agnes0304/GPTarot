import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FC } from "react";
import { useParams } from "react-router-dom";
import { useApiResponse } from "../hooks/useApiResponse";
import axiosInstance from "../axios/axiosInstance";

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

  const copyToClipboardFallback = (url: string) => {
    const textarea = document.createElement('textarea');
    textarea.textContent = url;
    document.body.appendChild(textarea);
    textarea.select();

    try {
      document.execCommand('copy');
      alert("링크가 복사되었습니다.");
    } catch (err) {
      console.error('Fallback copy method failed', err);
    }

    document.body.removeChild(textarea);
  };

  const copyToClipboard = async (url: string) => {
    try {
      const permission = await navigator.permissions.query({ name: 'clipboard-write' as PermissionName });

      if (permission.state === 'granted' || permission.state === 'prompt') {
        await navigator.clipboard.writeText(url);
        alert("링크가 복사되었습니다.");
      } else if (document.queryCommandSupported('copy')) {
        copyToClipboardFallback(url);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = async () => {
    try {
      await axiosInstance.post("/save", bodyData);

      const url = `https://gptarot.jiwoo.best/answer/${nanoId}`;
      copyToClipboard(url);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button className="flex justify-center items-center w-[40px] h-[40px] p-3 rounded-full cursor-pointer text-violet-400/50 hover:text-violet-400 hover:border-violet-400 hover:bg-violet-500/50" type="button" onClick={handleClick}>
      <FontAwesomeIcon icon={faArrowUpFromBracket} />
    </button>
  );
};

export default SharerBtn;
