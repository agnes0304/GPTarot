import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import classes from "./ResetBtn.module.css";

const ResetBtn = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  }

  return (
    <button className={classes.resetBtn} type="button" onClick={handleClick}>
      <FontAwesomeIcon icon={faArrowRotateRight} />
    </button>
  );
};

export default ResetBtn;
