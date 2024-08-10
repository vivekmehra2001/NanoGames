import React from 'react';
import imagePath from '../assets/biggest.webp'; // Update this path accordingly
import panda1 from '../assets/panda1.webp';
import panda2 from '../assets/panda2.webp';
import panda3 from '../assets/panda3.webp';
import winner from '../assets/winner.png';
import { BiSolidMedal } from "react-icons/bi";

const BiggestWinner = () => {
  const users = [
    {
      medalColor: 'text-yellow-500',
      image: panda1,
      name: 'vivek mehra',
      amount: '+1352.765',
      background: 'bg-[#303239]'
    },
    {
      medalColor: 'text-blue-200',
      image: panda2,
      name: 'mon jsei',
      amount: '+1352.765',
      background: 'bg-[#24262b]'
    },
    {
      medalColor: 'text-red-200',
      image: panda3,
      name: 'daly jease',
      amount: '+1352.765',
      background: 'bg-[#303239]'
    }
  ];

  return (
    <div className='w-full mt-12 sm:px-2 md:px-2'>
      <div className='text-white italic text-lg ml-4 font-bold mb-2'>
        BIGGEST WINNERS TODAY
      </div>

      <div className='grid grid-cols-1 w-full lg:grid-cols-2 gap-6 rounded-2xl bg-[#3d3f47] p-5'>
        {/* Winner Section */}
        <div
          className='relative bg-cover bg-no-repeat bg-center rounded-2xl'
          style={{ backgroundImage: `url(${imagePath})` }}
        >
          <div className='text-white font-bold text-base sm:text-lg md:text-xl lg:text-2xl'>
            WINNER WINNER <br /> CHICKEN DINNER
          </div>
          <button className='bg-yellow-400 text-white font-bold px-7 py-2 mt-10 sm:mt-20 md:mt-32 rounded-full text-sm sm:text-base md:text-lg'>
            Play Now
          </button>
        </div>

        {/* User Table */}
        <div className='bg-[#24262b] rounded-xl p-2'>
          <div className='relative mb-4'>
            <img src={winner} alt="Winner" className='absolute -top-3 -left-3 w-14 h-14 md:w-16 md:h-16' />
          </div>

          <div className=''>
            {users.map((user, index) => (
              <div key={index} className={`flex flex-col w-full sm:flex-row items-center justify-between ${user.background} p-2 rounded-md`}>
                <div className='flex items-center gap-2 w-full'>
                  <div className={`text-xl sm:text-2xl ${user.medalColor}`}>
                    <BiSolidMedal />
                  </div>
                  <img src={user.image} alt={`Panda ${index + 1}`} className='w-10 h-10 rounded-full' />
                  <div className='text-white font-bold text-xs sm:text-sm md:text-base flex-1 truncate'>
                    {user.name}
                  </div>
                </div>
                <button className='gap-2 bg-[#181a1d] px-3 py-1 rounded-full font-bold text-gray-400 text-xs sm:text-sm md:text-base'>
                  <span className='text-[rgb(67,169,9)]'>{user.amount}</span> USDT
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BiggestWinner;
