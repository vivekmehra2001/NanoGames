// import React from 'react';
// import Logo from '../assets/logo.webp';
// import { Link } from 'react-router-dom';

// const Header = ({ sidebarOpen, toggleSidebar }) => {
//   return (
//     <header className="flex items-center justify-between p-2 border-b-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-[#24262b]">
//       {/* Menu Button (Toggle Sidebar) */}
//       <div className="flex items-center md:pl-[16rem]">
//         <button
//           onClick={toggleSidebar}
//           className="block md:hidden text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 mr-4"
//           aria-label="Toggle sidebar"
//         >
//           <svg
//             className="w-10 h-6 p-1 rounded-full text-white bg-black"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             aria-hidden="true"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//           </svg>
//         </button>

//         {/* Logo */}
//         <div className="flex-shrink-0 h-8 md:h-11"> {/* Adjusted logo height */}
//           <img src={Logo} alt="Logo" className="h-full" />
//         </div>
//       </div>

//       {/* Search Bar */}
//       <div className="hidden md:flex mx-2 lg:w-80"> {/* Hidden on small screens */}
//         <input
//           type="text"
//           placeholder="Game name|Provider|Category Tag"
//           className="w-full py-2 px-4 font-semibold border border-black border-x-2 rounded-full focus:outline-none focus:border-[rgb(67,169,9)] dark:bg-gray-950 dark:text-white"
//         />
//       </div>

//       {/* Buttons */}
//       <div className="hidden sm:flex items-center space-x-4 md:space-x-10 pr-4">
//         {/* Sign In Button */}
//         <button className="font-bold border border-gray-300 hover:text-[rgb(51,147,39)] dark:text-[rgb(67,169,9)] dark:border-transparent focus:outline-white">
//           Sign In
//         </button>
//         {/* Sign Up Button */}
//         <Link to="/signup" >
//         <button className="py-2 px-4 font-bold bg-[rgb(67,169,9)] text-white rounded-full hover:text-black focus:outline-none">
//           Sign Up
//         </button>
//         </Link>
//       </div>
//     </header>
//   );
// };

// export default Header;

// Header.jsx
// import React, { useState } from 'react';
// import Logo from '../assets/logo.webp';
// import { Link } from 'react-router-dom';
// import CustomModal from './authentication/CustomModel';
// import { toast } from 'react-toastify';
// import smallLogo from '../assets/logo_small.webp'

// const Header = ({ sidebarOpen, toggleSidebar }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

//   return (
//     <>
//       <header className="flex items-center justify-between p-2 border-b-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-[#24262b]">
//         <div className="flex items-center md:pl-[16rem]">
//           <button
//             onClick={toggleSidebar}
//             className="block md:hidden text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 mr-4"
//             aria-label="Toggle sidebar"
//           >
//             <svg
//               className="w-10 h-6 p-1 rounded-full text-white bg-black"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               aria-hidden="true"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           </button>
//           <div className="flex-shrink-0 h-8 md:h-11">
//             <img src={Logo} alt="Logo" className="h-full" />
//             <img src={smallLogo} alt="Logo" className="h-full" />
//           </div>
//         </div>

//         <div className="hidden md:flex mx-2 lg:w-80">
//           <input
//             type="text"
//             placeholder="Game name|Provider|Category Tag"
//             className="w-full py-2 px-4 font-semibold border border-black border-x-2 rounded-full focus:outline-none focus:border-[rgb(67,169,9)] dark:bg-gray-950 dark:text-white"
//           />
//         </div>

//         <div className=" sm:flex items-center space-x-4 md:space-x-10 pr-4">
//           <button
//             onClick={() => {
//               toast.info('Log In form will be opened here.');
//               openModal();
//             }}
//             className="font-bold border border-gray-300 hover:text-[rgb(51,147,39)] dark:text-[rgb(67,169,9)] dark:border-transparent focus:outline-white"
//           >
//             Log In
//           </button>
//           <button
//             onClick={() => {
//               toast.info('Sign Up form will be opened here.');
//               openModal();
//             }}
//             className="py-2 px-4 font-bold bg-[rgb(67,169,9)] text-white rounded-full hover:text-black focus:outline-none"
//           >
//             Sign Up
//           </button>
//         </div>
//       </header>
//       <CustomModal isOpen={isModalOpen} onRequestClose={closeModal} />
//     </>
//   );
// };

// export default Header;
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
        <div className="flex items-center md:pl-[16rem]">
          <button
            onClick={toggleSidebar}
            className="block md:hidden text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 mr-4"
            aria-label="Toggle sidebar"
          >
            <svg
              className="w-10 h-6 p-1 rounded-full text-white bg-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className="flex-shrink-0 h-8 md:h-11">
            <img src={Logo} alt="Logo" className="hidden sm:block h-full" />
            <img src={smallLogo} alt="Small Logo" className="block  sm:hidden h-full" />
          </div>
        </div>

        <div className="hidden md:flex mx-2 lg:w-80">
          <input
            type="text"
            placeholder="Game name | Provider | Category Tag"
            className="w-full py-2 px-4 font-semibold border border-black border-x-2 rounded-full focus:outline-none focus:border-[rgb(67,169,9)] dark:bg-gray-950 dark:text-white"
          />
        </div>

        <div className="flex items-center ml-2 space-x-1 sm:space-x-4 md:space-x-2 pr-6">
          <button
            onClick={() => {
              toast.info('Log In form will be opened here.');
              openModal();
            }}
            className="py-2 px-4 font-bold border border-gray-300 rounded-full hover:text-[rgb(51,147,39)] dark:text-[rgb(67,169,9)] dark:border-transparent focus:outline-none"
          >
            Log In
          </button>
          <button
            onClick={() => {
              toast.info('Sign Up form will be opened here.');
              openModal();
            }}
            className="py-2 px-4 font-bold bg-[rgb(67,169,9)] text-white rounded-full hover:text-black focus:outline-none"
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
