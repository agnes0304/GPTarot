import { FC, useRef, useEffect } from "react";
import classes from "./CardFront.module.css";
import VanillaTilt from "vanilla-tilt";

interface HTMLDivElementWithTilt extends HTMLDivElement {
  vanillaTilt: {
    destroy: () => void;
  };
}

const CardFront: FC = () => {
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
  return (
    <div className={classes.cardFront} ref={cardRef}>
      <p>Front</p>
    </div>
  );
};

export default CardFront;
