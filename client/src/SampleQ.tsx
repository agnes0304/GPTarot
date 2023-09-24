import { FC } from "react";
import SampleQData from "./data/SampleQData";
import classes from "./SampleQ.module.css";

interface SampleQProps {
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const SampleQ: FC<SampleQProps> = ({ setValue }) => {
  const sampleClickHandler = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    setValue(event.currentTarget.innerText);
  };

  return (
    <ul>
      {SampleQData.map((data) => {
        return (
          <li className={classes.questionItem} onClick={sampleClickHandler}>
            {data.question}
          </li>
        );
      })}
    </ul>
  );
};

export default SampleQ;
