import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from "../../assets/164300069949835.png";
import Img2 from "../../assets/164300088905192 (3).png";
import Img3 from "../../assets/164300091137615.png";
import Img4 from "../../assets/164300094200682.png";

function FourthSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    initialSlide: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const items = [Img1, Img2, Img3, Img4];

  return (
    <div className="w-full sm:w-72 p-7 h-52">
      <p className="text-white h-10 w-full sm:w-50 text-center font-semibold">
        <span className="">Recently </span>Added
      </p>
      <Slider {...settings} className="mt-2 h-32">
        {items.map((img, index) => (
          <div key={index} className="slide-item h-14">
            <div className="px-2">
              <img src={img} alt={`slide${index + 1}`} className="mr-3 w-16 rounded-xl" />
              <span className="text-white text-sm">
                <p>
                  Profit: <span className="text-[rgb(67,169,9)] font-medium">$34</span>
                </p>
                <p>In Pilingo</p>
              </span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default FourthSlider;
