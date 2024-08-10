import React, { useState } from 'react';
import { IoMdHome } from "react-icons/io";
import { GiPerspectiveDiceSixFacesTwo, GiCrackedBallDunk, GiThunderball, GiStoneWheel, GiPokerHand, GiWoodCanoe } from "react-icons/gi";
import { BiSolidBomb,BiSolidCoinStack } from "react-icons/bi";
import { IoLogoDropbox, IoTabletLandscape } from "react-icons/io5";
import { TbCardsFilled } from "react-icons/tb";
import { FaDice } from "react-icons/fa";
import { PiFlowerLotusFill, PiWashingMachineBold, PiSpinnerBallFill} from "react-icons/pi";
import { AiFillDribbbleCircle } from "react-icons/ai";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { MdOutlineRocket } from "react-icons/md";
import { LuDog } from "react-icons/lu";
import { FaTag } from "react-icons/fa";
import { GiSnowboard,GiMeepleCircle ,GiQueenCrown } from "react-icons/gi";


const Sidebar = ({ sidebarOpen, toggleSidebar }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <aside
      className={ `fixed  top-0 left-0 z-40 w-64 h-full focus:scroll-smooth transition-transform ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 bg-gray-50 dark:bg-gray-900`}
      aria-label="Sidebar"
    >
      {/* Header in Sidebar */}
      <header className="flex items-center justify-between p-[10px] border-b-2 border-gray-200 dark:border-gray-700 bg-[#181a1d]">
        {/* Logo in Sidebar */}
        <div className="flex items-center gap-7 flex-shrink-0 w-16">
          <button
            className="bg-[#3d3f47] rounded-full px-7 py-2 font-semibold text-white ml-3 hover:text-gray-500"
          >
            Casino
          </button>
          <span className="text-gray-500 font-semibold">Sports</span>
        </div>

        {/* Close Button */}
        <button
          onClick={toggleSidebar} 

          className="block sm:hidden text-gray-500 hover:text-white focus:outline-none focus:text-gray-500"
          aria-label="Close sidebar"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </header>

      {/* Sidebar Content */}
      <div className="mostly-customized-scrollbar h-full custom-scrollbar   px-3 py-4 bg-[#181a1d]">
        <ul className="space-y-2 font-medium">
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-[#99A4B0] hover:text-white dark:hover:bg-gray-700 group"
            >
              <IoMdHome className='text-[rgb(67,169,9)] size-6'/>
              <span className="ms-2">Home</span>
            </a>
          </li>
          <li>
            <div className="relative w-full transition duration-2000 delay-4000  group">
              <button
                type="button"
                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group dark:text-[#99A4B0] hover:text-white dark:hover:bg-gray-700"
                // onClick={handleDropdownToggle}
                aria-expanded={isDropdownOpen ? "true" : "false"}
              >
                <GiPerspectiveDiceSixFacesTwo className='text-orange-600 size-6'/>
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap relative">
                  NG Originals
                </span>
                <svg
                  className={`w-3 h-3 group-hover:-rotate-90 transition-transform`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {/* {isDropdownOpen && ( */}
                <ul className="absolute left-[232px] hidden h-screen -top-[320%]  w-[90%]  bg-[#303239] group-hover:block  shadow-lg">
                  
                  <li>
                    <a
                      href="#"
                      className="block p-3 text-[#636876] hover:text-gray-100"
                    >
                   <span className='flex gap-2 items-center'> <GiCrackedBallDunk /> Crash</span>
                     
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block p-3 text-[#636876] hover:text-gray-100"
                    >
                     <span className='flex gap-2 items-center'> <GiPerspectiveDiceSixFacesTwo /> Classic Dice</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block p-3  text-[#636876] hover:text-gray-100"
                    >
                      <span className='flex gap-2 items-center'> <BiSolidBomb  />Mines</span>
                      
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block p-3  text-[#636876] hover:text-gray-100"
                    >
                      <span className='flex gap-2 items-center'> <FaDice  />Ultimate Dice</span>
                      
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block p-3  text-[#636876] hover:text-gray-100"
                    >
                      <span className='flex gap-2 items-center'> <PiFlowerLotusFill/>Beauties</span>
                      
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block p-3  text-[#636876] hover:text-gray-100"
                    >
                      <span className='flex gap-2 items-center'> <GiThunderball  />plinko</span>
                      
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block p-3  text-[#636876] hover:text-gray-100"
                    >
                      <span className='flex gap-2 items-center'> <PiWashingMachineBold  />cave</span>
                      
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block p-3  text-[#636876] hover:text-gray-100"
                    >
                      <span className='flex gap-2 items-center'> <GiStoneWheel  />Wheel</span>
                      
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block p-3  text-[#636876] hover:text-gray-100"
                    >
                      <span className='flex gap-2 items-center'> <GiWoodCanoe  />Sward</span>
                      
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block p-3  text-[#636876] hover:text-gray-100"
                    >
                      <span className='flex gap-2 items-center'> <AiFillDribbbleCircle  />Roulette</span>
                      
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block p-3  text-[#636876] hover:text-gray-100"
                    >
                      <span className='flex gap-2 items-center'> <GiPokerHand  />Video Poker</span>
                      
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block p-3 pb-4  text-[#636876] hover:text-gray-100"
                    >
                      <span className='flex gap-2 items-center'> <BsFillRocketTakeoffFill />Limbo</span>
                      
                    </a>
                  </li>
                </ul>
              {/* )} */}
            </div>
          </li>
          
            {/* Other sidebar items */}
            <li>
             <a
              href="#"
              className="flex items-center p-2 py-1 text-gray-900 rounded-lg dark:text-[#99A4B0] hover:text-white dark:hover:bg-gray-700 group"
            >
              <IoLogoDropbox className='text-purple-900 size-6'/>
              <span className="ms-2">Slots</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 py-3 text-gray-900 rounded-lg dark:text-[#99A4B0] hover:text-white dark:hover:bg-gray-700 group"
            >
              <IoTabletLandscape className='text-green-500 size-6' />
              <span className="ms-2">Live Casino</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 py-3 text-gray-900 rounded-lg dark:text-[#99A4B0] hover:text-white dark:hover:bg-gray-700 group"
            >
              <TbCardsFilled className='text-orange-400 size-6'/>
              <span className="ms-2 text-lg font-extrabold italic text-[rgb(67,169,9)]">Promotions</span>
            </a>
          </li>

          <li className=' justify-between px-7 '>
            <div className='flex gap-4 '>
              <div className='bg-[#0c0d0f] cursor-pointer w-11 h-10 text-center justify-center items-center rounded-xl '>
              <PiSpinnerBallFill className='animate-spin text-pink-700 ml-[4px] mt-[2px] text-[35px]  ' />
              </div>
              
              <div className='bg-[#0c0d0f] cursor-pointer w-11 h-10 rounded-xl '>
              <LuDog className='animate-pulse text-yellow-700 text-[40px]  ml-[2px]' />
              </div>

              <div className='bg-[#0c0d0f] cursor-pointer w-11  h-10 rounded-xl '>
              <MdOutlineRocket className=' animate-pulse text-green-700 text-[40px]  ml-[2px]' />
              </div>
              </div>

              <div className='flex gap-4 mt-3'>
              <div className='bg-[#0c0d0f] cursor-pointer w-11  h-10 rounded-xl '>
              <FaTag className='text-[rgb(67,169,9)] text-[25px] mt-[6px]  ml-[9px]' />
              </div>
              <div className='bg-[#0c0d0f] cursor-pointer w-11  h-10 rounded-xl '>
              <BiSolidCoinStack  className='text-gray-700 text-[30px] mt-[4px]  ml-[6px]' />
              </div>

              </div>
                           
          </li>

              <div style={{marginTop:"30px"}} className='border border-[#24262b] mt-10'>
              
              </div>
             
              <li>
            <a
              href="#"
              className="flex items-center p-2 py-3 text-gray-900 rounded-lg dark:text-[#99A4B0] hover:text-white dark:hover:bg-gray-700 group"
            >
              <GiSnowboard className='text-[rgb(67,179,9)] size-6' />
              <span className="ms-2">Lottery</span>
            </a>
          </li>

          <li>
            <a
              href="#"
              className="flex items-center p-2 py-3 text-gray-900 rounded-lg dark:text-[#99A4B0] hover:text-white dark:hover:bg-gray-700 group"
            >
              <GiMeepleCircle className='text-blue-900 size-6'  />
              <span className="ms-2">Affiliate</span>
            </a>
          </li>

          <li>
            <a
              href="#"
              className="flex items-center p-2 py-3 text-gray-900 rounded-lg dark:text-[#99A4B0] hover:text-white dark:hover:bg-gray-700 group"
            >
                <GiQueenCrown className='text-yellow-500 size-6' />
              <span className="ms-2 text-lg font-extrabold italic text-[rgb(245,87,52)]">VIP Club</span>
            </a>
          </li>

          <li>
            <a
              href="#"
              className="flex items-center p-2 py-3 text-gray-900 rounded-lg dark:text-[#99A4B0] hover:text-white dark:hover:bg-gray-700 group"
            >
              <IoTabletLandscape />
              <span className="ms-2">Provably Fair</span>
            </a>
          </li>
          
          <div style={{marginTop:"30px"}} className='border border-[#24262b] mt-10'>
              
              </div>

              <li>
            <a
              href="#"
              className="flex items-center p-2 py-3 text-gray-900 rounded-lg dark:text-[#99A4B0] hover:text-white dark:hover:bg-gray-700 group"
            >
              <IoTabletLandscape />
              <span className="ms-2">Favorite Games</span>
            </a>
          </li>

          <li>
            <a
              href="#"
              className="flex items-center p-2 py-3 text-gray-900 rounded-lg dark:text-[#99A4B0] hover:text-white dark:hover:bg-gray-700 group"
            >
              <IoTabletLandscape />
              <span className="ms-2">Recent Play</span>
            </a>
          </li>

          <div style={{marginTop:"30px"}} className='border border-[#24262b] mt-10'>
              
            </div>

        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
