import Ask from "./pages/Ask";
import { ApiResponseProvider } from "./context/ApiResponse";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Result from "./pages/Result";
import { LanguageProvider } from "./context/LangSetting";

const App = () => {
  return (
    <LanguageProvider>
      <ApiResponseProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Ask />} />
            <Route path="/answer/:nanoId" element={<Result />} />
          </Routes>
        </BrowserRouter>
      </ApiResponseProvider>
    </LanguageProvider>
  );
};

export default App;
