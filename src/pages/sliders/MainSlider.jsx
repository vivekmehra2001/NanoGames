import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from "../../assets/164300069949835.png";
import Img2 from "../../assets/164300088905192 (3).png";
import Img3 from "../../assets/164300091137615.png";
import Img4 from "../../assets/164300094200682.png";
import Img5 from "../../assets/lottery.cb45faf6.png";

function MainSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 4,
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

  return (
    <Slider {...settings} className="mx-auto">
      {[Img1, Img2, Img3, Img4, Img5].map((img, index) => (
        <div key={index} className="p-2">
          <div className="h-40 sm:h-40 md:h-40 lg:h-40 xl:h-40 flex items-center justify-center">
            <img src={img} className="rounded-2xl object-cover " alt={`slide${index + 1}`} />
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default MainSlider;
