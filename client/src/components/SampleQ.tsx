import { FC } from "react";
import SampleQData from "../data/SampleQData";
import classes from "./SampleQ.module.css";

interface SampleQProps {
  setPrompt: React.Dispatch<React.SetStateAction<string>>;
}

const SampleQ: FC<SampleQProps> = ({ setPrompt }) => {
  const sampleClickHandler = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    setPrompt(event.currentTarget.innerText);
  };

  return (
    <ul>
      {SampleQData.map((data) => {
        return (
          <li className={classes.questionItem} onClick={(e)=>sampleClickHandler(e)}>
            {data.question}
          </li>
        );
      })}
    </ul>
  );
};

export default SampleQ;
