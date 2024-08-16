import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from "../../assets/164300069949835.png";
import Img2 from "../../assets/164300088905192 (3).png";
import Img3 from "../../assets/164300091137615.png";
import Img4 from "../../assets/164300094200682.png";

function FirstSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 8000,
    initialSlide: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: true,
        },
      },
    ],
  };

  const items = [Img1, Img2, Img3, Img4];

  return (
    <div className="w-full sm:w-72 p-4 sm:p-7 h-auto sm:h-52">
      <p className="text-white h-10 w-full sm:w-auto pl-4 font-semibold text-sm sm:text-base">
        <span className="text-pink-800">Much </span>Wow Wins
      </p>
      <Slider {...settings} className="mt-2 h-auto sm:h-32">
        {items.map((img, index) => (
          <div key={index} className="slide-item h-auto sm:h-14">
            <div className="flex items-center">
              <img
                src={img}
                alt={`slide${index + 1}`}
                className="mr-3 w-10 h-10 sm:w-20 sm:h-16 rounded-xl"
              />
              <span className="text-white text-xs sm:text-sm">
                <p>
                  Won:{" "}
                  <span className="text-[rgb(67,169,9)] font-medium">$4656</span>
                </p>
                <p>In Crash</p>
              </span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default FirstSlider;
