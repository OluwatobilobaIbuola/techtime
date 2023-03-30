import Pages from "./Layout/index";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
function App() {
  return (
    <>
      <HelmetProvider>
        <BrowserRouter>
          <Pages />
        </BrowserRouter>
      </HelmetProvider>
    </>
  );
}

export default App;
