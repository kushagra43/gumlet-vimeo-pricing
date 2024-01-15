import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import { FaArrowRight } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({handleButtonClick}) => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openInNewTab = (url) => {
    const newTab = window.open(`https://${url}`, "_blank");
    newTab.focus();
  };
  

  return (
    <div
      className={`flex justify-between p-4 mb-8 w-full z-30 fixed ${
        scrolling ? "bg-violet" : "bg-transparent"
      }`}
      id="navbar"
      style={{
        borderRadius: "16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(6.6px)",
        WebkitBackdropFilter: "blur(6.6px)",
      }}
    >
      <img
        src={logo}
        alt="gumlet Logo"
        className=" w-2/5 md:w-max cursor-pointer"
        onClick={() => {
          openInNewTab("www.gumlet.com");
        }}
      />
      <button onClick={handleButtonClick} className="text-[#5046E6] flex justify-center items-center gap-2  font-semibold bg-white p-2 px-6 rounded-full hover:scale-110 duration-200 transform">
        Try for Free <FaArrowRight />{" "}
      </button>
    </div>
  );
};

export default Navbar;
