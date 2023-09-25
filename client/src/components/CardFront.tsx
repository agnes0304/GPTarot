import { FC } from "react";
import classes from "./CardFront.module.css";

const CardFront: FC = () => {
  return (
    <div className={classes.cardFront}>
      <p>Front</p>
    </div>
  );
};

export default CardFront;
