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
            <tbody>

            <tr>
              <td className="p-3 md:p-5 md:px-10 px-3 text-xl md:text-2xl font-semibold">Features</td>
              <td className="p-3 md:p-5 md:px-10 px-3">
                <img src={logo2} alt="" />
              </td>
              <td className="p-5 px-10">
                <img src={vimeo} alt="" />
              </td>
            </tr>

            <tr className="rounded-2xl border-t-2">
              <td className="p-3 md:p-5 md:px-10 px-3 border-r-2">Pay for</td>
              <td className="p-3 md:p-5 md:px-10 px-3">What you use</td>
              <td className="p-3 md:p-5 md:px-10 px-3">Per seat</td>
            </tr>

            <tr className="rounded-2xl border-t-2">
              <td className="p-3 md:p-5 md:px-10 px-3 border-r-2">Billing</td>
              <td className="p-3 md:p-5 md:px-10 px-3">Transparent </td>
              <td className="p-3 md:p-5 md:px-10 px-3">Opaque </td>
            </tr>

            <tr className="rounded-2xl border-t-2">
              <td className="p-3 md:p-5 md:px-10 px-3 border-r-2">Glitchy videos</td>
              <td className="p-3 md:p-5 md:px-10 px-3">No </td>
              <td className="p-3 md:p-5 md:px-10 px-3">Frequently </td>
            </tr>

            <tr className="rounded-2xl border-t-2">
              <td className="p-3 md:p-5 md:px-10 px-3 border-r-2">Instant video start time</td>
              <td className="p-3 md:p-5 md:px-10 px-3 ">
                <img src={tick} alt="" className="h-1/5 w-1/5 " />
              </td>
              <td className="p-3 md:p-5 md:px-10 px-3">
                <img src={cross} alt="" className="h-1/5 w-1/5 " />
              </td>
            </tr>

            <tr className="rounded-2xl border-t-2">
              <td className="p-3 md:p-5 md:px-10 px-6 border-r-2">
                Ads based monetization (VAST Tags)
              </td>
              <td className="p-3 md:p-5 md:px-10 px-3">
                <img src={tick} alt="" className="h-1/5 w-1/5 " />
              </td>
              <td className="p-3 md:p-5 md:px-10 px-3">
                <img src={cross} alt="" className="h-1/5 w-1/5 " />
              </td>
            </tr>

            <tr className="rounded-2xl border-t-2">
              <td className="p-3 md:p-5 md:px-10 px-6 border-r-2">360-degree analytics</td>
              <td className="p-3 md:p-5 md:px-10 px-3">
                <img src={tick} alt="" className="h-1/5 w-1/5 " />
              </td>
              <td className="p-3 md:p-5 md:px-10 px-3">
                <img src={cross} alt="" className="h-1/5 w-1/5 " />
              </td>
            </tr>

            <tr className="rounded-2xl border-t-2">
              <td className="p-3 md:p-5 md:px-10 px-3 border-r-2">
                Protection from illegal downloads & content piracy
              </td>
              <td className="p-3 md:p-5 md:px-10 px-3">
                <img src={tick} alt=""  className="h-1/5 w-1/5 " />
              </td>
              <td className="p-3 md:p-5 md:px-10 px-3">
                <img src={cross} alt=""  className="h-1/5 w-1/5 " />
              </td>
            </tr>

            <tr className="rounded-2xl border-t-2">
              <td className="p-3 md:p-5 md:px-10 px-6 border-r-2">24X7 Chat support</td>
              <td className="p-3 md:p-5 md:px-10 px-3">
                <img src={tick} alt="" className="h-1/5 w-1/5 "  />
              </td>
              <td className="p-3 md:p-5 md:px-10 px-3">
                <img src={cross} alt="" className="h-1/5 w-1/5 " />
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-center items-center mt-12 mb-12">
          <div className=" flex flex-col justify-center items-center rounded-xl border-2 border-[#E2E2E2]">
            <h1 className="text-2xl text-center md:text-4xl font-bold md:p-8 md:px-40 p-3">
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
