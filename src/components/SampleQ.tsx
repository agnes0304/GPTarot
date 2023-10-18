import { FC } from "react";
import SampleQData from "../data/SampleQData";
import { useLanguage } from "../hooks/useLanguage";
import { InnerText } from "../data/InnerText";

interface SampleQProps {
  setPrompt: React.Dispatch<React.SetStateAction<string>>;
  handleEnter: () => void;
}

const SampleQ: FC<SampleQProps> = ({ setPrompt, handleEnter }) => {
  const { language } = useLanguage();
  const sampleClickHandler = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    setPrompt(event.currentTarget.innerText);
    handleEnter();
  };

  return (
    <>
      <h1 className="text-gray-300 text-center font-thin text-[0.8rem] my-4">
        {language === "ko" ? (
          InnerText.sampleQ.ko
        ) : (
          <>{InnerText.sampleQ.en.first}{<br />}{InnerText.sampleQ.en.second}</>
        )}
      </h1>
      <ul className="flex flex-col items-center">
        {SampleQData.map((data) => {
          return (
            <li
              key={data.id}
              className="cursor-pointer text-gray-500 hover:text-violet-400 w-[95vw] m-auto text-center"
              onClick={(e) => sampleClickHandler(e)}
            >
              {language === "ko" ? data.questionKo : data.questionEn}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default SampleQ;
