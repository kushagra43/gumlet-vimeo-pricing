import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Section3 = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center text-4xl font-semibold">
        <p>Reliable Video Hosting and Buffer-</p>
        <p>Free Streaming with Gumlet</p>
      </div>
      <div className="flex gap-12 justify-center items-center mt-12">
        <div className="flex flex-col justify-center items-center ">
          <span className="text-2xl font-semibold">24x7</span>
          <span className="text-2xl font-semibold">Customer Support</span>
          <span className="mt-6 font-xs text-zinc-500 text-center">
            Reach out to us via chat from the <br /> dashboard for a quick
            resolution or <br /> drop us an email. Access to <br /> integration
            engineers for everyone.
          </span>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <span className="text-2xl font-semibold">Predictable</span>
          <span className="text-2xl font-semibold">Pricing</span>
          <span className="mt-6 font-xs text-zinc-500 text-center">
            Simple transparent pricing with no <br /> surprise bills. Stay on
            top of your billing <br /> with alerts. Stay away from Vimeo’s{" "}
            <br /> yearly lock-ins and pay as you grow.
          </span>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <span className="text-2xl font-semibold">Stunning</span>
          <span className="text-2xl font-semibold">Streaming Experience</span>
          <span className="mt-6 font-xs text-zinc-500 text-center">
            Buffer-free streaming across <br /> desktops, TVs and mobile
            devices. <br />
            Multi-CDN infra with 99.95% uptime <br /> and low-latency global
            delivery.
          </span>
        </div>
      </div>
      <div className="flex justify-center items-center mt-12 mb-12">
        <button className="text-white flex justify-center items-center gap-2 font-semibold bg-[#5046E6] p-2 px-6 rounded-full hover:scale-110 duration-200 transform">
          Try for Free <FaArrowRight />{" "}
        </button>
      </div>
    </div>
  );
};

export default Section3;
