import { FC, useState } from "react";
import UserInput from "../components/UserInput";
import CardDeck from "../components/CardDeck";

const Ask: FC = () => {
  const [prompt, setPrompt] = useState("");
  const [/*card*/, setCard] = useState<{
    korName: string;
    engName: string;
    id: number;
  }>({ korName: "", engName: "", id: 0 });

  return (
    <>
      <UserInput prompt={prompt} setPrompt={setPrompt} />
      <CardDeck selectedPrompt={prompt} setCard={setCard} />
    </>
  );
};

export default Ask;
