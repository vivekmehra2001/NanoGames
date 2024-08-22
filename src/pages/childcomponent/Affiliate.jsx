// import React from 'react';
// import { CgNotes } from "react-icons/cg";
// import { FaRegChessQueen } from "react-icons/fa6";
// import AffiliateBg from '../../assets/banner.welcome.character.ec0bae0b.png'
// import imagePath from '../../assets/biggest.webp';

// const Affiliate = () => {
//   return (
//     <div  className=' md:ml-56'>
//         <div className='flex  items-center h-14  border border-red-600'>
//           <div className='flex gap-1 items-center hover:text-white cursor-pointer px-3 text-gray-400 font-bold'>
//             <CgNotes/>
//            Commission Rules
//           </div>
//           <div  className='flex gap-1 items-center hover:text-white cursor-pointer px-3 text-gray-400 font-bold'>
//             <FaRegChessQueen/>
//              Affiliate Terms
//           </div>

//         </div>

//         <div className='w-full'>
//           <div style={{ backgroundImage: `url(${AffiliateBg})`,  }} className='relative   bg-cover mt-6 bg-no-repeat w-[95.2%] z-auto object-cover scale-110 duration-300 h-[28rem]  bg-purple-800 ' >
//              <div className=' bg-purple-600 text-white m-6  float-right w-44 py-3 rounded-full px-4'>
//               Affiliate Dashboard
//              </div>
//              <div className='absolute z-0 w-80 mt-12 ml-64 bg-transparent h-56 rounded-2xl  bg-gradient-to-b bg-opacity-50 from-purple-500  '>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam unde voluptatem quod placeat doloremque sapiente nesciunt iure quaerat eveniet? Illo iste cum 
//              </div>
//           </div>

//         </div>

//       </div>
//   )
// }

// export default Affiliate;
import React from 'react';
import { CgNotes } from "react-icons/cg";
import { FaRegChessQueen } from "react-icons/fa6";
import AffiliateBg from '../../assets/banner.welcome.character.ec0bae0b.png';
import imagePath from '../../assets/biggest.webp';

const Affiliate = () => {
  return (
    <div className='md:ml-56'>
      <div className='flex items-center h-14 border border-red-600'>
        <div className='flex gap-1 items-center hover:text-white cursor-pointer px-3 text-gray-400 font-bold'>
          <CgNotes />
          Commission Rules
        </div>
        <div className='flex gap-1 items-center hover:text-white cursor-pointer px-3 text-gray-400 font-bold'>
          <FaRegChessQueen />
          Affiliate Terms
        </div>
      </div>

      <div className='relative w-full mt-6'>
        {/* Content Div */}
        <div className='relative z-10 p-6'>
          <div className='bg-purple-600 text-white float-right w-44 py-3 rounded-full px-4'>
            Affiliate Dashboard
          </div>
          <div className='w-80 mt-12 ml-64 bg-transparent h-56 rounded-2xl bg-gradient-to-b from-purple-500 bg-opacity-50'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam unde voluptatem quod placeat doloremque sapiente nesciunt iure quaerat eveniet? Illo iste cum
          </div>
        </div>

        {/* Background Image */}
        <div 
          style={{ backgroundImage: `url(${AffiliateBg})` }} 
          className='absolute top-0 left-0 w-full h-[28rem] bg-cover bg-no-repeat z-20 scale-110 duration-300 bg-purple-800'
        >
        </div>
      </div>
    </div>
  );
};

export default Affiliate;
