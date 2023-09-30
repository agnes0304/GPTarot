import { FC } from "react";
import { useNavigate } from "react-router-dom";
import classes from "../styles/Spread.module.css";
import CardsData from "../data/CardsData";
import axios from "axios";
import { useApiResponse } from "../context/ApiResponse";
import { nanoid } from "nanoid";

interface SpreadProps {
  selectedPrompt: string;
  setCard: React.Dispatch<
    React.SetStateAction<{ korName: string; engName: string; id: number }>
  >;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const Spread: FC<SpreadProps> = ({ selectedPrompt, setCard, setIsLoading }) => {
  const id = nanoid(10);
  const navigate = useNavigate();
  // const [isLoading, setIsLoading] = useState(false);
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
    <div className={`${classes.main} grid h-[50vmax] place-items-center`}>
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
