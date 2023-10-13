import { FC, useRef, useEffect, useState } from "react";
import axiosInstance from "../axios/axiosInstance";
import classes from "../styles/CardFront.module.css";
import VanillaTilt from "vanilla-tilt";
import { useApiResponse } from "../hooks/useApiResponse";
import { useParams } from "react-router-dom";

interface HTMLDivElementWithTilt extends HTMLDivElement {
  vanillaTilt: {
    destroy: () => void;
  };
}

const CardFront: FC = () => {
  const { nanoId } = useParams();
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

  useEffect(() => {
    if(apiResponse.cardId === 100) {
      const getCard = async () => {
        try {
          const response = await axiosInstance.get(`/load/${nanoId}`);
          const cardData = await response.data;
          const cardImageId = cardData.cardId;
          const path = `/${cardImageId}.webp`;
          setcardImagePath(path);
        } catch (error) {
          console.error(error);
        }
      }
      getCard();
    }
    else {
      const cardImageId = apiResponse.cardId;
      const path = `/${cardImageId}.webp`;
      setcardImagePath(path);
    }
  }, [apiResponse.cardId]);

  return (
    <div className={`${classes.cardFront} absolute w-full h-full bg-[#231F50] text-white flex items-center justify-center rounded-[10px]`} ref={cardRef}>
      <img className="w-full h-full object-cover object-center rounded-[6px]" src={cardImagePath} alt={apiResponse.card} />
    </div>
  );
};

export default CardFront;