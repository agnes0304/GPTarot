import { FC } from "react";
import SampleQData from "../data/SampleQData";

interface SampleQProps {
  setPrompt: React.Dispatch<React.SetStateAction<string>>;
  handleEnter: () =>void;
}

const SampleQ: FC<SampleQProps> = ({ setPrompt, handleEnter }) => {
  const sampleClickHandler = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    setPrompt(event.currentTarget.innerText);
    handleEnter();
  };

  return (
    <ul>
      {SampleQData.map((data) => {
        return (
          <li className="cursor-pointer text-gray-400" onClick={(e)=>sampleClickHandler(e)}>
            {data.question}
          </li>
        );
      })}
    </ul>
  );
};

export default SampleQ;
