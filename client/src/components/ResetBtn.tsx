import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateRight } from "@fortawesome/free-solid-svg-icons";

const ResetBtn = () => {
  return (
    <button type="button">
      <FontAwesomeIcon icon={faArrowRotateRight} />
    </button>
  );
};

export default ResetBtn;
