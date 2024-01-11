import React from "react";
import lace from "../../assets/lace.svg";
import growthschool from "../../assets/growthschool.svg";
import colearn from "../../assets/colearn.svg";
import apna from "../../assets/apna.svg";
import sportsKeeda from "../../assets/sportsKeeda.svg";
import simplilearn from "../../assets/simplilearn.svg";

const Section2 = () => {
  return (
    <div className="flex flex-col justify-center md:gap-12 gap-2 items-center mt-2">
      <h2 className=" font-bold md:text-lg text-xs mt-8 ">
        {" "}
        ❤️ By 1000s of Sumolings and the Top Video-First Companies
      </h2>
      <marquee behavior="" width="90%" scroll-amount="50" direction="right" loop="infinite" hspace="0">
        <div className="flex items-center md:gap-28 gap-12 mt-4 mb-6">
          <img src={lace} alt="better place" />
          <img src={growthschool} alt="growth school" />
          <img src={colearn} alt="co learn" />
          <img src={apna} alt="apna" />
          <img src={sportsKeeda} alt="sportsKeeda" />
          <img src={simplilearn} alt="simplilearn" />
        </div>
      </marquee>
      <div className="flex justify-center items-center">
        <div className="bg-[#F3F3F3] border-[3px] border-[#E8E8E8]  flex md:gap-20 gap-3 md:p-12 p-3 md:px-16 px-3 rounded-lg mb-10">
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-transparent md:text-5xl lg:text-6xl text-2xl  bg-clip-text bg-gradient-to-r from-[#5046E6] to-[#0B00AB] ... ">
              57%
            </h1>
            <span className=" font-medium lg:text-lg md:text-base text-xs">Average optimization</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-transparent md:text-5xl lg:text-6xl text-2xl  bg-clip-text bg-gradient-to-r from-[#5046E6] to-[#0B00AB] ... ">
              1.5 Bn+
            </h1>
            <span className=" font-medium lg:text-lg md:text-base text-xs">Media files every day</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-transparent md:text-5xl lg:text-6xl text-2xl  bg-clip-text bg-gradient-to-r from-[#5046E6] to-[#0B00AB] ... ">
              8k+
            </h1>
            <span className=" font-medium lg:text-lg md:text-base text-xs">Sites and apps</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
