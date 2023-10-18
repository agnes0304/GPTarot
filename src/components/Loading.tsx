import { FC, useState, useEffect } from "react";
import classes from "../styles/Loading.module.css";
import { useLanguage } from "../hooks/useLanguage";
import { InnerText } from "../data/InnerText";

const Loading: FC = () => {
  const { language } = useLanguage();
  const [showSecond, setShowSecond] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSecond(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center items-center flex-col gap-1">
      {language === "ko" ? (
        showSecond ? (
          <>
            <h1 className={`${classes.text} text-violet-400`}>
              {InnerText.translate.first}
            </h1>
            <p className={`${classes.text} text-violet-400 text-sm`}>
              {InnerText.translate.second}
            </p>
          </>
        ) : (
          <h1 className={`${classes.text} text-violet-400`}>
            {InnerText.loading.ko}
          </h1>
        )
      ) : (
        <h1 className={`${classes.text} text-violet-400`}>
          {InnerText.loading.en}
        </h1>
      )}
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
