import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FC } from "react";
import { useParams } from "react-router-dom";
import { useApiResponse } from "../context/ApiResponse";
import axios from "axios";

// db에 post하는 요청보내고 url 생성해줘야 함.
const SharerBtn: FC = () => {
  const { apiResponse } = useApiResponse();
  const { nanoId } = useParams();
  const bodyData = {
    id: nanoId,
    prompt: apiResponse.prompt,
    card: apiResponse.card,
    result: apiResponse.result,
    cardId: apiResponse.cardId,
  };

  const handleClick = async () => {
    try {
      const response = await axios.post("http://localhost:8080/save", bodyData);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button className="flex justify-center items-center w-[40px] h-[40px] p-4 rounded-[50%] cursor-pointer hover:text-[#c9c9ff] hover:border-[#c9c9ff]" type="button" onClick={handleClick}>
      <FontAwesomeIcon icon={faArrowUpFromBracket} />
    </button>
  );
};

export default SharerBtn;
