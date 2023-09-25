import { createContext, useState, useContext, ReactNode, FC } from "react";

interface ApiResponseContextProps {
  apiResponse: any; // TODO: type this
  setApiResponse: React.Dispatch<React.SetStateAction<any>>; // TODO: type this
}

interface ApiResponseProviderProps {
  children: ReactNode;
}

export const ApiResponseContext =
  createContext<ApiResponseContextProps | null>(null);

export const useApiResponse = () => {
  const context = useContext(ApiResponseContext);
  if (!context) {
    throw new Error(
      "useApiResponse must be used within an ApiResponseProvider"
    );
  }
  return context;
};

export const ApiResponseProvider: FC<ApiResponseProviderProps> = ({
  children,
}) => {
  const [apiResponse, setApiResponse] = useState<any>(null);

  return (
    <ApiResponseContext.Provider value={{ apiResponse, setApiResponse }}>
      {children}
    </ApiResponseContext.Provider>
  );
};
