import React, { useState } from 'react';
import Img1 from '../../assets/NGgames/f914ecdb-1cd3-4e61-8e9c-2477f2bda0b8.webp'
import Img2 from '../../assets/NGgames/0aa3d807-0380-4f8e-b65e-3179d4af2234.webp'
import Img3 from '../../assets/NGgames/0aa80aca-75d1-4fff-b8c9-1d67f1498373.webp'
import Img4 from '../../assets/NGgames/48c4ac4d-8e93-4ad4-af48-695fa8f5397e.webp'
import Img5 from '../../assets/NGgames/4398e0b7-7da4-4d42-b67d-33d5f2785fc6.webp'
import Img6 from '../../assets/NGgames/42026a73-a033-4a57-bb1c-7e09fd2ea30f.webp'
import Img7 from '../../assets/NGgames/22910256-4c9b-4178-bc6f-96fb16bdc14d.webp'
import Img8 from '../../assets/NGgames/ae817f12-fa67-49b8-b33e-6cafda497488.webp'
import Img9 from '../../assets/NGgames/c405f953-f7ca-4da5-8309-dcba4fc44e7d.webp'
import Img10 from '../../assets/NGgames/d1cd852c-126e-4407-a22a-97c26e9c941a.webp'
import Img11 from '../../assets/NGgames/d3b5e5dd-c3df-46d2-be18-f4e44e80d14d.webp'
import Img12 from '../../assets/NGgames/f914ecdb-1cd3-4e61-8e9c-2477f2bda0b8.webp'

const Original = () => {
  const [cardDataArray, setCardDataArray] = useState([
    {
      id: 1,
      title: 'Card 1 Title',
      description: 'Crash',
      imageUrl: Img1,
    //   isBig: true, // Mark Img9 as big
    },
    {
      id: 2,
      title: 'Card 2 Title',
      description: 'Crash',
      imageUrl: Img2,
    },
    {
      id: 3,
      title: 'Card 3 Title',
      description: 'Crash',
      imageUrl: Img8,
    },
    {
      id: 4,
      title: 'Card 4 Title',
      description: 'Crash',
      imageUrl: Img4,
     
    },
    {
      id: 5,
      title: 'Card 5 Title',
      description: 'Crash',
      imageUrl: Img5,
    //   isBig:true
    },
    {
      id: 6,
      title: 'Card 6 Title',
      description: 'Crash',
      imageUrl: Img6,
    },
    {
      id: 7,
      title: 'Card 7 Title',
      description: 'Crash',
      imageUrl: Img7,
    },
    {
      id: 8,
      title: 'Card 8 Title',
      description:'Crash',
      imageUrl: Img8,
    },
    {
      id: 9,
      title: 'Card 9 Title',
      description: 'Crash',
      imageUrl: Img1,
    },
    {
      id: 10,
      title: 'Card 10 Title',
      description: 'Crash',
      imageUrl: Img10,
    },
    {
      id: 11,
      title: 'Card 11 Title',
      description:'Crash',
      imageUrl: Img11,
    },
    {
      id: 12,
      title: 'Card 12 Title',
      description: 'Crash',
      imageUrl: Img12,
    },
  ]);

  // const MAX_IMAGE_SIZE = 363; // Maximum width and height for big images

  return (
    <div className='justify-center items-center text-center ml-60 '>
      <div className="max-w-[66rem] mx-auto mt-36 bg-[#181a1d] text-center rounded-3xl">
        <div className=" p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 ">
          {cardDataArray.map((cardData) => (
            <div key={cardData.id} className={`flex rounded-lg h-48 p-3 my-4 ${cardData.isBig ? 'col-span-2' : ''}`}>
              <div className="sm:block  sm:items-center">
                <img
                  className="block transform transition  duration-500 hover:scale-105 mx-auto cursor-pointer sm:mx-0 sm:flex-shrink-0 object-cover rounded-2xl hover:opacity-50"
                  src={cardData.imageUrl}
                  alt="Placeholder"
                  style={
                    cardData.isBig
                      ? { maxWidth: `${385}px`, maxHeight: `${185}px` }
                      : {}
                     
                  }
                  
                />
                <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
                  {/* <p className="text-xl font-semibold text-gray-900">{cardData.title}</p> */}
                  <p className="text-sm mt-1 text-gray-400">{cardData.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Original;

