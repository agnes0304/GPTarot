import { FC } from "react";
import classes from "./Loading.module.css";

const Loading: FC = () => {
  return (
    <div className={classes.loadingContainer}>
      <h1 className={classes.text}>답변을 가지고 오고 있어요...</h1>
      <div className={classes.load}>
        <div className={classes.ring}>
          <div className={classes.ballHolder}>
            <div className={classes.ball}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
