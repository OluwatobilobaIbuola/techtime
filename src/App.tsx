import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./Layout/index";
function App() {
  return (
    <>
      <HelmetProvider>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </HelmetProvider>
    </>
  );
}

export default App;
