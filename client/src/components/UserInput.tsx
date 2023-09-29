import { FC } from "react";
import classes from "../styles/UserInput.module.css";
import SampleQ from "./SampleQ";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface UserInputProps {
  prompt: string;
  setPrompt: React.Dispatch<React.SetStateAction<string>>;
  handleEnter: (event?: React.FormEvent<HTMLFormElement>) => void;
}

const UserInput: FC<UserInputProps> = ({ setPrompt, prompt, handleEnter }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrompt(event.target.value);
  };

  const handleClear = () => {
    setPrompt("");
  };

  return (
    <>
      <form className="relative" onSubmit={e => handleEnter(e)}>
        <input
          className={`${classes.userInput} rounded-xl p-4 w-full bg-transparent text-gray-400`}
          required
          type="text"
          value={prompt}
          onChange={(e)=>handleChange(e)}
        />
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#121212] border-none cursor-pointer text-sm text-gray-400"
          onClick={handleClear}
          type="button"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <label className={classes.userInputLabel}>무엇이 궁금하신가요?</label>
      </form>
      <SampleQ setPrompt={setPrompt} handleEnter={handleEnter} />
    </>
  );
};

export default UserInput;
