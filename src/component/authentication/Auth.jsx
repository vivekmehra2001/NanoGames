// import React, { useState } from 'react';
// import axios from 'axios';

// const Auth = () => {
//   const [isSignup, setIsSignup] = useState(true);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const endpoint = isSignup ? '/api/users/signup' : '/api/users/login';
//       const response = await axios.post(`http://localhost:3002${endpoint}`, {
//         email,
//         password
//       });
//       setSuccess(isSignup ? 'Signup successful!' : 'Login successful!');
//       setEmail('');
//       setPassword('');
//     } catch (err) {
//       setError(isSignup ? 'Signup failed.' : 'Login failed.');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6">{isSignup ? 'Sign Up' : 'Login'}</h2>
//         {error && <p className="text-red-500">{error}</p>}
//         {success && <p className="text-green-500">{success}</p>}
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//           >
//             {isSignup ? 'Sign Up' : 'Login'}
//           </button>
//         </form>
//         <div className="mt-6 flex justify-center">
//           <button
//             onClick={() => setIsSignup(!isSignup)}
//             className="text-indigo-600 hover:text-indigo-700"
//           >
//             {isSignup ? 'Already have an account? Login' : 'Don\'t have an account? Sign Up'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Auth;
// Auth.jsx
// import React, { useState } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const Auth = () => {
//   const [isSignup, setIsSignup] = useState(true);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const endpoint = isSignup ? '/api/users/signup' : '/api/users/login';
//       await axios.post(`http://localhost:3002${endpoint}`, {
//         email,
//         password
//       });
//       toast.success(isSignup ? 'Signup successful!' : 'Login successful!');
//       setEmail('');
//       setPassword('');
//     } catch (err) {
//       toast.error(isSignup ? 'Signup failed.' : 'Login failed.');
//     }
//   };

//   return (
//     <div className="  rounded-3xl  flex items-center justify-center ">
//       <div className="bg-[#24262b] p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-2xl text-gray-400 text-center font-bold mb-6">{isSignup ? 'Sign Up' : 'Login'}</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-md font-medium text-gray-400">Email</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="mt-1 block w-full bg-[#303239] px-3 py-2 border border-[#303239] rounded-md shadow-sm focus:outline-none focus:ring-[rgb(67,169,9)] focus:border-[rgb(67,169,9)] sm:text-sm"
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <label htmlFor="password" className="block text-md font-medium text-gray-400">Password</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="mt-1 block w-full bg-[#303239] px-3 py-2 border border-[#303239] rounded-md shadow-sm focus:outline-none focus:ring-[rgb(67,169,9)] focus:border-[rgb(67,169,9)] sm:text-sm"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-[rgb(67,169,9)] text-white py-2 px-4 rounded-md shadow-sm hover:bg-[rgb(67,169,9)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//           >
//             {isSignup ? 'Sign Up' : 'Login'}
//           </button>
//         </form>
//         <div className="mt-6 flex justify-center">
//           <button
//             onClick={() => setIsSignup(!isSignup)}
//             className="text-white  hover:text-[rgb(67,169,9)]"
//           >
//             {isSignup ? 'Already have an account? Login' : 'Don\'t have an account? Sign Up'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Auth;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const Auth = () => {
//   const [isSignup, setIsSignup] = useState(true);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const endpoint = isSignup ? '/api/users/signup' : '/api/users/login';
//       await axios.post(`http://localhost:3002${endpoint}`, {
//         email,
//         password
//       });
//       toast.success(isSignup ? 'Signup successful!' : 'Login successful!');
//       setEmail('');
//       setPassword('');
//     } catch (err) {
//       toast.error(isSignup ? 'Signup failed.' : 'Login failed.');
//     }
//   };

//   return (
//     <div className="rounded-3xl flex items-center justify-center bg-gray-100">
//       <div className="bg-[#24262b] p-8 rounded-lg shadow-lg w-full max-w-md">
        
//         <h2 className="text-2xl text-gray-400 text-center font-bold mb-6">{isSignup ? 'Sign Up' : 'Login'}</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-md font-medium text-gray-400">Email</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="mt-1 block w-full bg-[#303239] px-3 py-2 border border-[#303239] rounded-md shadow-sm focus:outline-none focus:ring-[rgb(67,169,9)] focus:border-[rgb(67,169,9)] sm:text-sm"
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <label htmlFor="password" className="block text-md font-medium text-gray-400">Password</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="mt-1 block w-full bg-[#303239] px-3 py-2 border border-[#303239] rounded-md shadow-sm focus:outline-none focus:ring-[rgb(67,169,9)] focus:border-[rgb(67,169,9)] sm:text-sm"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-[rgb(67,169,9)] text-white py-2 px-4 rounded-md shadow-sm hover:bg-[rgb(67,169,9)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//           >
//             {isSignup ? 'Sign Up' : 'Login'}
//           </button>
        
//         </form>
//         <div className="flex justify-center mt-6">
//           <button
//             onClick={() => setIsSignup(true)}
//             className={`px-4 py-2 mx-1 rounded-t-md ${isSignup ? 'bg-[rgb(67,169,9)] text-white' : 'bg-[#303239] text-gray-400'}`}
//           >
//             Sign Up
//           </button>
//           <button
//             onClick={() => setIsSignup(false)}
//             className={`px-4 py-2 mx-1 rounded-t-md ${!isSignup ? 'bg-[rgb(67,169,9)] text-white' : 'bg-[#303239] text-gray-400'}`}
//           >
//             Login
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Auth;

import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Auth = ({ onSuccess }) => {
  const [isSignup, setIsSignup] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const endpoint = isSignup ? '/api/users/signup' : '/api/users/login';
      await axios.post(`http://localhost:3002${endpoint}`, {
        email,
        password
      });
      toast.success(isSignup ? 'Signup successful!' : 'Login successful!');
      setEmail('');
      setPassword('');
      onSuccess(); // Close the modal after success
    } catch (err) {
      toast.error(isSignup ? 'Signup failed.' : 'Login failed.');
    }
  };

  return (
    <div className="rounded-3xl flex items-center justify-center bg-gray-100">
      <div className="bg-[#24262b] p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl text-gray-400 text-center font-bold mb-6">{isSignup ? 'Sign Up' : 'Login'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-md font-medium text-gray-400">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              placeholder='Enter your Email'
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 text-white font-semibold block w-full bg-[#303239] px-3 py-2 border border-[#303239] rounded-md shadow-sm focus:outline-none focus:ring-[rgb(67,169,9)] focus:border-[rgb(67,169,9)] sm:text-sm"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-md font-medium text-gray-400">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              placeholder='Enter your Password'
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full text-white font-semibold bg-[#303239] px-3 py-2 border border-[#303239] rounded-md shadow-sm focus:outline-none focus:ring-[rgb(67,169,9)] focus:border-[rgb(67,169,9)] sm:text-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[rgb(67,169,9)] font-bold text-white py-2 px-4 rounded-md shadow-sm hover:bg-[rgb(67,169,9)] focus:outline-none focus:ring-2 focus:ring-offset-2 "
          >
            {isSignup ? 'Sign Up' : 'Login'}
          </button>
        </form>
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setIsSignup(true)}
            className={`px-4 py-2 mx-1 rounded-t-md ${isSignup ? 'bg-[rgb(67,169,9)] text-white' : 'bg-[#303239] text-gray-400'}`}
          >
            Sign Up
          </button>
          <button
            onClick={() => setIsSignup(false)}
            className={`px-4 py-2 mx-1 rounded-t-md ${!isSignup ? 'bg-[rgb(67,169,9)] text-white' : 'bg-[#303239] text-gray-400'}`}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
