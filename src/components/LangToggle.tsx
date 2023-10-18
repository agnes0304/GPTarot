import { FC } from "react";
import classes from "../styles/LangToggle.module.css";
import { useLanguage } from "../hooks/useLanguage";

// 기본은 영어, 토글 클릭하면 한글로 변경
const LangToggle: FC = () => {
  const { language, setLanguage } = useLanguage();

  const handleToggle = () => {
    if (language === "en") {
      setLanguage("ko");
    } else {
      setLanguage("en");
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-[100vw] md:w-[65%]">
        <div className={classes.switch}>
          <input
            id="languageToggle"
            className={`${classes.checkToggle} ${classes.checkToggleRoundFlat}`}
            type="checkbox"
            onChange={handleToggle}
            checked={language === "ko"}
          />
          <label htmlFor="languageToggle"></label>
          <span className={classes.on}>ENG</span>
          <span className={classes.off}>한글</span>
        </div>
      </div>
    </div>
  );
};

export default LangToggle;
