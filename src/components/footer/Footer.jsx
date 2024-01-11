import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import star from "../../assets/star.svg";
import bestResults from "../../assets/bestResults.svg";
import bestRoi from "../../assets/bestRoi.svg";
import leader from "../../assets/leader.svg";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-[#291FB1]  to-[#5046E6] flex md:gap-20  justify-center items-center md:p-12 p-6 text-white ">
      <div className="flex flex-col justify-center items-start gap-8 flex-1">
        <h1 className="font-bold md:text-5xl text-xl ">
          Transform Your  Viewers’ Video  Experience in Minutes.
        </h1>
        <button className="text-[#5046E6] flex  justify-center text-sm md:text-base items-center gap-2 font-bold bg-white md:p-4 md:px-8 px-3 p-2 rounded-full">
         <React.Fragment> Try for Free <FaArrowRight />{" "}</React.Fragment> 
        </button>{" "}
      </div>
      <div className="flex flex-col justify-center items-center flex-1">
        <div className="flex">
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <span className="text-center">
            {"  "}
            <b> &nbsp; 4.7</b> out of <b>5</b> stars{" "}
          </span>
        </div>
        <div className="flex mr-4">
            <img src={bestResults} alt="" className="flex-1 w-1/3 h-1/3" />
            <img src={leader} alt="" className="flex-1 w-1/2 h-1/2" />
            <img src={bestRoi} alt="" className="flex-1 w-1/3 h-1/3" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
