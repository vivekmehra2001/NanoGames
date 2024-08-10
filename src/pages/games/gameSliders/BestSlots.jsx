// Filename - BestSlots.js

import React from "react";
import { useState } from "react";

// Collection of images with their labels and paths
const MyCollection = [
  {
    label: "First Picture",
    imgPath:
      "https://media.geeksforgeeks.org/wp-content/uploads/20210208000010/1.png",
  },
  {
    label: "Second Picture",
    imgPath:
      "https://media.geeksforgeeks.org/wp-content/uploads/20210208000009/2.png",
  },
  {
    label: "Third Picture",
    imgPath:
      "https://media.geeksforgeeks.org/wp-content/uploads/20210208000008/3.png",
  },
];

const BestSlots = () => {
  const collectionSize = MyCollection.length;
  const [index, setActiveStep] = useState(0);

  // Function to go to the next picture
  const goToNextPicture = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h2 className="text-2xl mb-4">How to Create Image Slider in ReactJS?</h2>
        <div className="max-w-sm mx-auto">
          <div className="bg-gray-100 rounded-t-lg border-b border-gray-200 px-4 py-2">
            <p className="text-lg font-semibold">
              {MyCollection[index].label}
            </p>
          </div>
          <img
            src={MyCollection[index].imgPath}
            className="block max-w-full h-auto"
            alt={MyCollection[index].label}
          />
          <div className="bg-gray-100 rounded-b-lg border-t border-gray-200 px-4 py-2">
            <button
              className={`bg-blue-500 text-white py-2 px-4 rounded ${
                index === collectionSize - 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={goToNextPicture}
              disabled={index === collectionSize - 1}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSlots;
