import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Section3 = () => {
  return (
    <div className="mb-20">
      <div className="flex flex-col md:justify-center md:px-80 px-8 text-center md:items-center md:text-4xl text-2xl font-semibold">
        <p>Reliable Video Hosting and Buffer - Free Streaming with Gumlet</p>
      </div>
      <div className="flex flex-col md:flex-row md:gap-4 gap-6 justify-between items-center mt-12 md:px-32">
        <div className="flex flex-1 flex-col px-12 justify-center items-center ">
          <span className="text-2xl font-semibold">24x7</span>
          <span className="text-2xl font-semibold">Customer Support</span>
          <span className="mt-6 font-xs text-zinc-500 text-center">
            Reach out to us via chat from the dashboard for a quick resolution
            or drop us an email. Access to integration engineers for everyone.
          </span>
        </div>
        <div className="flex flex-1 flex-col px-12 justify-center items-center ">
          <span className="text-2xl font-semibold">Predictable</span>
          <span className="text-2xl font-semibold">Pricing</span>
          <span className="mt-6 font-xs text-zinc-500 text-center">
            Simple transparent pricing with no surprise bills. Stay on top of
            your billing with alerts. Stay away from Vimeo’s yearly lock-ins and
            pay as you grow.
          </span>
        </div>
        <div className="flex flex-1 flex-col px-12 justify-center items-center  ">
          <span className="text-2xl font-semibold">Stunning</span>
          <span className="text-2xl font-semibold">Streaming Experience</span>
          <span className="mt-6 font-xs text-zinc-500 text-center">
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
