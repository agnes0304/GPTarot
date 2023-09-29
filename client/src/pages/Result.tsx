import { FC } from "react";
import Card from "../components/Card";
import Actions from "../components/Actions";

const Result: FC = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-gray-400 text-[0.8rem] mb-6">카드를 클릭하면 답을 확인할 수 있어요</p>
      <Card />
      <Actions />
    </div>
  );
};

export default Result;
