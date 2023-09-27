import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { setApiResponse } = useApiResponse();

  const handleClick = async (e) => {
    setIsLoading(true);

    const number = Math.floor(Math.random() * 78);
    const selectedCard = CardsData.find((card) => card.id === number);
    if (selectedCard) {
      setCard(selectedCard);
    }
    console.log(selectedPrompt);
    try {
      const response = await axios.post("http://localhost:8080/completions", {
        prompt: selectedPrompt,
        card: selectedCard?.korName,
      });
      // console.log(response.data);
      if (selectedCard) {
        setApiResponse({
          card: selectedCard?.korName,
          prompt: selectedPrompt,
          result: response.data,
        });
        navigate("/answer");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={classes.main}>
      {isLoading ? (
        <div>답변을 가지고 오고 있어요.</div>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default Spread;
