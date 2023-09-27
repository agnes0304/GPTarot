import { FC } from "react";
import classes from "./CardBack.module.css";
import { useApiResponse } from "../context/ApiResponse";

const CardBack: FC = () => {
  const { apiResponse } = useApiResponse();
  return (
    <div className={classes.cardBack}>
      <h1>{apiResponse.card}</h1>
      <p>{apiResponse.result}</p>
    </div>
  );
};

export default CardBack;
