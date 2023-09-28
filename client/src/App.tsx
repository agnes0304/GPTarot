import "./App.css";
import Ask from "./pages/Ask";
import { ApiResponseProvider } from "./context/ApiResponse";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Result from "./pages/Result";

const App = () => {
  return (
    <ApiResponseProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Ask />} />
          <Route path="/answer/:nanoId" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </ApiResponseProvider>
  );
};

export default App;
