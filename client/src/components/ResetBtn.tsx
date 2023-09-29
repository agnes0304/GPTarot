import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const ResetBtn = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  }

  return (
    <button className="flex justify-center items-center w-[40px] h-[40px] p-4 rounded-[50%] cursor-pointer hover:text-[#c9c9ff] hover:border-[#c9c9ff]" type="button" onClick={handleClick}>
      <FontAwesomeIcon icon={faArrowRotateRight} />
    </button>
  );
};

export default ResetBtn;
