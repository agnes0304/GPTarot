import { createContext, useState, ReactNode, FC } from "react";

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
