import React from 'react';
import PadlockImage from '../assets/padlock 1.png';
import Vector from '../assets/Vector.png'; 
import { Link } from 'react-router-dom'


function ForgotPassword() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-center relative mb-4">
          <img src={Vector} alt="Background Vector" className="w-32 h-32" />
          <img src={PadlockImage} alt="Padlock Icon" className="w-16 h-16 absolute top-6 left-1/6" />
        </div>

        <h2 className="text-center text-2xl font-semibold text-gray-800 mt-4">
          Forgot Password?
        </h2>

        <p className="text-center text-gray-600 mt-2">
          Please enter your email address to receive a verification code.
        </p>

        <div className="mt-6">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
            Email Address:
          </label>
          <input className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-900" type="email" id="email" placeholder="Enter your email" />
        </div>

        <div className="flex justify-center mt-6">
        <Link to = '/verify-email-forgotpassword'>
          <button className="w-32 bg-sky-900 text-white py-2 rounded-2xl hover:bg-gray-700">
            Send
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;