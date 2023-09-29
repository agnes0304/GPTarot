import { FC } from "react";
import classes from "../styles/Loading.module.css";

const Loading: FC = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className={classes.text}>답변을 가지고 오고 있어요...</h1>
      <div className={`${classes.load} mt-4`}>
        <div className="relative w-[52px] h-[52px] border-2 border-[#c9c9ff] rounded-[100%] mx-auto my-0">
          <div className={`${classes.ballHolder} absolute flex justify-center items-center w-[12px] h-[45px] left-[18px] top-0`}>
            <div className="absolute top-[-10px] left-0 w-[15px] h-[15px] rounded-[100%] bg-[#c9c9ff]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
