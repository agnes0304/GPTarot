import { FC } from "react";
import styles from "../styles/DragSpread.module.css";
import CardStack from "./CardStack";

interface MobileSpreadProps {
  handleClick: (e: unknown) => void;
}

const DragSpread: FC<MobileSpreadProps> = ({ handleClick }) => {
  return (
    <div className={styles.container}>
      <CardStack handleClick={handleClick} />
    </div>
  );
};

export default DragSpread;
