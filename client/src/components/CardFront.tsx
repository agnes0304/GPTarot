import { FC, useRef, useEffect } from "react";
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
  const cardImageId = apiResponse.cardId;
  const cardImagePath = `/assets/cards/${cardImageId}.webp`;

  // context에서 가지고 오게 되면 링크 공유할 때 문제가 생김.
  // 링크 공유 시에는 db에 cardId를 저장하고 그 데이터를 가지고 오는 방식으로 변경해야 함.
  // 링크로 들어온 유저는 context가 없음. 

  return (
    <div className={classes.cardFront} ref={cardRef}>
      <img src={cardImagePath} alt={apiResponse.card} />
    </div>
  );
};

export default CardFront;
