
import React, { useState } from 'react';
import Logo from '../assets/logo.webp';
import { Link } from 'react-router-dom';
import CustomModal from './authentication/CustomModel';
import { toast } from 'react-toastify';
import smallLogo from '../assets/logo_small.webp';

const Header = ({ sidebarOpen, toggleSidebar }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <header className="flex items-center justify-between p-2 border-b-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-[#24262b]">
        <div className="flex items-center  md:pl-[16rem]">
          {/* Sidebar Toggle Button */}
          <button
            onClick={toggleSidebar}
            className="block md:hidden text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 mr-4"
            aria-label="Toggle sidebar"
          >
            <svg
              className="w-6 h-6 p-1 rounded-full text-white bg-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Logo */}
          <div className="flex-shrink-0 h-8 md:h-11">
            <img src={Logo} alt="Logo" className="hidden sm:block h-full" />
            <img src={smallLogo} alt="Small Logo" className="block sm:hidden h-full" />
          </div>
        </div>

        {/* Search Input - Visible on Medium and Larger Screens */}
        <div className="hidden md:flex flex-grow mx-2 lg:w-80">
          <input
            type="text"
            placeholder="Game name | Provider | Category Tag"
            className="w-full py-2 px-4 font-semibold border border-black rounded-full focus:outline-none focus:border-[rgb(67,169,9)] dark:bg-gray-950 dark:text-white"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center ml-2 space-x-2 sm:space-x-4 pr-4">
          <button
            onClick={() => {
              toast.info('Log In form will be opened here.');
              openModal();
            }}
            className="py-2 px-3 sm:px-4 font-bold border border-gray-300 rounded-full hover:text-[rgb(51,147,39)] dark:text-[rgb(67,169,9)] dark:border-transparent focus:outline-none text-xs sm:text-sm"
          >
            Log In
          </button>
          <button
            onClick={() => {
              toast.info('Sign Up form will be opened here.');
              openModal();
            }}
            className="py-2 px-3 sm:px-4 font-bold bg-[rgb(67,169,9)] text-white rounded-full hover:text-black focus:outline-none text-xs sm:text-sm"
          >
            Sign Up
          </button>
        </div>
      </header>
      <CustomModal isOpen={isModalOpen} onRequestClose={closeModal} />
    </>
  );
};

export default Header;
