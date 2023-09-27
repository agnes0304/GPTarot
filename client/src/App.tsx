import "./App.css";
import Ask from "./pages/Ask";
import { ApiResponseProvider } from "./context/ApiResponse";
import Result from "./pages/Result";

const App = () => {
  return (
    <>
      <ApiResponseProvider>
        <Ask />
        <Result />
      </ApiResponseProvider>
    </>
  );
};

export default App;
