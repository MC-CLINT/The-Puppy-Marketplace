import React from 'react';
import Vector from '../assets/Vector.png'
import EmailOpen from '../assets/EmailOpen 1.png'
import { Link } from 'react-router-dom'



function VerifyEmailForgotPassword () {
  
  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center w-96">
        {/* Email Icon */}
        <div className="flex justify-center mb-4">
          <img src={Vector} alt="Email Icon" className="w-28 h-28" />
          <img src={EmailOpen} alt="Email Icon" className="w-24 h-24 absolute top-1/6 left-1/6" />
        </div>
        {/* Title */}
        <h2 className="text-xl font-bold text-black">Enter Verification Code</h2>
        <p className="text-black mt-2">Please Enter The 4-digit Code Sent To</p>
        <p className="text-black font-medium mb-4">mymail@example.com</p>

        {/* Code Input Fields */}
        <div className="flex justify-center space-x-4 mb-4">
          <input
            type="text"
            maxLength="1"
            className="w-12 h-12 text-2xl text-center border-b-4 border-gray-300 focus:outline-none focus:border-sky-900 bg-amber-50 rounded"
          />
          <input
            type="text"
            maxLength="1"
            className="w-12 h-12 text-2xl text-center border-b-4 border-gray-300 focus:outline-none focus:border-sky-900 bg-amber-50 rounded"
          />
          <input
            type="text"
            maxLength="1"
            className="w-12 h-12 text-2xl text-center border-b-4 border-gray-300 focus:outline-none focus:border-sky-900 bg-amber-50 rounded"
          />
          <input
            type="text"
            maxLength="1"
            className="w-12 h-12 text-2xl text-center border-b-4 border-gray-300 focus:outline-none focus:border-sky-900 bg-amber-50 rounded"
          />
        </div>

        {/* Resend Code Link */}
        <a href="#" className="text-yellow-400 hover:underline mb-6 block">
          Resend Code
        </a>

        {/* Verify Button */}

        <Link to = '/create-new-password'>
        <button
         className="w-32 mt-4 bg-sky-900 text-white py-2 px-6 rounded-2xl hover:bg-gray-700">
          Verify
        </button>
        </Link>

      </div>
    </div>
  );
}

export default VerifyEmailForgotPassword;
