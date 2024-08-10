import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from "../../assets/164300069949835.png";
import Img2 from "../../assets/164300088905192 (3).png";
import Img3 from "../../assets/164300091137615.png";
import Img4 from "../../assets/164300094200682.png";

function SecondSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 5000,
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

  // Array of image data
  const items = [
    { src: Img1, profit: "$3432", game: "Pilingo" },
    { src: Img2, profit: "$3432", game: "Pilingo" },
    { src: Img3, profit: "$3432", game: "Pilingo" },
    { src: Img4, profit: "$3432", game: "Pilingo" }
  ];

  return (
    <div className="w-full sm:w-60 p-7 px-6 h-52">
      <p className="text-white h-10 w-full sm:w-50 font-semibold">
        <span className="text-yellow-400">Top </span>Winning Games
      </p>
      <Slider {...settings} className="mt-2 h-32 ">
        {items.map((item, index) => (
          <div key={index} className="slide-item h-14">
            <div className="flex">
              <img
                src={item.src}
                alt={`slide${index + 1}`}
                className="mr-3 w-10 h-10 sm:w-20 sm:h-16 rounded-xl"
              />
              <span className="text-white text-sm">
                <p>
                  Profit:<span className="text-[rgb(67,169,9)] font-medium">{item.profit}</span>
                </p>
                <p>In {item.game}</p>
              </span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SecondSlider;
