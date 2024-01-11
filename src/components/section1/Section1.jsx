import React from "react";
import Navbar from "../navbar/Navbar";
import gumletDashboard from "../../assets/gumlet-dashboard.svg";

const Section1 = () => {
  return (
    <div className="bg-gradient-to-r from-[#291FB1]  to-[rgb(80,70,230)]  ... md:rounded-b-[90%]">
      <div className="md:px-2 lg:px-48 flex flex-col justify-center gap-8 p-6">
        <h1 className=" md:px-12 lg:pr-80 text-3xl md:text-5xl font-semibold text-left  text-white mt-20">
          Best Vimeo Alternative For Video Hosting
        </h1>
        <div className="md:flex justify-center flex flex-wrap items-center md:gap-10 lg:gap-20 gap-10 md:justify-between md:px-12">
          <span className="text-base text-zinc-300 text-wrap flex-1">
            A comprehensive video hosting, security, and streaming solution that
            ensures buffer-free video delivery with each view.
          </span>
          <div className="md:p-2 flex md:flex-wrap  bg-white rounded-full">
            <input
              type="email"
              className="p-2 md:text-sm text-xs outline-none rounded-l-full"
              placeholder="john@gmail.com"
            />
            <button className="bg-[#5046E6] md:p-2 rounded-full md:px-7 px-2 md:text-sm text-xs text-white hover:scale-110 duration-200 transform">
              Try for Free
            </button>
          </div>
        </div>
      </div>
      <div
        className="flex justify-center items-center mt-3 "
        // style={{
        //   backgroundImage:
        //     "linear-gradient(to bottom, transparent 50%, white 50%)",
        //   pointerEvents: "none",
        // }}
      >
        <img src={gumletDashboard} alt="" />
      </div>
    </div>
  );
};

export default Section1;
