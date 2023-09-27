import { FC } from "react";
import SharerBtn from "./SharerBtn";
import ResetBtn from "./ResetBtn";
import classes from "./Actions.module.css";

const Actions: FC = () => {
  return (
    <div className={classes.btnContainer}>
      <SharerBtn />
      <ResetBtn />
    </div>
  );
};

export default Actions;
