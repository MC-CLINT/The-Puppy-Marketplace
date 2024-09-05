// import React from 'react';
// import Vector from '../assets/Vector.png'
// import EmailOpen from '../assets/EmailOpen 1.png'
// import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom';


// function VerifyEmail() {


//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-50">
//       <div className="bg-white p-8 rounded-lg shadow-lg text-center w-96">
//         {/* Email Icon */}
//         <div className="flex justify-center mb-4">
//           <img src={Vector} alt="Email Icon" className="w-28 h-28" />
//           <img src={EmailOpen} alt="Email Icon" className="w-24 h-24 absolute top-1/6 left-1/6" />
//         </div>
//         {/* Title */}
//         <h2 className="text-xl font-bold text-black">Verify your email to continue</h2>
//         <p className="text-black mt-2">Please Enter The 4-digit Code Sent To</p>
//         <p className="text-black font-medium mb-4">mymail@example.com</p>

//         {/* Code Input Fields */}
//         <div className="flex justify-center space-x-4 mb-4">
//           <input
//             type="text"
//             maxLength="1"
//             className="w-12 h-12 text-2xl text-center border-b-4 border-gray-300 focus:outline-none focus:border-sky-900 bg-amber-50 rounded"
//           />
//           <input
//             type="text"
//             maxLength="1"
//             className="w-12 h-12 text-2xl text-center border-b-4 border-gray-300 focus:outline-none focus:border-sky-900 bg-amber-50 rounded"
//           />
//           <input
//             type="text"
//             maxLength="1"
//             className="w-12 h-12 text-2xl text-center border-b-4 border-gray-300 focus:outline-none focus:border-sky-900 bg-amber-50 rounded"
//           />
//           <input
//             type="text"
//             maxLength="1"
//             className="w-12 h-12 text-2xl text-center border-b-4 border-gray-300 focus:outline-none focus:border-sky-900 bg-amber-50 rounded"
//           />
//         </div>

//         {/* Resend Code Link */}
//         <a href="#" className="text-yellow-400 hover:underline mb-6 block">
//           Resend Code
//         </a>

//         {/* Verify Button */}

//         <Link to = 'verified'>
//         <button
//          className="w-32 mt-4 bg-sky-900 text-white py-2 px-6 rounded-2xl hover:bg-gray-700">
//           Verify
//         </button>
//         </Link>

//       </div>
//     </div>
//   );
// }

// export default VerifyEmail;

// //trial
import React, { useState } from 'react';
import axios from 'axios';
import Vector from '../assets/Vector.png';
import EmailOpen from '../assets/EmailOpen 1.png';
import { useLocation,useNavigate } from 'react-router-dom';

function VerifyEmail() {
  const [code, setCode] = useState(['', '', '', '']);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location=useLocation();

  // Extract email from location state
  const email = location.state?.email;

  const handleInputChange = (index, value) => {
    if (/^\d$/.test(value) || value === '') {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
    }
  };

  const handleVerify = async () => {
    const verificationCode = code.join('');

    try {
      const response = await axios.post('http://localhost:3000/PuppyMarketPlace/signup/verifyEmail', {
        code: verificationCode,
        email:email
      });

      if (response.data.success) {
        navigate('/PuppyMarketPlace/signup/verifyEmail/Verified');
      } else {
        setError('Invalid verification code.');
      }
    } catch (error) {
      setError('Error verifying the code. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center w-96">
        {/* Email Icon */}
        <div className="flex justify-center mb-4 relative">
          <img src={Vector} alt="Email Icon" className="w-28 h-28" />
          <img src={EmailOpen} alt="Email Icon" className="w-24 h-24 absolute top-1/6 left-1/6" />
        </div>
        {/* Title */}
        <h2 className="text-xl font-bold text-black">Verify your email to continue</h2>
        <p className="text-black mt-2">Please Enter The 4-digit Code Sent To</p>
        <p className="text-black font-medium mb-4">{email}</p>

        {/* Code Input Fields */}
        <div className="flex justify-center space-x-4 mb-4">
          {code.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={digit}
              name='textcode'
              onChange={(e) => handleInputChange(index, e.target.value)}
              className="w-12 h-12 text-2xl text-center border-b-4 border-gray-300 focus:outline-none focus:border-sky-900 bg-amber-50 rounded"
            />
          ))}
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 mb-4">{error}</p>}

        {/* Resend Code Link */}
        <a href="#" className="text-yellow-400 hover:underline mb-6 block">
          Resend Code
        </a>

        {/* Verify Button */}
        <button
          onClick={handleVerify}
          className="w-32 mt-4 bg-sky-900 text-white py-2 px-6 rounded-2xl hover:bg-gray-700"
        >
          Verify
        </button>
      </div>
    </div>
  );
}

export default VerifyEmail;
