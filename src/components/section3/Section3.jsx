import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Section3 = () => {
  return (
    <div className="mb-20">
      <div className="flex flex-col md:justify-center lg:px-80 md:px-10 px-8 text-center md:items-center md:text-4xl text-2xl font-semibold">
        <p>Reliable Video Hosting and Buffer - Free Streaming with Gumlet</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:flex-row md:gap-4 gap-6 justify-center items-center mt-12 lg:px-32">
        <div className="flex flex-1 flex-col px-12 md:px-6 justify-center items-center ">
          <span className="text-2xl font-semibold text-center">
            24x7 Customer Support
          </span>
          <span className="mt-6 font-xs text-zinc-500 text-center">
            Reach out to us via chat from the dashboard for a quick resolution
            or drop us an email. Access to integration engineers for everyone.
          </span>
        </div>
        <div className="flex flex-1 flex-col px-12  md:px-6 justify-center items-center ">
          <span className="text-2xl font-semibold text-center">
            Predictable Pricing
          </span>
          <span className="mt-6 font-xs text-zinc-500 text-center">
            Simple transparent pricing with no surprise bills. Stay on top of
            your billing with alerts. Stay away from Vimeo’s yearly lock-ins and
            pay as you grow.
          </span>
        </div>
        <div className="flex flex-1 flex-col px-12  md:px-6 justify-center justify-self-center items-center  ">
          <span className="text-2xl font-semibold text-center">
            Stunning Streaming Experience
          </span>
          <span className="mt-6 font-xs text-zinc-500 justify-center text-center">
            Buffer-free streaming across desktops, TVs and mobile devices.
            Multi-CDN infra with 99.95% uptime and low-latency global delivery.
          </span>
        </div>
      </div>
      <div className="flex justify-center items-center mt-12 mb-12">
        <button className="text-white flex justify-center items-center gap-2 font-semibold bg-[#5046E6] p-4 px-8 rounded-full hover:scale-110 duration-200 transform">
          Try for Free <FaArrowRight />{" "}
        </button>
      </div>
    </div>
  );
};

export default Section3;
