import React from 'react';
import Vector from '../assets/Vector.png'; 
import Securepadlock  from '../assets/Secure padlock.png';




function CreateNewPassword () {
  
  return (
    <div>
<body class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md border">
        <div class="flex justify-center mb-4">
          <img src={Vector} alt="Background Vector" className="w-32 h-32" />
          <img src={Securepadlock} alt="Padlock Icon" className="w-36 h-36 absolute top-20 left-1/6" />
        </div>
        <h2 class="text-2xl font-bold text-center mb-2">Create A New Password</h2>
        <p class="text-center text-gray-600 mb-6">Your New Password Must Be Different from The Old Password</p>
        <form action="#">
            <div class="mb-4">
                <label for="new-password" class="block text-sm font-medium text-gray-700">New Password</label>
                <input type="password" id="new-password" class="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-900"/>
            </div>
            <div class="mb-6">
                <label for="confirm-password" class="block text-sm font-medium text-gray-700">Confirm Password</label>
                <input type="password" id="confirm-password" class="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-900"/>
            </div>
            <div className="flex justify-center mt-6">
            <button type="submit" class="w-32 py-2 bg-sky-900 text-white font-semibold rounded-2xl hover:bg-gray-700 focus:outline-none">Save</button>
            </div>
        </form>
    </div>
</body>
    </div>
  );
}

export default CreateNewPassword;
