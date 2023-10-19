import { FC, useEffect, useState } from "react";
import UserInput from "../components/UserInput";
import CardDeck from "../components/CardDeck";
import LangToggle from "../components/LangToggle";

const Ask: FC = () => {
  const [opacity, setOpacity] = useState(0);
  const [prompt, setPrompt] = useState("");
  const [, /*card*/ setCard] = useState<{
    korName: string;
    engName: string;
    id: number;
  }>({ korName: "", engName: "", id: 0 });
  const [showCardDeck, setShowCardDeck] = useState(false);

  const handleEnter = (event?: React.FormEvent<HTMLFormElement>) => {
    if (event) {
      event.preventDefault();
    }
    // CardDeck render
    setShowCardDeck(true);
  };

  useEffect(() => {
    setOpacity(1);
  }, []);

  return (
    <div style={{ transition: "opacity 1s ease", opacity: opacity }}>
      {!showCardDeck && (
        <div className="grid place-items-center h-[100vh]">
          <div>
            <LangToggle />
            <UserInput
              prompt={prompt}
              setPrompt={setPrompt}
              handleEnter={handleEnter}
            />
          </div>
        </div>
      )}
      {showCardDeck && <CardDeck selectedPrompt={prompt} setCard={setCard} />}
    </div>
  );
};

export default Ask;
