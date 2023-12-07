import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateRight } from "@fortawesome/free-solid-svg-icons";
import error404 from "../assets/error404.webp";
import styles from "../styles/Error.module.css";

const Error: FC = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div
      className={`${styles["animate-float"]} flex flex-col mt-[100px] items-center text-2xl justify-center gap-4`}
    >
      <h1 className="text-gray-200">Oops! Sorry...</h1>
      <div
        className="group w-[200px] h-[365px] grid place-items-center"
        onClick={handleClick}
      >
        <img
          className="rounded-xl object-cover shadow-2xl shadow-slate-100 hover:opacity-40 transition-opacity duration-500"
          src={error404}
          alt="404"
        />
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute flex flex-col items-center justify-center pointer-events-none">
          <FontAwesomeIcon className="text-white" icon={faArrowRotateRight} />
          <p className=" text-white text-center text-sm">Retry</p>
        </div>
      </div>
    </div>
  );
};

export default Error;
