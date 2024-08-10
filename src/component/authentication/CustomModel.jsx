// // // CustomModal.jsx
// // import React from 'react';
// // import Modal from 'react-modal';
// // import Auth from '../authentication/Auth';

// // Modal.setAppElement('#root');

// // const CustomModal = ({ isOpen, onRequestClose }) => {
// //   return (
// //     <Modal
// //       isOpen={isOpen}
// //       onRequestClose={onRequestClose}
// //       contentLabel="Authentication Modal"
// //       className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50"
// //       overlayClassName="fixed inset-0 bg-black bg-opacity-10"
// //     >
// //       <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
// //         <button
// //           onClick={onRequestClose}
// //           className="absolute top-2   text-gray-900 hover:text-gray-900 focus:outline-none"
// //         >
// //           <svg
// //             className="w-6 h-6"
// //             fill="none"
// //             stroke="currentColor"
// //             viewBox="0 0 24 24"
// //             xmlns="http://www.w3.org/2000/svg"
// //           >
// //             <path
// //               strokeLinecap="round"
// //               strokeLinejoin="round"
// //               strokeWidth="2"
// //               d="M6 18L18 6M6 6l12 12"
// //             />
// //           </svg>
// //         </button>
// //         <Auth />
// //       </div>
// //     </Modal>
// //   );
// // };

// // export default CustomModal;
// // CustomModal.jsx
// import React from 'react';
// import Modal from 'react-modal';
// import Auth from '../authentication/Auth';

// Modal.setAppElement('#root');

// const CustomModal = ({ isOpen, onRequestClose }) => {
//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={onRequestClose}
//       contentLabel="Authentication Modal"
//       className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50"
//       overlayClassName="fixed inset-0 bg-black   bg-opacity-10"
//     >
//       <div className="relative mt-3 bg-white dark:bg-gray-100 p-6 rounded-lg shadow-lg w-full max-w-md">
//         <button
//           onClick={onRequestClose}
//           className="absolute top-7 right-8 text-gray-400 hover:text-[rgb(67,169,9)] focus:outline-none"
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M6 18L18 6M6 6l12 12"
//             />
//           </svg>
//         </button>
//         <Auth />
//       </div>
//     </Modal>
//   );
// };

// export default CustomModal;


import React from 'react';
import Modal from 'react-modal';
import Auth from '../authentication/Auth';

Modal.setAppElement('#root');

const CustomModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Authentication Modal"
      className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50"
      overlayClassName="fixed inset-0 bg-black bg-opacity-10"
    >
      <div className="relative mt-3 bg-white dark:bg-gray-300 p-1 rounded-lg shadow-lg w-full max-w-md">
        <button
          onClick={onRequestClose}
          className="absolute top-7 right-8 text-gray-400 hover:text-[rgb(67,169,9)] focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <Auth onSuccess={onRequestClose} />
      </div>
    </Modal>
  );
};

export default CustomModal;
