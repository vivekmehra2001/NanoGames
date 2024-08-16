// import React from 'react'
// import logo from '../assets/logo.webp'
// import { FaBitcoin } from "react-icons/fa";
// import { BsShieldFillPlus } from "react-icons/bs";

// const Footer = () => {
//   return (
//     <div className='md:ml-[16rem] p-16 py-7 w-auto bg-[#121215] h-full text-white'>
//         <div className=' divide-y'>
//         <div className=' grid grid-flow-col grid-cols-2  divide-x  '>
//            <div className= '  '>
//             <div className=''>
//                 <img src={logo} alt="" className='w-40' />
//             </div>
//             <div className=' text-gray-500 w-80   mt-5'>
//             NANOGAMES.IO is built by gamblers for gamblers. With our unique community and a huge selection of games like Crash, HashDice, Plinko, Slots, and many more. Your greatest casino adventure is waiting for you!

//             </div>
//            </div>
            
//             <div className='grid grid-flow-col -mx-14 items-center text-center  grid-cols-2'>
//                    <div className='text-sm text-gray-400 text-left ml-28 '>
//                    <p className='py-1 hover:text-[rgb(67,169,9)] cursor-pointer'> HELP CENTER</p>
//                    <p className='py-1 hover:text-[rgb(67,169,9)] cursor-pointer'>USER AGREEMENT</p>
//                    <p className='py-1 hover:text-[rgb(67,169,9)] cursor-pointer'>PRIVACY POLICY</p>
//                    <p className='py-1 hover:text-[rgb(67,169,9)] cursor-pointer'>APP</p>
//                    </div>
//                    <div className=' text-sm text-gray-500 text-left ml-20'>
//                     <p className='py-1'>CONTACT US</p>
//                     <p className='py-1'>Email <span className='text-[rgb(67,169,9)]'>Support@nanogames.io</span></p>
//                     <div className=''>
//                     <p className='mt-6 '>ACCEPTED CURRENCIES</p>
//                     <div className='grid grid-flow-col gap-3 w-28 mt-2 '>
//                         <FaBitcoin className='size-6'/>
//                         <FaBitcoin className='size-6'/>
//                         <FaBitcoin className='size-6'/>
//                         <FaBitcoin className='size-6'/>
//                         <FaBitcoin className='size-6'/>
//                     </div>
//                     </div>
//                    </div>
//             </div>

//         </div>
//         <div className=' mt-5 grid grid-flow-col justify-between'>
//             <div className='mt-10 flex font-bold text-gray-500 text-[16px] ml-3 '>
//               <div>
//               <p> Responsible</p>
//               <p>Gambling</p>
//               </div>
              
//                <BsShieldFillPlus className='mt-2 size-9 ml-3'/>

//             </div>
           
//             <div className='mt-[3.5rem] flex gap-6 '>
//               <p className='mt-2 text-gray-400 text-sm'> @2024 NANOGAMES.IO ALL RIGHTS RESERVED</p>
//               <div className='rounded-full w-10 h-10 mr-2 text-center  bg-gray-600'>
//                <p className='mt-[6px]'> Top</p>
//               </div>
//             </div>

//         </div>
//         </div>
       
       
        
        
//         </div>
//   )
// }

// export default Footer
import React from 'react'
import logo from '../assets/logo.webp'
import { FaBitcoin } from "react-icons/fa";
import { BsShieldFillPlus } from "react-icons/bs";

const Footer = () => {
  return (
    <div className='p-8   md:ml-60   md:p-16 py-7 w-90% bg-[#121215] text-white'>
      <div className='divide-y divide-gray-700'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-700'>
          <div className='md:pr-8'>
            <div className='flex justify-center md:justify-start'>
              <img src={logo} alt="Logo" className='w-40' />
            </div>
            <div className='text-gray-500 mt-5 text-center md:text-left'>
              NANOGAMES.IO is built by gamblers for gamblers. With our unique community and a huge selection of games like Crash, HashDice, Plinko, Slots, and many more. Your greatest casino adventure is waiting for you!
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:pl-8'>
            <div className='text-sm text-gray-400 text-center md:text-left'>
              <p className='py-1 hover:text-[rgb(67,169,9)] cursor-pointer'>HELP CENTER</p>
              <p className='py-1 hover:text-[rgb(67,169,9)] cursor-pointer'>USER AGREEMENT</p>
              <p className='py-1 hover:text-[rgb(67,169,9)] cursor-pointer'>PRIVACY POLICY</p>
              <p className='py-1 hover:text-[rgb(67,169,9)] cursor-pointer'>APP</p>
            </div>
            <div className='text-sm text-gray-400 text-center md:text-left'>
              <p className='py-1'>CONTACT US</p>
              <p className='py-1'>Email <span className='text-[rgb(67,169,9)]'>Support@nanogames.io</span></p>
              <div className='mt-6'>
                <p>ACCEPTED CURRENCIES</p>
                <div className='flex justify-center md:justify-start gap-3 mt-2'>
                  <FaBitcoin className='size-6' />
                  <FaBitcoin className='size-6' />
                  <FaBitcoin className='size-6' />
                  <FaBitcoin className='size-6' />
                  <FaBitcoin className='size-6' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-5 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm'>
          <div className='flex items-center gap-3 mt-5 md:mt-10'>
            <div className='text-center md:text-left'>
              <p>Responsible</p>
              <p>Gambling</p>
            </div>
            <BsShieldFillPlus className='text-3xl' />
          </div>
          <div className='flex items-center gap-6 mt-5 md:mt-10'>
            <p className='text-center'>@2024 NANOGAMES.IO ALL RIGHTS RESERVED</p>
            <div className='rounded-full w-10 h-10 flex items-center justify-center bg-gray-600'>
              <p>Top</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
