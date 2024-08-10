import React, { useState, useEffect } from 'react';
import { TbBrandGoogleHome, TbCardsFilled } from 'react-icons/tb';
import { IoLogoDropbox, IoTabletLandscape } from 'react-icons/io5';
import { PiWashingMachineBold } from 'react-icons/pi';
import { gameShowData, liveCasinoData, lobbyData, originalData, slotsData, tableGamesData } from '../data/CardData';
import { FaRegQuestionCircle } from "react-icons/fa";

const categoryHeadings = {
  lobby: <>NG <span style={{ color: '#be185d' }}>IN-HOUSE</span><br /> GAMES</>,
  original: <>NG <span style={{ color: '#be185d' }}>IN-HOUSE</span><br /> GAMES</>,
  slots: <> <span style={{ color: '#be185d' }}>MEGA SLOTS</span><br /> STORE</>,
  'live-casino': <> <span style={{ color: '#be185d' }}>BEST LIVE</span><br /> GAMES</>,
  'table-games': <> <span style={{ color: '#be185d' }}>TOP TABLE</span><br /> GAMES</>,
  'game-show': <> <span style={{ color: '#be185d' }}>BEST GAMESHOW</span><br /> GAMES</>,
};

const MenuButtons = () => {
  const [activeCategory, setActiveCategory] = useState('lobby');
  const [filteredContent, setFilteredContent] = useState([]);
  const [heading, setHeading] = useState(categoryHeadings['lobby']); // Set initial heading from mapping

  // Function to handle category change and filter content
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setHeading(categoryHeadings[category]); // Update heading using mapping
  };

  useEffect(() => {
    let filtered = [];
    if (activeCategory === 'lobby') {
      filtered = lobbyData;
    } else if (activeCategory === 'original') {
      filtered = originalData;
    } else if (activeCategory === 'slots') {
      filtered = slotsData;
    } else if (activeCategory === 'live-casino') {
      filtered = liveCasinoData;
    } else if (activeCategory === 'table-games') {
      filtered = tableGamesData;
    } else if (activeCategory === 'game-show') {
      filtered = gameShowData;
    }

    setFilteredContent(filtered);
  }, [activeCategory]);

  return (
    <div>
      {/* Category buttons */}
      <div className="flex justify-center border border-[#24262b] p-4 sm:p-6 md:p-8">
        <div className="flex mt-3 text-gray-500 items-center bg-[#181a1d] rounded-full h-13 overflow-x-auto lg:overflow-x-visible whitespace-nowrap">
          {['lobby', 'original', 'slots', 'live-casino', 'table-games', 'game-show'].map((category) => (
            <button
              key={category}
              className={`flex items-center px-4 py-2 sm:px-6 sm:py-3 hover:text-white rounded-full my-1 mx-2 border border-transparent font-semibold text-sm sm:text-base md:text-lg ${
                activeCategory === category ? 'bg-[#24262b] text-white' : ''
              }`}
              onClick={() => handleCategoryChange(category)}
            >
              <span className="mr-1 text-lg">
                {category === 'lobby' && <TbBrandGoogleHome />}
                {category === 'original' && <IoLogoDropbox />}
                {category === 'slots' && <IoLogoDropbox />}
                {category === 'live-casino' && <IoTabletLandscape />}
                {category === 'table-games' && <TbCardsFilled />}
                {category === 'game-show' && <PiWashingMachineBold />}
              </span>
              {category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
            </button>
          ))}
        </div>
      </div>

      {/* Display filtered content */}
      <div className="mt-10 sm:mt-12">
        <div className="w-full justify-center items-center bg-[#181a1d] rounded-3xl p-2 pb-8">
          <div className="ml-3">
            <h1 className="w-full text-white italic text-xl font-bold">{heading}</h1>
          </div>
          <div className="grid  grid-cols-2  sm:grid-cols-4 md:grid-cols-6  ">
            {filteredContent.map((cardData) => (
              <div
                key={cardData.id}
                className={`flex rounded-lg h-48 p-2 my-2 ${cardData.isBig ? 'col-span-2' : ''}`}
              >
                <div className="sm:block sm:items-center">
                  <img
                    className="block transform transition duration-500 hover:scale-105 mx-auto cursor-pointer sm:mx-0 sm:flex-shrink-0 object-cover rounded-2xl hover:opacity-50"
                    src={cardData.imageUrl}
                    alt="Card"
                    style={
                      cardData.isBig
                        ? { maxWidth: 'sm:200px 380px', maxHeight: '180px' }
                        : {}
                    }
                  />
                  <div className="flex justify-between mt-2 sm:mt-0 sm:mx-4 text-center sm:text-left">
                    <p className="text-sm mt-1 text-gray-400">{cardData.description}</p>
                    <button className="mt-1 text-gray-700">
                      <FaRegQuestionCircle />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuButtons;
