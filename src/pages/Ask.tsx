import { FC, useState } from "react";
import UserInput from "../components/UserInput";
import CardDeck from "../components/CardDeck";
import LangToggle from "../components/LangToggle";
import TiltCard from "../components/TiltCard";

const Ask: FC = () => {
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

  return (
    <>
    <TiltCard />
      {!showCardDeck && (
        <>
          <LangToggle />
          <UserInput
            prompt={prompt}
            setPrompt={setPrompt}
            handleEnter={handleEnter}
          />
        </>
      )}
      {showCardDeck && <CardDeck selectedPrompt={prompt} setCard={setCard} />}
      {/* 뒤로가기 버튼이 있어야 할 듯 */}
    </>
  );
};

export default Ask;
