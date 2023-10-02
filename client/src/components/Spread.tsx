import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "../styles/Spread.module.css";
import CardsData from "../data/CardsData";
import { useApiResponse } from "../hooks/useApiResponse";
import axiosInstance from "../axios/axiosInstance";
import { nanoid } from "nanoid";
import { useLanguage } from "../hooks/useLanguage";

interface SpreadProps {
  selectedPrompt: string;
  setCard: React.Dispatch<
    React.SetStateAction<{ korName: string; engName: string; id: number }>
  >;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const Spread: FC<SpreadProps> = ({ selectedPrompt, setCard, setIsLoading }) => {
  const { language } = useLanguage();
  const id = nanoid(10);
  const navigate = useNavigate();
  const { setApiResponse } = useApiResponse();
  const [ cardName, setCardName ] = useState<string>("");

  // eslint-disable-next-line no-unused-vars
  const handleClick = async (_e: unknown) => {
    setIsLoading(true);

    const number = Math.floor(Math.random() * 78);
    const selectedCard = CardsData.find((card) => card.id === number);
    if (selectedCard) {
      setCard(selectedCard);
      const name =
        language === "ko" ? selectedCard.korName : selectedCard.engName;
      setCardName(name);
    }
    try {
      const response = await axiosInstance.post("/completions", {
        prompt: selectedPrompt,
        card: cardName,
        targetLang: language,
      });
      if (selectedCard) {
        setApiResponse({
          card: cardName,
          cardId: selectedCard?.id,
          prompt: selectedPrompt,
          result: response.data,
        });

        navigate(`/answer/${id}`);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`${classes.main} grid h-[50vh] place-items-center`}>
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
      <div
        className={`${classes.card} ${classes.c5}`}
        onClick={(e) => handleClick(e)}
      ></div>
    </div>
  );
};

export default Spread;
