import { FC } from "react";
import SharerBtn from "./SharerBtn";
import ResetBtn from "./ResetBtn";

const Actions: FC = () => {
  return (
    <div className="flex gap-2 justify-center items-center mt-4">
      <SharerBtn />
      <ResetBtn />
    </div>
  );
};

export default Actions;
