import { ApiResponseProvider } from "./context/ApiResponse";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LangSetting";
import Ask from "./pages/Ask";
import Result from "./pages/Result";
import Error from "./pages/Error";

const App = () => {
  return (
    <LanguageProvider>
      <ApiResponseProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Ask />} />
            <Route path="/answer/:nanoId" element={<Result />} />
            <Route path="*" element={<Error />} />
            <Route path="/test" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </ApiResponseProvider>
    </LanguageProvider>
  );
};

export default App;
