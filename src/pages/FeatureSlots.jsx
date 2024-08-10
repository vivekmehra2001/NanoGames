import React, { useState } from 'react';
import { originalData } from '../data/CardData'; // Import named export
import { FaRegQuestionCircle } from "react-icons/fa";

const slidesToShow = 5; // Number of images to show at a time

const FeatureSlots = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      if (newIndex > originalData.length - slidesToShow) {
        return 0;
      }
      return newIndex;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      if (newIndex < 0) {
        return originalData.length - slidesToShow;
      }
      return newIndex;
    });
  };

  // Calculate the transform percentage
  const transformValue = -(currentIndex * (100 / slidesToShow));

  return (
    <div className="relative w-full bg-[#181a1d] py-4 px-4 rounded-2xl mt-20 overflow-hidden">
      {/* Carousel wrapper */}
      <div className=' text-white italic   h-20 w-36  justify-center items-center text-xl font-bold '>
          FEATURE <br></br> BUY-IN   <span className='text-pink-700 italic'>SLOTS</span>
        </div>
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(${transformValue}%)` }}
        >
          {originalData.map((item) => (
            <div
              key={item.id} // Use unique id as key
              className="flex-none w-full md:w-1/5 px-2"
            >
              <img
                src={item.imageUrl} // Use imageUrl property
                className="w-full h-auto rounded-lg"
                alt={`Slide ${item.id}`}
              />
               <div className= 'flex justify-between mt-4 sm:mt-0 sm:mx-4 text-center sm:text-left'>
                  <p className='text-sm mt-1 text-gray-400'>{item.description}</p>
                  <button className='mt-1 text-gray-700 '>
                    <FaRegQuestionCircle/>
                  </button>
                </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-10 right-16 z-30 flex items-center justify-center w-10 h-10  rounded-full focus:outline-none transform -translate-y-1/2"
        onClick={handlePrev}
      >
        <svg
          className="w-20 h-6 p-1 rounded-full bg-[#24262b] hover:text-white  rtl:rotate-180"
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
        className="absolute top-10 right-4 z-30 flex items-center justify-center w-10 h-10 rounded-full focus:outline-none transform -translate-y-1/2"
        onClick={handleNext}
      >
        <svg
          className="w-20 h-6 p-1 rounded-full bg-[#24262b] hover:text-white rtl:rotate-180"
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
};

export default FeatureSlots;
