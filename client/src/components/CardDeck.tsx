import { FC } from "react";
import Spread from "./Spread";

interface CardDeckProps {
  selectedPrompt: string;
  setCard: React.Dispatch<React.SetStateAction<number>>;
}

const CardDeck: FC<CardDeckProps> = ({ selectedPrompt, setCard }) => {
  return (
    <div>
      <div>{selectedPrompt}</div>
      <div>
        <Spread setCard={setCard} />
      </div>
    </div>
  );
};

export default CardDeck;
