import "./App.css";
import Section7 from "./components/Section7/Section7";
import Section1 from "./components/section1/Section1";
import Section2 from "./components/section2/Section2";
import Section3 from "./components/section3/Section3";
import Section4 from "./components/section4/Section4";
import Section5 from "./components/section5/Section5";
import Section6 from "./components/section6/Section6";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { useRef } from "react";

function App() {
  const targetSectionRef = useRef(null);

  const handleButtonClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <Section1 targetSectionRef={targetSectionRef} />
      <Section2 />
      <Section3
        targetSectionRef={targetSectionRef}
        handleButtonClick={handleButtonClick}
      />
      <Section4 />
      <Section5 handleButtonClick={handleButtonClick} />
      <Section6 handleButtonClick={handleButtonClick} />
      <Section7 />
      <Footer handleButtonClick={handleButtonClick} />
    </>
  );
}

export default App;
