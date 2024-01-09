import React, { useState } from "react";
import videocms from "../../assets/videocms.svg";
import videocms2 from "../../assets/videocms2.svg";
import player from "../../assets/player.svg";
import player2 from "../../assets/player2.svg";
import cinematic from "../../assets/cinematic.svg";
import cinematic2 from "../../assets/cinematic2.svg";
import videoprotection from "../../assets/videoprotection.svg";
import videoprotection2 from "../../assets/videoprotection2.svg";
import tick2 from "../../assets/tick2.svg";
import dashboard2 from "../../assets/dashboard2.svg";
import dashboard3 from "../../assets/dashboard3.svg";
import dashboard4 from "../../assets/dashboard4.svg";
import { FaArrowRight } from "react-icons/fa6";

const Section5 = () => {
  const [activeTab, setActiveTab] = useState("videocms"); // Set the default active tab

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "videocms":
        return (
          <div className="flex gap-20 p-12 justify-center items-center text-white">
            <div className="flex flex-col gap-4 flex-1">
              <h1 className="text-4xl font-semibold">Simplified video CMS</h1>
              <span className=" text-zinc-300">
                Securely store and manage your video assets. <br /> Control
                every aspect of your videos.
              </span>

              <div className="flex gap-4 items-center text-white text-sm">
                <span>
                  <img src={tick2} alt="" />
                </span>
                <span>
                  Start streaming instantly, don’t get stuck in <br /> upload
                  queues
                </span>
              </div>
              <div className="flex  gap-4 items-center text-white text-sm">
                <span>
                  <img src={tick2} alt="" />
                </span>
                <span>
                  Organize videos with collections, folders and <br /> video
                  profiles{" "}
                </span>
              </div>
              <div className="flex  gap-4 items-center text-white text-sm">
                <span>
                  <img src={tick2} alt="" />
                </span>
                <span>
                  Add multi subtitles and audio tracks for a <br /> global
                  audience{" "}
                </span>
              </div>
              <div className="flex  gap-4 items-center text-white text-sm">
                <span>
                  <img src={tick2} alt="" />
                </span>
                <span>
                  Inbuilt video SEO and video channels to <br /> amplify your
                  reach{" "}
                </span>
              </div>
            </div>
            <div className="flex-1">
              <img src={dashboard2} alt="" />
            </div>
          </div>
        );
      case "player":
        return (
          <div className="flex gap-20 p-12 justify-center items-center text-white">
            <div className="flex flex-col gap-4 flex-1">
              <h1 className="text-4xl font-semibold">
                Your branding on <br /> your videos
              </h1>
              <span className=" text-zinc-300">
                Securely store and manage your video assets. <br /> Control
                every aspect of your videos.
              </span>

              <div className="flex gap-4 items-center text-white text-sm">
                <span>
                  <img src={tick2} alt="" />
                </span>
                <span>
                  Start streaming instantly, don’t get stuck in <br /> upload
                  queues
                </span>
              </div>
              <div className="flex  gap-4 items-center text-white text-sm">
                <span>
                  <img src={tick2} alt="" />
                </span>
                <span>
                  Organize videos with collections, folders and <br /> video
                  profiles{" "}
                </span>
              </div>
              <div className="flex  gap-4 items-center text-white text-sm">
                <span>
                  <img src={tick2} alt="" />
                </span>
                <span>
                  Add multi subtitles and audio tracks for a <br /> global
                  audience{" "}
                </span>
              </div>
              <div className="flex  gap-4 items-center text-white text-sm">
                <span>
                  <img src={tick2} alt="" />
                </span>
                <span>
                  Inbuilt video SEO and video channels to <br /> amplify your
                  reach{" "}
                </span>
              </div>
            </div>
            <div className="flex-1">
              <img src={dashboard3} alt="" />
            </div>
          </div>
        );
      case "cinematic":
        return (
          <div className="flex gap-20 p-12 justify-center items-center text-white">
            <div className="flex flex-col gap-4 flex-1">
              <h1 className="text-4xl font-semibold">
                Cinematic video <br /> experience
              </h1>
              <span className=" text-zinc-300">
                Securely store and manage your video assets. <br /> Control
                every aspect of your videos.
              </span>

              <div className="flex gap-4 items-center text-white text-sm">
                <span>
                  <img src={tick2} alt="" />
                </span>
                <span>
                  AI-powered video compression for <br /> optimized bitrates and
                  video quality
                </span>
              </div>
              <div className="flex  gap-4 items-center text-white text-sm">
                <span>
                  <img src={tick2} alt="" />
                </span>
                <span>
                  Adaptive streaming + HLS for uninterrupted <br /> streaming on
                  choppy networks
                </span>
              </div>
              <div className="flex  gap-4 items-center text-white text-sm">
                <span>
                  <img src={tick2} alt="" />
                </span>
                <span>
                  Multi CDN infra with 99.95% uptime and low- <br /> latency
                  global streaming
                </span>
              </div>
              <div className="flex  gap-4 items-center text-white text-sm">
                <span>
                  <img src={tick2} alt="" />
                </span>
                <span>
                  Pick resolutions from 240p to 4K and latest <br /> codecs:
                  H264 and H265
                </span>
              </div>
            </div>
            <div className="flex-1">
              <img src={dashboard4} alt="" />
            </div>
          </div>
        );
      case "videoprotection":
        return (
          <div className="flex gap-20 p-12 justify-center items-center text-white">
            <div className="flex flex-col gap-4 flex-1">
              <h1 className="text-4xl font-semibold">Protect your videos</h1>
              <span className=" text-zinc-300">
                Netflix-grade video security to maximize ROI and <br /> minimize
                piracy and theft.{" "}
              </span>
              <div className="flex  gap-4 items-center text-white text-sm">
                <span>
                  <img src={tick2} alt="" />
                </span>
                <span>
                  Widevine & Fairplay DRMs prevent content <br /> theft
                </span>
              </div>
              <div className="flex gap-4 items-center text-white text-sm">
                <span>
                  <img src={tick2} alt="" />
                </span>
                <span>
                  Secure playbacks with Signed URLs and <br /> Geo-blocks
                </span>
              </div>
              <div className="flex  gap-4 items-center text-white text-sm">
                <span>
                  <img src={tick2} alt="" />
                </span>
                <span>
                  Dynamic watermarks to curb theft via screen <br /> recording
                </span>
              </div>
              <div className="flex  gap-4 items-center text-white text-sm">
                <span>
                  <img src={tick2} alt="" />
                </span>
                <span>Encrypted storage for secure video hosting</span>
              </div>
            </div>
            <div className="flex-1">
              <img src={dashboard4} alt="" />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#291FB1]  to-[#5046E6] ... flex flex-col justify-center items-center p-6 py-12">
      <div className=" bg-[#4337e0] gap-8 flex justify-center items-center p-2 rounded-full  border border-white border-opacity-20">
        <div
          className={`flex gap-2 justify-center items-center rounded-3xl   p-2 px-12 cursor-pointer ${
            activeTab === "videocms"
              ? "active-tab text-violet-600 bg-white"
              : "text-white"
          }`}
          onClick={() => handleTabClick("videocms")}
        >
          <img src={activeTab === "videocms" ? videocms : videocms2} alt="" />
          <span>Video CMS</span>
        </div>
        <div
          className={`flex gap-2 justify-center items-center rounded-3xl   p-2 px-12 cursor-pointer ${
            activeTab === "player"
              ? "active-tab text-violet-600 bg-white"
              : "text-white"
          }`}
          onClick={() => handleTabClick("player")}
        >
          <img src={activeTab === "player" ? player2 : player} alt="" />
          <span>Player Customization </span>
        </div>
        <div
          className={`flex gap-2 justify-center items-center rounded-3xl  p-2 px-12 cursor-pointer ${
            activeTab === "cinematic"
              ? "active-tab text-violet-600 bg-white"
              : "text-white"
          }`}
          onClick={() => handleTabClick("cinematic")}
        >
          <img
            src={activeTab === "cinematic" ? cinematic2 : cinematic}
            alt=""
          />
          <span>Cinematic video</span>
        </div>
        <div
          className={`flex gap-2 justify-center items-center rounded-3xl   p-2 px-12 cursor-pointer ${
            activeTab === "videoprotection"
              ? "active-tab text-violet-600 bg-white"
              : "text-white"
          }`}
          onClick={() => handleTabClick("videoprotection")}
        >
          <img
            src={
              activeTab === "videoprotection"
                ? videoprotection2
                : videoprotection
            }
            alt=""
          />
          <span>Video Protection</span>
        </div>
      </div>

      {renderTabContent()}

      <div>
        <button className="text-[#5046E6] flex justify-center items-center gap-2 font-bold bg-white  px-8 p-4 rounded-full hover:scale-110 duration-200 transform">
          Try for Free <FaArrowRight />{" "}
        </button>
      </div>
    </div>
  );
};

export default Section5;
