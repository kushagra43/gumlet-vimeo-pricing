import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Section6 = () => {
  return (
    <div className="mt-20">
      <div className="flex flex-col justify-center items-center text-4xl font-semibold">
        <p>One Platform for Everything Video</p>
      </div>
      <div className="flex  justify-center items-center mt-12">
        <div className="flex flex-col justify-center items-center border-r px-8 ">
          <span className="text-2xl font-semibold">Connect With</span>
          <span className="text-2xl font-semibold">Apps</span>
          <span className="mt-6 font-xs text-zinc-500 text-center">
            Send data to Google <br /> Analytics, add FB pixels <br /> and VAST
            tags for <br /> effective targeting and <br /> monetization.
          </span>
        </div>
        <div className="flex flex-col justify-center items-center border-r px-8 ">
          <span className="text-2xl font-semibold">Video Pipeline</span>
          <span className="text-2xl font-semibold">On Autopilot</span>
          <span className="mt-6 font-xs text-zinc-500 text-center">
            Seamlessly integrate with <br /> your workflow. Automate <br /> with
            Zapier, Pabbly, APIs, <br /> and webhooks and <br /> reduce time to
            stream.
          </span>
        </div>
        <div className="flex flex-col justify-center items-center border-r px-8  ">
          <span className="text-2xl font-semibold">No upload limits</span>
          <span className="text-2xl font-semibold"> and quotas </span>
          <span className="mt-6 font-xs text-zinc-500 text-center">
            Track engagement <br /> and playback metrics. <br /> Make data
            driven <br /> decisions to grow <br /> your audience.
          </span>
        </div>
        <div className="flex flex-col justify-center items-center  px-8 ">
          <span className="text-2xl font-semibold">Stunning</span>
          <span className="text-2xl font-semibold">Streaming Experience</span>
          <span className="mt-6 font-xs text-zinc-500 text-center">
            Upload your videos <br /> without limits and <br /> restrictive
            quotas. Migrate <br />
            all your videos from <br /> Vimeo in one click.
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
