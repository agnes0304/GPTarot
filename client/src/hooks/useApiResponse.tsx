import { useContext } from "react";
import { ApiResponseContext } from "../context/ApiResponse";

export const useApiResponse = () => {
    const context = useContext(ApiResponseContext);
    if (!context) {
      throw new Error(
        "useApiResponse must be used within an ApiResponseProvider"
      );
    }
    return context;
  };