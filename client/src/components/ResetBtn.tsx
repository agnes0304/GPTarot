import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateRight } from "@fortawesome/free-solid-svg-icons";
// import { faFeather } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import playingCards from "../assets/playingCards.svg";

interface Props {
  isNew?: boolean;
}

const ResetBtn: FC<Props> = ({ isNew }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <button
      className="flex justify-center items-center w-max h-[40px] p-4 rounded-[50%] cursor-pointer hover:text-[#c9c9ff] hover:border-[#c9c9ff]"
      type="button"
      onClick={handleClick}
    >
      <div className="flex w-full">
        <span className="material-symbols-outlined w-[25px] h-[25px] hover:text-[#c9c9ff]">
          playing_cards
        </span>
        <p className="ml-[4px]">질문하러 가기</p>
      </div>
      {/* {isNew ? (
        <div className="flex w-full">
        <span className="material-symbols-outlined w-[25px] h-[25px] hover:text-[#c9c9ff]">
          playing_cards
        </span>
        <p className="ml-[4px]">질문하러 가기</p>
      </div>
      ) : (
        <FontAwesomeIcon icon={faArrowRotateRight} />
      )} */}
    </button>
  );
};

export default ResetBtn;
