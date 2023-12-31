import { FC, useState } from "react";
import CardFront from "./CardFront";
import CardBack from "./CardBack";
import classes from "../styles/Card.module.css";

const Card: FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipHandler = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div className="grid place-items-center">
      <div
        className={`${classes.card} w-[200px] h-[345px] ${isFlipped ? `${classes.flipped}` : ""}`}
        onClick={flipHandler}
      >
        <div className={`${classes.cardInner} w-full h-full relative`}>
          <CardFront />
          <CardBack />
        </div>
      </div>
    </div>
  );
};

export default Card;
