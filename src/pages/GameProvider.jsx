import React, { useState } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ProviderData } from "../data/ProviderData"; // Replace with your actual data
import { FaRegQuestionCircle } from "react-icons/fa";

function GameProvider() {
  const [slider, setSlider] = useState(null);

  const settings = {
    className: "center",
    // centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 1,
          slidesPerRow: 1,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
          slidesPerRow: 1,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <div className="relative w-full py-4 px-1 rounded-2xl mt-16 ">
      <div className='text-white italic h-10 w-42 ml-3 justify-center items-center text-xl font-bold'>
        GAME  PROVIDERS 
      </div>
      <div className="w-full  rounded-xl py-2 ">
      <div className=" overflow-hidden  rounded-xl">
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {ProviderData.map((provider) => (
            <div key={provider.id} className="  ">
             
              <div className="flex p-2 border border-[#24262b]  justify-center  bg-[#3d3f47]  ">
                <img
                  src={provider.imageUrl}
                  alt={`Provider ${provider.id}`}
                  className="w-28 h-8 object-cover "
                />
              </div>
             
            </div>
          ))}
        </Slider>
         </div>
      </div>
      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-8 right-20 transform -translate-y-1/2 z-30 flex items-center justify-center w-10 h-10 rounded-full bg-[#3d3f47] text-white hover:bg-[#1f2124] focus:outline-none"
        onClick={() => slider?.slickPrev()}
      >
        <svg
          className="w-20 h-6 p-1 rounded-full  hover:text-white rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 1 1 5l4 4"
          />
        </svg>
        <span className="sr-only">Previous</span>
      </button>
      <button
        type="button"
        className="absolute top-8 right-4 transform -translate-y-1/2 z-30 flex items-center justify-center w-10 h-10 rounded-full bg-[#3d3f47] text-white hover:bg-[#1f2124] focus:outline-none"
        onClick={() => slider?.slickNext()}
      >
        <svg
          className="w-20 h-6 p-1 rounded-full  hover:text-white rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
        <span className="sr-only">Next</span>
      </button>
    </div>
  );
}

export default GameProvider;
