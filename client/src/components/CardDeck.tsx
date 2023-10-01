import { FC, useState } from "react";
import Spread from "./Spread";
import Loading from "./Loading";

interface CardDeckProps {
  selectedPrompt: string;
  setCard: React.Dispatch<
    React.SetStateAction<{ korName: string; engName: string; id: number }>
  >;
}

const CardDeck: FC<CardDeckProps> = ({ selectedPrompt, setCard }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-violet-400 text-lg">" {selectedPrompt} "</h1>
            <p className="text-gray-500 text-sm mb-6">
              아래 카드 중 하나를 선택해주세요
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
