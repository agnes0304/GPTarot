import { FC, useState } from "react";
import classes from "../styles/MobileSpread.module.css";
import back from "../assets/cardBack.webp";

interface MobileSpreadProps {
  handleClick: (e: unknown) => void;
}

const MobileSpread: FC<MobileSpreadProps> = ({ handleClick }) => {
  const [hoverCard, sethoverCard] = useState<number | null>(null);
  const cards = Array(5).fill(null);

  const handleHoverStart = (index: number) => {
    sethoverCard(index);
  };
  const handleHoverEnd = () => {
    sethoverCard(null);
  };

  return (
    <div className="flex justify-center items-center overflow-x-auto w-[80%] pt-[40px]">
      {cards.map((_, index) => (
        <div
          key={index}
          id={`card${index + 1}`}
          onClick={(e) => handleClick(e)}
          onTouchStart={() => handleHoverStart(index)}
          onTouchEnd={handleHoverEnd}
          className={`${
            classes.card
          } w-[200px] h-[356px] cursor-pointer flex items-center justify-center transform transition-all ease-in-out duration-300 ${
            hoverCard === index ? "-translate-y-5" : ""
          } relative`}
          style={{
            marginLeft: index !== 0 ? "-160px" : "0",
            zIndex: cards.length - index,
          }}
        >
          <img
            src={back}
            alt="back side of card"
            className="object-cover rounded-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default MobileSpread;
