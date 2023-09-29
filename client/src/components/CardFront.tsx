import { FC, useRef, useEffect, useState } from "react";
import classes from "./CardFront.module.css";
import VanillaTilt from "vanilla-tilt";
import { useApiResponse } from "../context/ApiResponse";

interface HTMLDivElementWithTilt extends HTMLDivElement {
  vanillaTilt: {
    destroy: () => void;
  };
}

const CardFront: FC = () => {
  const { apiResponse } = useApiResponse();
  const cardRef = useRef<HTMLDivElement>(null);
  const [cardImagePath, setcardImagePath] = useState("");

  useEffect(() => {
    if (cardRef.current) {
      VanillaTilt.init(cardRef.current, {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 0.5,
      });
    }

    const current = cardRef.current as HTMLDivElementWithTilt;

    return () => {
      current.vanillaTilt.destroy();
    };
  }, []);

  // 카드 이미지 id값으로 가지고 오기. assets/cards 이름이랑 동일한 넘버.
  useEffect(() => {
    const cardImageId = apiResponse.cardId;
    const path = `/src/assets/cards/${cardImageId}.webp`;
    setcardImagePath(path);
  }, []);

  return (
    <div className={classes.cardFront} ref={cardRef}>
      <img src={cardImagePath} alt={apiResponse.card} />
    </div>
  );
};

export default CardFront;
