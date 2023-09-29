import { FC, useEffect, useState } from "react";
import SharerBtn from "./SharerBtn";
import ResetBtn from "./ResetBtn";
import { useApiResponse } from "../context/ApiResponse";

const Actions: FC = () => {
  const { apiResponse } = useApiResponse();
  const [isNew, setIsNew] = useState<boolean>(false);

  useEffect(() => {
    if (apiResponse.cardId === null) {
      setIsNew(true);
    } else {
      setIsNew(false);
    }
  }, []);

  return (
    <div className="flex gap-2 justify-center items-center mt-8">
      {isNew ? (
        <ResetBtn isNew={isNew} />
      ) : (
        <>
          <SharerBtn />
          <ResetBtn />
        </>
      )}
    </div>
  );
};

export default Actions;
