import { FC, useEffect, useState } from "react";
import Card from "../components/Card";
import Actions from "../components/Actions";
import { useApiResponse } from "../context/ApiResponse";
import axios from "axios";
import { useParams } from "react-router-dom";

const Result: FC = () => {
  const { apiResponse } = useApiResponse();
  const { nanoId } = useParams();
  const [ userQuestion, setUserQuestion ] = useState<string>("");

  useEffect(() => {
    if (apiResponse.cardId === 100) {
      const getQuestion = async () => {
        try {
          const response = await axios.get(
            `http://localhost:8080/load/${nanoId}`
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
        카드를 클릭하면 답을 확인할 수 있어요
      </p>
      <Card />
      <Actions />
    </div>
  );
};

export default Result;
