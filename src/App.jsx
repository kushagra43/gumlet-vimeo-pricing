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
import { HelmetProvider } from "react-helmet-async";

function App() {
  const targetSectionRef = useRef(null);

  // const handleButtonClick = () => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };
  const handleButtonClick = () => {
    if (targetSectionRef.current) {
      targetSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start", // Align to the start of the target element
        inline: "nearest", // Align to the nearest edge of the target element
        // offsetTop: -100,
      });
    }
  };

  const helmetContext = {};


  return (
    <>
      <HelmetProvider context={helmetContext}>
        <Navbar handleButtonClick={handleButtonClick} />
        <Section1 targetSectionRef={targetSectionRef} ref={targetSectionRef} />
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
      </HelmetProvider>
    </>
  );
}

export default App;
