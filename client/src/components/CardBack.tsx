import { FC } from "react";
import classes from "../styles/CardBack.module.css";
import { useApiResponse } from "../context/ApiResponse";

const CardBack: FC = () => {
  const { apiResponse } = useApiResponse();
  return (
    <div className={`${classes.cardBack} absolute w-full h-full bg-[#231f50] text-white flex flex-col items-center justify-center rounded-[10px] border-[10px] border-[#231f50]`}>
      <h1>{apiResponse.card}</h1>
      <p className="h-full text-xs overflow-auto">{apiResponse.result}</p>
    </div>
  );
};

export default CardBack;
