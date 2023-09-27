import { FC } from "react";
import classes from "./CardBack.module.css";
import { useApiResponse } from "../context/ApiResponse";

const CardBack: FC = () => {
  const { apiResponse } = useApiResponse();
  return (
    <div className={`${classes.cardBack} absolute w-full h-full flex items-center justify-center text-white bg-indigo-900 rounded-xl rotate-180`}>
      <h1>{apiResponse.card}</h1>
      <p className="overflow-auto text-xs">{apiResponse.result}</p>
    </div>
  );
};

export default CardBack;
