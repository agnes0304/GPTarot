import { FC } from "react";
import error404 from "../assets/error404.webp";
// import error500 from "../assets/error500.webp";

const Error: FC = () => {
  return (
    <div>
      <h1>OOPS!</h1>
        <img src={error404} alt="404" />
    </div>
  );
};

export default Error;
