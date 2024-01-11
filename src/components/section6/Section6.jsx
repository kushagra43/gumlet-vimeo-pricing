import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Section6 = () => {
  return (
    <div className="mt-20">
      <div className="flex flex-col justify-center items-center text-center text-4xl font-semibold">
        <p>One Platform for Everything Video</p>
      </div>
      <div className="grid grids-col-1 md:grid-cols-2 lg:grid-cols-4 md:flex-row justify-center lg:px-48 px-2 items-center mt-12 gap-10  md:gap-6 lg:gap-0">
        <div className="flex flex-col justify-center items-center border-r px-8 ">
          <span className="text-2xl font-semibold text-center">Connect With Apps</span>
          <span className="mt-6 font-xs text-zinc-500 text-center">
            Send data to Google Analytics, add FB pixels and VAST tags for
            effective targeting and monetization.
          </span>
        </div>
        <div className="flex flex-col justify-center items-center border-r px-8 ">
          <span className="text-2xl font-semibold text-center">
            Video Pipeline On Autopilot
          </span>
          <span className="mt-6 font-xs text-zinc-500 text-center">
            Seamlessly integrate with your workflow. Automate with Zapier,
            Pabbly, APIs, and webhooks and reduce time to stream.
          </span>
        </div>
        <div className="flex flex-col justify-center items-center border-r px-8  ">
          <span className="text-2xl font-semibold text-center">
            No upload limits and quotas{" "}
          </span>
          <span className="mt-6 font-xs text-zinc-500 text-center">
            Track engagement and playback metrics. Make data driven decisions to
            grow your audience.
          </span>
        </div>
        <div className="flex flex-col justify-center items-center  px-8 ">
          <span className="text-2xl font-semibold text-center">Stunning Streaming Experience</span>
          <span className="mt-6 font-xs text-zinc-500 text-center">
            Upload your videos without limits and restrictive quotas. Migrate
            all your videos from Vimeo in one click.
          </span>
        </div>
      </div>
      <div className="flex justify-center items-center mt-12 mb-12">
        <button className="text-white flex justify-center items-center gap-2 font-bold bg-[#5046E6] p-4 px-8 rounded-full hover:scale-110 duration-200 transform">
          Try for Free <FaArrowRight />{" "}
        </button>
      </div>
    </div>
  );
};

export default Section6;
