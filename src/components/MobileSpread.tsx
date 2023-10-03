import { FC, useState } from "react";
import classes from "../styles/MobileSpread.module.css";
import back from "../assets/cardBack.webp";

interface MobileSpreadProps {
  handleClick: (e: unknown) => void;
}

const MobileSpread: FC<MobileSpreadProps> = ({ handleClick }) => {
  const [hoverCard, setHoverCard] = useState<boolean>(false);
  const cards = Array(5).fill(null);

  const handleHoverStart = () => {
    setHoverCard(true);
  };
  const handleHoverEnd = () => {
    setHoverCard(false);
  };

  return (
    <div 
      className={`flex justify-center items-center overflow-x-auto w-[92%] pt-[40px] ml-[10px] transform transition-all ease-in-out duration-300 ${hoverCard ? "-translate-y-5" : ""}`}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
      onTouchStart={handleHoverStart}
      onTouchEnd={handleHoverEnd}
    >
      {cards.map((_, index) => (
        <div
          key={index}
          id={`card${index + 1}`}
          onClick={(e) => handleClick(e)}
          className={`${classes.card} w-[200px] h-[356px] cursor-pointer flex items-center justify-center relative`}
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
