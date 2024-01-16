import "./App.css";
import { useRef } from "react";
import First from "./pages/First";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Second from "./pages/Second";
import Third from "./pages/Third";

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Third />} />
          <Route path="/second" element={<Second />} />
          <Route path="/third" element={<First />} />
        </Routes>
      </BrowserRouter>
    </>
  );

}

export default App;
