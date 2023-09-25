import "./App.css";
import Ask from "./pages/Ask";
import { ApiResponseProvider } from "./context/ApiResponse";

const App = () => {
  return (
    <ApiResponseProvider>
      <Ask />
      {/* Result 페이지가 공유하겠지 */}
    </ApiResponseProvider>
  );
};

export default App;
