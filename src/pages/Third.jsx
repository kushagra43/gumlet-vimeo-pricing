import React, { useRef } from 'react'
import Navbar from '../components/navbar/Navbar'
import Section2 from '../components/section2/Section2'
import Section3 from '../components/section3/Section3'
import Section4 from '../components/section4/Section4'
import Section5 from '../components/section5/Section5'
import Section6 from '../components/section6/Section6'
import Section7 from '../components/Section7/Section7'
import Footer from '../components/footer/Footer'
import Section1 from '../components/ThirdPage/Section1'

const Third = () => {

  const targetSectionRef = useRef(null);

  const handleButtonClick = () => {
    if (targetSectionRef.current) {
      targetSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  return (
    <div>
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
    </div>
  )
}

export default Third