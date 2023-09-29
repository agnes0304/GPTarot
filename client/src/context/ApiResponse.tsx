import { createContext, useState, useContext, ReactNode, FC } from "react";

interface ApiResponseData {
  card: string;
  cardId: number;
  prompt: string;
  result: string;
}

interface ApiResponseContextProps {
  apiResponse: ApiResponseData;
  setApiResponse: React.Dispatch<React.SetStateAction<ApiResponseData>>;
}

interface ApiResponseProviderProps {
  children: ReactNode;
}

export const ApiResponseContext = createContext<ApiResponseContextProps | null>(
  null
);

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
  const [apiResponse, setApiResponse] = useState<ApiResponseData>({
    card: "",
    cardId: 100,
    prompt: "",
    result: "",
  });

  return (
    <ApiResponseContext.Provider value={{ apiResponse, setApiResponse }}>
      {children}
    </ApiResponseContext.Provider>
  );
};
