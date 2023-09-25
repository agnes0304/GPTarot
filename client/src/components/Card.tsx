import { FC, useState } from "react";
import CardFront from "./CardFront";
import CardBack from "./CardBack";
import classes from "./Card.module.css";

const Card: FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipHandler = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div className={classes.main}>
      <div
        className={`${classes.card} ${isFlipped ? `${classes.flipped}` : ""}`}
        onClick={flipHandler}
      >
        <div className={classes.cardInner}>
          <CardFront />
          <CardBack />
        </div>
      </div>
    </div>
  );
};

export default Card;
