import { BrowserRouter, Routes, Route } from "react-router-dom";

import AboutUs from "./pages/Aboutus";
import Button from "./components/Button";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>

      <Button label="hi Me" onClick={() => console.log("Button Clicked")} />
    </>
  );
}

export default App;
