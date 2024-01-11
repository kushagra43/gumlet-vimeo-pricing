import React, { useEffect, useState } from "react";
import dashboard2 from "../../assets/dashboard2.svg";
import left from "../../assets/left.svg";
import right from "../../assets/right.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import star from "../../assets/star.svg";

const Section7 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Track window width

  const slides = [
    {
      description: ` " What a breath of fresh air! I've looked at a number of video hosting apps, none of which convinced me to drop Vimeo even with the lifetime deal. But 5 minutes working with Gumlet and I am so stoked! Beautiful, clean, intuitive interface. Bye Vimeo never really cared for you anyway!" `,
      name: "Lilly Smith",
      designation: "Entrepreneur",
    },
    {
      description: `"Gumlet best video hosting platform Gumlet is a way to stay away from YouTube and Vimeo. Great product, great performance, great experience video streaming, fast delivery, cost effective with lots of storage and features. You even get statistics for your videos. Gumlet also help with your images."
`,
      name: "Corinne N.",
      designation: "Business Owner",
    },
    {
      description: `"Gumlet is an incredible platform Gumlet offers an easy and efficient way to optimize and deliver images on websites. Gumlet’s CDN ensures fast image loading and improved website performance. The API integration also allows for seamless implementation into existing workflows."
`,
      name: "Carla D.",
      designation: "Small Business Owner",
    },
    {
      description: `"A great alternative to Vimeo, Adilo, or even Wistia. What I appreciated most was its user-centric approach to video hosting. The platform's fast and quick loading times, comprehensive metrics, and reasonable cost structure provided the efficiency and affordability I was seeking in a video hosting service."
`,
      name: "Carla D.",
      designation: "Small Business Owner",
    },
    {
      description: `"Great Vimeo Alternative Its an exceptional video hosting platform that surpasses expectations and will replace Vimeo in my book. The platform's quick optimization process and detailed analytics provide valuable insights. I hope they remain and grow in the market place."
`,
      name: "Carla D.",
      designation: "Small Business Owner",
    },
  ];

  const CustomPrevArrow = (props) => (
    <button {...props} className="slick-prev">
      <img src={left} alt="Previous" />
    </button>
  );

  const CustomNextArrow = (props) => (
    <button {...props} className="slick-next">
      <img src={right} alt="Next" />
    </button>
  );

  const settings = {
    // dots:true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    slidesToShow:
    windowWidth <= 768 ? 1 : 
    windowWidth <= 1024 ? 2 : 3,
    autoplay:true
  }
  useEffect(() => {
    // Update windowWidth when window is resized
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return;
    () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="mb-12 mt-12">
      <div className="flex justify-center items-center text-center font-bold text-4xl">
        <h1>See What People are Saying About Us</h1>
      </div>
      {/* Slider container */}
      <div className="w-[85%] m-auto">
        <div className="mt-20">
          <Slider {...settings}>
            {slides.map((d, index) => (
              <div
                key={index}
                className=" text-black bg-white rounded-xl mx-4 "
              >
                <div className="mx-4">
                  <div className="flex  justify-center rounded-lg text-white  items-center p-6 py-16 px-8 bg-gradient-to-r from-[#291FB1]  to-[#5046E6] ...">
                    <span>{d.description}</span>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1 p-4">
                    <span className="text-2xl font-semibold">{d.name}</span>
                    <span className="text-center text-sm text-zinc-400 font-medium">
                      {d.designation}
                    </span>
                    <span className="flex">
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Section7;
