import { FC } from "react";
import classes from "../styles/Loading.module.css";
import { useLanguage } from "../hooks/useLanguage";
import { InnerText } from "../data/InnerText";

const Loading: FC = () => {
  const { language } = useLanguage();

  return (
      <div className="flex justify-center items-center flex-col">
        <h1 className={`${classes.text} text-violet-400`}>
          {language === "ko" ? InnerText.loading.ko : InnerText.loading.en}
        </h1>
        <div className={`${classes.load} mt-4`}>
          <div className="relative w-[52px] h-[52px] border-2 border-violet-400 rounded-[100%] mx-auto my-0">
            <div
              className={`${classes.ballHolder} absolute flex justify-center items-center w-[12px] h-[45px] left-[18px] top-0`}
            >
              <div className="absolute top-[-10px] left-0 w-[15px] h-[15px] rounded-[100%] bg-violet-400"></div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Loading;
