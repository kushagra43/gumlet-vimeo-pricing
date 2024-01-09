import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import { FaArrowRight } from "react-icons/fa6";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const fullHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      // Check if the user has scrolled past the full height of the container
      setIsScrolled(scrollPosition > fullHeight);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`flex justify-between p-4 mb-8 w-full sticky top-0 ${
        isScrolled ? "bg-violet" : "bg-transparent"
      }`}
    >
      <img src={logo} alt="gumlet Logo" />
      <button className="text-[#5046E6] flex justify-center items-center gap-2 font-semibold bg-white p-2 px-6 rounded-full hover:scale-110 duration-200 transform">
        Try for Free <FaArrowRight />{" "}
      </button>
    </div>
  );
};

export default Navbar;
