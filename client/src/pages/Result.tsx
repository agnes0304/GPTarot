import { FC } from "react";
import Card from "../components/Card";
import Actions from "../components/Actions";

const Result: FC = () => {
  return (
    <div>
      <Card />
      {/* <p>{apiResponse}</p> */}
      <Actions />
    </div>
  );
};

export default Result;
