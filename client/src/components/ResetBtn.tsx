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
    <button
      className="flex justify-center items-center w-max h-[40px] p-4 rounded-[50%] cursor-pointer text-violet-400/50 hover:text-violet-400 hover:border-violet-400"
      type="button"
      onClick={handleClick}
    >
      {isNew ? (
        <div className="flex w-full">
          <span className="material-symbols-outlined w-[25px] h-[25px] cursor-pointer text-violet-400/50 hover:text-violet-400">
            playing_cards
          </span>
          <p className="ml-[4px]">
            {language === "ko" ? InnerText.resetBtn.ko : InnerText.resetBtn.en}
          </p>
        </div>
      ) : (
        <FontAwesomeIcon icon={faArrowRotateRight} />
      )}
    </button>
  );
};

export default ResetBtn;
