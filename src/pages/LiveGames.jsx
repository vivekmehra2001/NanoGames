import React, { useState, useEffect } from 'react';
import { originalData } from '../data/CardData'; // Import named export
import { FaRegQuestionCircle } from "react-icons/fa";

const LiveGames = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesPerRow, setImagesPerRow] = useState(5);
  const [slidesToShow, setSlidesToShow] = useState(imagesPerRow * 2);

  // Update imagesPerRow based on screen size
  useEffect(() => {
    const updateImagesPerRow = () => {
      if (window.innerWidth >= 1024) {
        setImagesPerRow(5);
      } else if (window.innerWidth >= 768) {
        setImagesPerRow(3);
      } else if (window.innerWidth >= 450) {
        setImagesPerRow(2);
      } else {
        setImagesPerRow(1);
      }
      setSlidesToShow(imagesPerRow * 2);
    };

    // Initial check
    updateImagesPerRow();

    // Add event listener for resize
    window.addEventListener('resize', updateImagesPerRow);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', updateImagesPerRow);
  }, [imagesPerRow]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + imagesPerRow;
      if (nextIndex >= originalData.length - slidesToShow + imagesPerRow) {
        return 0; // Loop back to the start
      }
      return nextIndex;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const prevIndexCalc = prevIndex - imagesPerRow;
      if (prevIndexCalc < 0) {
        return Math.max(0, originalData.length - slidesToShow); // Loop back to the end
      }
      return prevIndexCalc;
    });
  };

  // Calculate the transform percentage
  const transformValue = -(currentIndex * (100 / slidesToShow));

  return (
    <div>
      <div className="relative w-full bg-[#181a1d] py-4 px-4 rounded-2xl mt-20 overflow-hidden">
        <div className='text-white italic h-20 w-32 justify-center items-center text-xl font-bold'>
          RECOMMENDED <span className='text-[rgb(67,169,9)] italic'>LIVE</span> GAMES
        </div>
        {/* Carousel wrapper */}
        <div className="relative overflow-hidden">
          <div
            className="grid gap-3 mb-7 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(${transformValue}%)`, gridTemplateColumns: `repeat(${imagesPerRow}, minmax(0, 1fr))`, gridTemplateRows: 'repeat(2, 1fr)' }}
          >
            {originalData.slice(currentIndex, currentIndex + slidesToShow).map((item) => (
              <div
                key={item.id} // Use unique id as key
                className="block my-4 justify-center items-center"
                style={{ height: '200px' }} // Adjust the height as needed
              >
                <img
                  src={item.imageUrl} // Use imageUrl property
                  className="w-full h-full object-cover rounded-lg"
                  alt={`Slide ${item.id}`}
                />
                <div className='flex justify-between mt-4 sm:mt-0 sm:mx-4 text-center sm:text-left'>
                  <p className='text-sm mt-1 text-gray-400'>{item.description}</p>
                  <button className='mt-1 text-gray-700'>
                    <FaRegQuestionCircle />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slider controls */}
        <button
          type="button"
          className="absolute top-10 right-16 z-30 flex items-center justify-center w-10 h-10 rounded-full focus:outline-none transform -translate-y-1/2"
          onClick={handlePrev}
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
    </div>
  );
};

export default LiveGames;
