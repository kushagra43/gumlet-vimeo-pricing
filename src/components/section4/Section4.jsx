import React from "react";
import logo2 from "../../assets/logo2.svg";
import vimeo from "../../assets/vimeo.svg";
import tick from "../../assets/tick.svg";
import cross from "../../assets/cross.svg";
import arrowdown from "../../assets/arrowdown.svg";

const Section4 = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <h1 className=" text-4xl font-semibold">Gumlet vs Vimeo</h1>
        <div className="border-[2px] rounded-3xl border-[#E2E2E2] mt-12">
          <table className="bg-zinc-50 rounded-3xl text-sm">
            <tr>
              <td className="p-5 px-10 text-2xl font-semibold">Features</td>
              <td className="p-5 px-10">
                <img src={logo2} alt="" />
              </td>
              <td className="p-5 px-10">
                <img src={vimeo} alt="" />
              </td>
            </tr>

            <tr className="rounded-2xl border-t-2">
              <td className="p-4 px-10 border-r-2">Pay for</td>
              <td className="p-4 px-10">What you use</td>
              <td className="p-4 px-10">Per seat</td>
            </tr>

            <tr className="rounded-2xl border-t-2">
              <td className="p-4 px-10 border-r-2">Billing</td>
              <td className="p-4 px-10">Transparent </td>
              <td className="p-4 px-10">Opaque </td>
            </tr>

            <tr className="rounded-2xl border-t-2">
              <td className="p-4 px-10 border-r-2">Glitchy videos</td>
              <td className="p-4 px-10">No </td>
              <td className="p-4 px-10">Frequently </td>
            </tr>

            <tr className="rounded-2xl border-t-2">
              <td className="p-4 px-10 border-r-2">Instant video start time</td>
              <td className="p-4 px-10 ">
                <img src={tick} alt="" className=" backdrop-blur-sm" />
              </td>
              <td className="p-4 px-10">
                <img src={cross} alt="" />
              </td>
            </tr>

            <tr className="rounded-2xl border-t-2">
              <td className="p-4 px-10 border-r-2">
                Ads based monetization (VAST Tags)
              </td>
              <td className="p-4 px-10">
                <img src={tick} alt="" />
              </td>
              <td className="p-4 px-10">
                <img src={cross} alt="" />
              </td>
            </tr>

            <tr className="rounded-2xl border-t-2">
              <td className="p-4 px-10 border-r-2">360-degree analytics</td>
              <td className="p-4 px-10">
                <img src={tick} alt="" />
              </td>
              <td className="p-4 px-10">
                <img src={cross} alt="" />
              </td>
            </tr>

            <tr className="rounded-2xl border-t-2">
              <td className="p-4 px-10 border-r-2">
                Protection from illegal downloads & content piracy
              </td>
              <td className="p-4 px-10">
                <img src={tick} alt="" />
              </td>
              <td className="p-4 px-10">
                <img src={cross} alt="" />
              </td>
            </tr>

            <tr className="rounded-2xl border-t-2">
              <td className="p-4 px-10 border-r-2">24X7 Chat support</td>
              <td className="p-4 px-10">
                <img src={tick} alt="" />
              </td>
              <td className="p-4 px-10">
                <img src={cross} alt="" />
              </td>
            </tr>
          </table>
        </div>
        <div className="flex justify-center items-center mt-12 mb-12">
          <div className=" flex flex-col justify-center items-center rounded-xl border-2 border-[#E2E2E2]">
            <h1 className="text-4xl font-bold p-8 px-40">
              Detailed Feature Comparison
            </h1>
            <img className="relative mb-[-20px] cursor-pointer" src={arrowdown} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
