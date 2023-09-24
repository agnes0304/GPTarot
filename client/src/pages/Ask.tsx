import { FC, useState } from "react";
import UserInput from "../components/UserInput";
import CardDeck from "../components/CardDeck";

const Ask: FC = () => {
  const [value, setValue] = useState("");
  
  return (
    <>
      <UserInput value={value} setValue={setValue} />
      <CardDeck selectedValue={value} />
    </>
  );
};

export default Ask;
