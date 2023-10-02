import { FC, useEffect, useState } from "react";
import Card from "../components/Card";
import Actions from "../components/Actions";
import { useApiResponse } from "../hooks/useApiResponse";
import axiosInstance from "../axios/axiosInstance";
import { useParams } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage";
import { InnerText } from "../data/InnerText";

const Result: FC = () => {
  const { language } = useLanguage();
  const { apiResponse } = useApiResponse();
  const { nanoId } = useParams();
  const [userQuestion, setUserQuestion] = useState<string>("");

  useEffect(() => {
    if (apiResponse.cardId === 100) {
      const getQuestion = async () => {
        try {
          const response = await axiosInstance.get(
            `/load/${nanoId}`
          );
          // 카드 데이터 전부 받아오기
          const cardData = await response.data;
          const userQ = cardData.question;
          setUserQuestion(userQ);
        } catch (error) {
          console.error(error);
        }
      };
      getQuestion();
    }
  }, [apiResponse.cardId]);

  return (
    <div className="flex flex-col items-center">
      {userQuestion && (
        <h1 className="text-violet-400 text-lg">" {userQuestion} "</h1>
      )}
      <p className="text-gray-400 text-[0.8rem] mb-6">
        {language === "ko" ? InnerText.result.ko : InnerText.result.en}
      </p>
      <Card />
      <Actions />
    </div>
  );
};

export default Result;
