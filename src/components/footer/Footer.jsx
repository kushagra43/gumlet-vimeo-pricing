import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import star from "../../assets/star.svg";
import bestResults from "../../assets/bestResults.svg";
import bestRoi from "../../assets/bestRoi.svg";
import leader from "../../assets/leader.svg";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-[#291FB1]  to-[#5046E6] flex gap-20 justify-center items-center p-12 text-white ">
      <div className="flex flex-col justify-center items-start gap-8">
        <h1 className="font-bold text-5xl">
          Transform Your <br /> Viewers’ Video <br /> Experiencein Minutes.
        </h1>
        <button className="text-[#5046E6] flex justify-center items-center gap-2 font-semibold bg-white p-2 px-6 rounded-full">
          Try for Free <FaArrowRight />{" "}
        </button>{" "}
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex">
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <span>
            {"  "}
            <b> &nbsp; 4.7</b> out of <b>5</b> stars{" "}
          </span>
        </div>
        <div className="flex">
            <img src={bestResults} alt="" />
            <img src={leader} alt="" />
            <img src={bestRoi} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
