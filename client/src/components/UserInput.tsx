import { FC } from "react";
import classes from "./UserInput.module.css";
import SampleQ from "./SampleQ";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface UserInputProps {
  prompt: string;
  setPrompt: React.Dispatch<React.SetStateAction<string>>;
}

const UserInput: FC<UserInputProps> = ({ setPrompt, prompt }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrompt(event.target.value);
  };

  const handleClear = () => {
    setPrompt("");
  };

  return (
    <>
      <div className={classes.userInputContainer}>
        <input
          className={classes.userInput}
          required
          type="text"
          value={prompt}
          onChange={(e)=>handleChange(e)}
        />
        <button
          className={classes.clearButton}
          onClick={handleClear}
          type="button"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <label className={classes.userInputLabel}>무엇이 궁금하신가요?</label>
      </div>
      <p>test: {prompt}</p>
      <SampleQ setPrompt={setPrompt} />
    </>
  );
};

export default UserInput;
