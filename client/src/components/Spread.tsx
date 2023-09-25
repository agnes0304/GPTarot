import { FC } from "react";
import classes from "./Spread.module.css";
import CardsData from "../data/CardsData";

interface SpreadProps {
  setCard: React.Dispatch<
    React.SetStateAction<{ korName: string; engName: string; id: number }>
  >;
}

const Spread: FC<SpreadProps> = ({ setCard }) => {
  const handleClick = (e) => {
    const number = Math.floor(Math.random() * 78);
    const selectedCard = CardsData.find((card) => card.id === number);
    if (selectedCard) {
      setCard(selectedCard);
    }
  };

  return (
    <div className={classes.main}>
      <div
        className={`${classes.card} ${classes.c1}`}
        onClick={(e)=> handleClick(e)}
      ></div>
      <div
        className={`${classes.card} ${classes.c2}`}
        onClick={(e)=>handleClick(e)}
      ></div>
      <div
        className={`${classes.card} ${classes.c3}`}
        onClick={(e)=>handleClick(e)}
      ></div>
      <div
        className={`${classes.card} ${classes.c4}`}
        onClick={(e)=>handleClick(e)}
      ></div>
    </div>
  );
};

export default Spread;
