// import { FC, useRef, useEffect, useState } from "react";
// import axiosInstance from "../axios/axiosInstance";
// import classes from "../styles/CardFront.module.css";
// import VanillaTilt from "vanilla-tilt";
// import { useApiResponse } from "../hooks/useApiResponse";
// import { useParams } from "react-router-dom";

// interface HTMLDivElementWithTilt extends HTMLDivElement {
//   vanillaTilt: {
//     destroy: () => void;
//   };
// }

// const CardFront: FC = () => {
//   const { nanoId } = useParams();
//   const { apiResponse } = useApiResponse();
//   const cardRef = useRef<HTMLDivElement>(null);
//   const [cardImagePath, setcardImagePath] = useState("");

//   useEffect(() => {
//     if (cardRef.current) {
//       VanillaTilt.init(cardRef.current, {
//         max: 25,
//         speed: 400,
//         glare: true,
//         "max-glare": 0.5,
//       });
//     }

//     const current = cardRef.current as HTMLDivElementWithTilt;

//     return () => {
//       current.vanillaTilt.destroy();
//     };
//   }, []);

//   // 카드 이미지 id값으로 가지고 오기. assets/cards 이름이랑 동일한 넘버.
//   // apiResponse.cardId가 null이면 get요청 보내기.
//   useEffect(() => {
//     if(apiResponse.cardId === 100) {
//       const getCard = async () => {
//         try {
//           const response = await axiosInstance.get(`/load/${nanoId}`);
//           // 카드 데이터 전부 받아오기
//           const cardData = await response.data;
//           const cardImageId = cardData.cardId;
//           const path = `/${cardImageId}.webp`;
//           setcardImagePath(path);
//         } catch (error) {
//           console.error(error);
//         }
//       }
//       getCard();
//     }
//     else {
//       const cardImageId = apiResponse.cardId;
//       const path = `/${cardImageId}.webp`;
//       setcardImagePath(path);
//     }
//   }, [apiResponse.cardId]);

//   return (
//     <div className={`${classes.cardFront} absolute w-full h-full bg-[#231F50] text-white flex items-center justify-center rounded-[10px] border-[10px] border-[#231f50] shadow-lg shadow-violet-400/30`} ref={cardRef}>
//       <img src={cardImagePath} alt={apiResponse.card} />
//     </div>
//   );
// };

// export default CardFront;

// For mobile
// TODO: cardFront tailwind css 아직 안옮김
import { FC, useRef, useEffect, useState } from "react";
import axiosInstance from "../axios/axiosInstance";
import { useApiResponse } from "../hooks/useApiResponse";
import { useParams } from "react-router-dom";
import classes from "../styles/TiltCard.module.css";

const CardFront: FC = () => {
  const { nanoId } = useParams();
  const { apiResponse } = useApiResponse();
  const [cardImagePath, setcardImagePath] = useState("");
  const cardRef = useRef<HTMLDivElement>(null);

  const handleEvent = (pageX: number, pageY: number) => {
    if (!cardRef.current) return;

    const cardOffsetLeft = cardRef.current.offsetLeft;
    const cardOffsetTop = cardRef.current.offsetTop;
    const cardWidth = cardRef.current.offsetWidth;
    const cardHeight = cardRef.current.offsetHeight;

    const mouseX = pageX - cardOffsetLeft - cardWidth / 2;
    const mouseY = pageY - cardOffsetTop - cardHeight / 2;

    cardRef.current.style.transform = `rotateX(${
      (mouseY / cardHeight) * -40
    }deg) rotateY(${(mouseX / cardWidth) * 40}deg)`;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    handleEvent(e.pageX, e.pageY);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    handleEvent(e.touches[0].pageX, e.touches[0].pageY);
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = "rotateY(0deg)";
    }
  };

  useEffect(() => {
    if (apiResponse.cardId === 100) {
      const getCard = async () => {
        try {
          const response = await axiosInstance.get(`/load/${nanoId}`);
          // 카드 데이터 전부 받아오기
          const cardData = await response.data;
          const cardImageId = cardData.cardId;
          const path = `/${cardImageId}.webp`;
          setcardImagePath(path);
        } catch (error) {
          console.error(error);
        }
      };
      getCard();
    } else {
      const cardImageId = apiResponse.cardId;
      const path = `/${cardImageId}.webp`;
      setcardImagePath(path);
    }
  }, [apiResponse.cardId]);

  return (
    // <div className={`${classes.cardFront} absolute w-full h-full bg-[#231F50] text-white flex items-center justify-center rounded-[10px] border-[10px] border-[#231f50] shadow-lg shadow-violet-400/30`} ref={cardRef}></div>
    <div
      ref={cardRef}
      className={classes.card}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseLeave}
    >
      <div className={classes.innerCard}>
        <img src={cardImagePath} alt={apiResponse.card} />
      </div>
    </div>
  );
};

export default CardFront;
