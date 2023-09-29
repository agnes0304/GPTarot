import { FC } from "react";
import SampleQData from "../data/SampleQData";

interface SampleQProps {
  setPrompt: React.Dispatch<React.SetStateAction<string>>;
  handleEnter: () => void;
}

const SampleQ: FC<SampleQProps> = ({ setPrompt, handleEnter }) => {
  const sampleClickHandler = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    setPrompt(event.currentTarget.innerText);
    handleEnter();
  };

  return (
    <>
      <h1 className="text-gray-300 font-thin text-[0.8rem] my-4">아래는 예시 질문입니다. 클릭하면 바로 카드 선택으로!</h1>
      <ul className="flex flex-col items-center">
        {SampleQData.map((data) => {
          return (
            <li
              className="cursor-pointer text-gray-500 hover:text-violet-400"
              onClick={(e) => sampleClickHandler(e)}
            >
              {data.question}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default SampleQ;
