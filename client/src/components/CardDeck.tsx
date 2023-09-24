import { FC } from "react";
import Spread from "./Spread";

interface CardDeckProps {
  selectedValue: string;
}

const CardDeck: FC<CardDeckProps> = ({ selectedValue }) => {
  return (
    <div>
      <div>{selectedValue}</div>
      <div>
        <Spread />
      </div>
    </div>
  );
};

export default CardDeck;
