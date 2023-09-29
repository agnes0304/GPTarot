import { FC, useEffect, useState } from "react";
import classes from "../styles/CardBack.module.css";
import { useApiResponse } from "../context/ApiResponse";
import axios from "axios";
import { useParams } from "react-router-dom";

const CardBack: FC = () => {
  const { apiResponse } = useApiResponse();
  const [ answer, setAnswer ] = useState<string>("");
  const { nanoId } = useParams();

  useEffect(() => {
    if(apiResponse.result === null) {
      const getCard = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/load/${nanoId}`);
          // 카드 데이터 전부 받아오기
          const data = await response.data;
          setAnswer(data.result);
        } catch (error) {
          console.error(error);
        }
      }
      getCard();
    }
    else {
      setAnswer(apiResponse.result);
    }
  }, [apiResponse.result]);  

  return (
    <div className={`${classes.cardBack} absolute w-full h-full bg-[#231f50] text-white flex flex-col items-center justify-center rounded-[10px] border-[10px] border-[#231f50]`}>
      <h1>{apiResponse.card}</h1>
      <p className="h-full text-xs overflow-auto">{answer}</p>
    </div>
  );
};

export default CardBack;
