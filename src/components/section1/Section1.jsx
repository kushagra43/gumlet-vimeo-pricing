import React from "react";
import Navbar from "../navbar/Navbar";
import gumletDashboard from "../../assets/gumlet-dashboard.svg";

const Section1 = () => {
  return (
    <div className="bg-gradient-to-r from-[#291FB1]  to-[rgb(80,70,230)] h-1/2  ...">
      <div className="px-48 flex flex-col justify-center gap-8 p-6">
        <h1 className="px-12 text-5xl font-semibold text-white">
          Best Vimeo Alternative <br /> For Video Hosting
        </h1>
        <div className="flex items-center gap-20 justify-between px-12">
          <span className=" text-base text-zinc-300">
            A comprehensive video hosting, security, and streaming <br />{" "}
            solution that ensures buffer-free video delivery with each view.
          </span>
          <div className="p-2 bg-white rounded-full">
            <input
              type="email"
              className="p-2 text-sm"
              placeholder="john@gmail.com"
            />
            <button className="bg-[#5046E6] p-2 rounded-full px-7 text-sm text-white hover:scale-110 duration-200 transform">
              Try for Free
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-3 ">
        <img src={gumletDashboard} alt="" />
      </div>
    </div>
  );
};

export default Section1;
