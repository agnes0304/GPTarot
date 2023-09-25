import { FC } from "react";
import classes from "./Spread.module.css";
import CardsData from "../data/CardsData";
import axios from "axios";
import { useApiResponse } from "../context/ApiResponse";

interface SpreadProps {
  selectedPrompt: string;
  setCard: React.Dispatch<
    React.SetStateAction<{ korName: string; engName: string; id: number }>
  >;
}

const Spread: FC<SpreadProps> = ({ selectedPrompt, setCard }) => {
  const { setApiResponse } = useApiResponse();
  const handleClick = async (e) => {
    const number = Math.floor(Math.random() * 78);
    const selectedCard = CardsData.find((card) => card.id === number);
    if (selectedCard) {
      setCard(selectedCard);
    }

    try {
      const response = await axios.post("http://localhost:8080/completions", {
        prompt: selectedPrompt,
        card: selectedCard?.engName,
      });
      setApiResponse(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={classes.main}>
      <div
        className={`${classes.card} ${classes.c1}`}
        onClick={(e) => handleClick(e)}
      ></div>
      <div
        className={`${classes.card} ${classes.c2}`}
        onClick={(e) => handleClick(e)}
      ></div>
      <div
        className={`${classes.card} ${classes.c3}`}
        onClick={(e) => handleClick(e)}
      ></div>
      <div
        className={`${classes.card} ${classes.c4}`}
        onClick={(e) => handleClick(e)}
      ></div>
    </div>
  );
};

export default Spread;
