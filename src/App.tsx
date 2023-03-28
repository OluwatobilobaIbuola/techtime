import Pages from "./routes/index";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </>
  );
}

export default App;
