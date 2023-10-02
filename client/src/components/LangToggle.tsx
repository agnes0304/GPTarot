import { FC } from "react";
import classes from "../styles/LangToggle.module.css";

// 기본은 영어, 토글 클릭하면 한글로 변경
const LangToggle: FC = () => {
  return (
    <div>
      <div className={classes.switch}>
        <input
          id="languageToggle"
          className={`${classes.checkToggle} ${classes.checkToggleRoundFlat}`}
          type="checkbox"
        />
        <label htmlFor="languageToggle"></label>
        <span className={classes.on}>ENG</span>
        <span className={classes.off}>한글</span>
      </div>
    </div>
  );
};

export default LangToggle;
