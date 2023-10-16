import { FC, useState, useEffect } from "react";
import Spread from "./Spread";
import Loading from "./Loading";
import { useLanguage } from "../hooks/useLanguage";
import { InnerText } from "../data/InnerText";

interface CardDeckProps {
  selectedPrompt: string;
  setCard: React.Dispatch<
    React.SetStateAction<{ korName: string; engName: string; id: number }>
  >;
}

const CardDeck: FC<CardDeckProps> = ({ selectedPrompt, setCard }) => {
  const { language } = useLanguage();
  const [isLoading, setIsLoading] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setOpacity(1);
  }, []);

  useEffect(() => {
    if (isLoading) {
      setFadeIn(true);
    }
  }, [isLoading]);

  const fadeInStyle: React.CSSProperties = fadeIn
    ? { opacity: 1, visibility: "visible", transition: "opacity 0.5s linear" }
    : {
        opacity: 0,
        visibility: "hidden",
        transition: "visibility 0s 0.5s, opacity 0.5s linear",
      };

  return (
    <div>
      <div style={fadeInStyle}>
        <Loading />
      </div>
      {!isLoading && (
        <div
          className="flex flex-col items-center"
          style={{ transition: "opacity 1s ease", opacity: opacity }}
        >
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-violet-400 text-lg text-center w-[90%]">
              "{selectedPrompt}"
            </h1>
            <p className="text-gray-500 text-sm mb-6">
              {language === "ko"
                ? InnerText.cardDeck.ko
                : InnerText.cardDeck.en}
            </p>
          </div>
          <div>
            <Spread
              selectedPrompt={selectedPrompt}
              setCard={setCard}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CardDeck;
