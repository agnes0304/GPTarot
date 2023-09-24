import { useState } from "react";
import classes from "./UserInput.module.css";
import SampleQ from "./SampleQ";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const UserInput = () => {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleClear = () => {
    setValue("");
  };

  return (
    <>
      <div className={classes.userInputContainer}>
        <input
          className={classes.userInput}
          required
          type="text"
          value={value}
          onChange={handleChange}
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
      <p>test: {value}</p>
      <SampleQ setValue={setValue} />
    </>
  );
};

export default UserInput;
