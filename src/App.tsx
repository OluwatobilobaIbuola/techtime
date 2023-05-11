import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./Layout/index";
import { EventValuesContext } from "./context/context";
function App() {
  return (
    <>
      <HelmetProvider>
        <BrowserRouter>
          <EventValuesContext>
            <Layout />
          </EventValuesContext>
        </BrowserRouter>
      </HelmetProvider>
    </>
  );
}

export default App;
