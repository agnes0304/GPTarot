import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage";
import { InnerText } from "../data/InnerText";

interface Props {
  isNew?: boolean;
}

const ResetBtn: FC<Props> = ({ isNew }) => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      {isNew ? (
        <div className="flex w-full cursor-pointer text-violet-400/50 hover:text-violet-400 hover:bg-violet-500/50 rounded-xl p-3" onClick={handleClick}>
          <span className="material-symbols-outlined w-[25px] h-[25px]">
            playing_cards
          </span>
          <p className="ml-[4px]">
            {language === "ko" ? InnerText.resetBtn.ko : InnerText.resetBtn.en}
          </p>
        </div>
      ) : (
        <button
          className="flex justify-center items-center w-[40px] h-[40px] p-3 cursor-pointer text-violet-400/50 rounded-full hover:text-violet-400 hover:border-violet-400 hover:bg-violet-500/50"
          type="button"
          onClick={handleClick}
        >
          <FontAwesomeIcon icon={faArrowRotateRight} />
        </button>
      )}
    </>
  );
};

export default ResetBtn;
