import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import classes from "./SharerBtn.module.css";
const SharerBtn = () => {
  return (
    <button className={classes.shareBtn} type="button">
      <FontAwesomeIcon icon={faArrowUpFromBracket} />
    </button>
  );
};

export default SharerBtn;