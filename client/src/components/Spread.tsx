import { FC } from "react";
import classes from "./Spread.module.css";

const Spread: FC = () => {
  return (
    <div className={classes.main}>
      <div className={`${classes.card} ${classes.c1}`}></div>
      <div className={`${classes.card} ${classes.c2}`}></div>
      <div className={`${classes.card} ${classes.c3}`}></div>
      <div className={`${classes.card} ${classes.c4}`}></div>
    </div>
  );
};

export default Spread;
