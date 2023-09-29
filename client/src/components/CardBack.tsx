import { FC, useEffect, useState } from "react";
import classes from "../styles/CardBack.module.css";
import { useApiResponse } from "../context/ApiResponse";
import axios from "axios";
import { useParams } from "react-router-dom";

const CardBack: FC = () => {
  const { apiResponse } = useApiResponse();
  const [answer, setAnswer] = useState<string>("");
  const { nanoId } = useParams();

  useEffect(() => {
    if (apiResponse.result === null) {
      const getCard = async () => {
        try {
          const response = await axios.get(
            `http://localhost:8080/load/${nanoId}`
          );
          // 카드 데이터 전부 받아오기 : test아직 안함
          const cardData = await response.data;
          console.log(cardData);
          setAnswer(cardData.result);
        } catch (error) {
          console.error(error);
        }
      };
      getCard();
    } else {
      setAnswer(apiResponse.result);
    }
  }, [apiResponse.result]);

  return (
    <div
      className={`${classes.cardBack} absolute h-full bg-[#231f50] text-white flex flex-col gap-2 items-center justify-center rounded-[10px] border-[10px] border-[#231f50] shadow-lg shadow-violet-400/30`}
    >
      <h1 className="text-xl font-bold text-gray-200">{apiResponse.card}</h1>
      <p className="h-full text-[0.9rem] text-gray-300 overflow-auto">{answer}</p>
    </div>
  );
};

export default CardBack;
