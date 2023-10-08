import React, { useRef } from "react";
import classes from "../styles/TiltCard.module.css";

const TiltCard: React.FC = () => {
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

  return (
    <div
      ref={cardRef}
      className={classes.card}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseLeave}
    >
      {/* <div className="inner-card"></div> */}
    </div>
  );
};

export default TiltCard;
