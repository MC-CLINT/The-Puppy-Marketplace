// import logo32 from '../assets/logo3 2.png'
// import dog from '../assets/Colorful Beagle 1.png'
// import { Link } from 'react-router-dom'
// "use client";


// export default function LogIn() {
//   return (

//       <div className="flex flex-row  ">

// <div className="hidden sm:flex flex-col custom-width bg-sky-900 p-5 justify-between text-center">
 



//           <div className="text-white">

//               <div className="flex flex-row justify-between">

//                 <div>
//                 <img className='h-[25px] w-[25px]' src={logo32}/>
//                 </div>
            
//                 <div>
//                 <p className="text-sm font-extrabold">PUPPY</p>
//                 <p className="text-sm font-extrabold">MARKETPLACE</p>
//                 </div>

//                 <div>
//                 <img  className='h-[25px] w-[25px]' src={logo32}/>
//                 </div>

//               </div>

//               <p className="text-yellow-400">...................................................</p>
//               <p className="text-[10px] font-normal  ">Diverse Marketplace For Dog Enthusiasts</p>
//               <p className="text-[10px] font-normal "> Connect with buyers and sellers of puppies</p>

//           </div>

          
//             <img src={dog} className='w-[230px] '/>
        


//           <div className="">
//             <p className="text-[10px] font-normal text-yellow-400">Facing any trouble ?</p>
//             <p className="text-[10px] font-normal text-yellow-400 mt-2">Contact Us:</p>
//             <p className="text-[10px] font-normal mt-2">Email: support@puppymarketplace.com</p>
//             <p className="text-[10px] font-normal mt-2">Phone: +1-800-PUPPY-SUPPORT</p>
//             <p className="text-[10px] font-normal mt-2">Help Center: Visit our Help Center for more resources</p>
//             <p className="mt-5">&#169; 2024</p>
          
//           </div>

            
        
//         </div>

//         <div className="flex justify-center items-center min-h-screen">
//         <Component />
//         </div>


//       </div>

// );
// }

// import { Button, Label, TextInput } from "flowbite-react";
// import lock from '../assets/lock.png'
// import User2 from '../assets/user2.png'
// import Facebook from '../assets/Facebook.png'
// import Google from '../assets/Google.png'
// import Instagram from '../assets/Instagram.png' 
// import axios from 'axios'

// export function Component() {
//   return (
//     <form action='http://localhost:8000/PuppyMarketPlace/register' method='post' className="flex flex-col gap-4 ml-10 md:ml-20 lg:ml-60 p-5 w-80 max-w-md mt-">
//       <h1 className="text-sky-900 font-extrabold text-2xl">LOGIN</h1>

//       <div>
//         <div className="mb-2 block">
//           <Label className="font-normal text-lg" htmlFor="email1" value="Username / Email" />
//         </div>
//         <div className="relative">
//           <TextInput 
//             className="w-full p-2 pl-10 border border-gray-300 rounded-lg" 
//             id="email1" 
//             type="email" 
//             placeholder="enter your username or email" 
//             required 
//           />
//           <img className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 h-6 w-6"  src={User2}/>
//         </div>
//       </div>

//       <div>
//         <div className="mb-2 block">
//           <Label className="font-normal text-lg" htmlFor="password1" value="Password" />
//         </div>
//         <div className="relative">
//           <TextInput 
//             className="w-full p-2 pl-10 border border-gray-300 rounded-md " 
//             id="password1" 
//             type="password" 
//             placeholder="enter your password"
//           />
//           <img className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 h-6 w-6"  src={lock}/>
//         </div>
//         <div className="flex justify-end mb-6">
//         <Link to = 'forgot-password'>
//         <p className="text-xs font-normal">Forgot Password ?</p>
//         </Link>
//         </div>
        
//       </div>

//       <div className="flex justify-center">
//       <Link to = 'user-dashboard'>
//         <button className="bg-sky-900 w-32 h-10 font-semibold mb-2 rounded-2xl hover:bg-gray-700 flex items-center text-white justify-center" type="submit">Log In</button>
//       </Link>
//       </div>
//       <div>
//         <p className="text-center">----------- or continue with -----------</p>
//       </div>

//       <div className="flex flex-row justify-between">
//         <img className="w-10 h-10" src={Google}/>
//         <img className="w-10 h-10" src={Facebook}/>
//         <img className="w-10 h-10" src={Instagram}/>
//       </div>
//     </form>
//   );
// }


//try

import React, { useState } from 'react';
import logo32 from '../assets/logo3 2.png';
import dog from '../assets/Colorful Beagle 1.png';
import User2 from '../assets/user2.png';
import lock from '../assets/lock.png';
import Google from '../assets/Google.png';
import Facebook from '../assets/Facebook.png';
import Instagram from '../assets/Instagram.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function LogIn() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/PuppyMarketPlace/login', {
        email,
        password
      });
      // Handle success (e.g., navigate to user-dashboard or show a success message)
      navigate('/user-dashboard');
    } catch (error) {
      // Handle error (e.g., show an error message)
      setErrorMessage('Login failed: Incorrect email or password.'); 
    }
  };
  const handleGoogleOAuth = () => {
    // Redirect to Google OAuth endpoint
    window.location.href = 'http://localhost:3000/auth/google';
  };


  return (
    <div className="flex flex-row">
      <div className="hidden sm:flex flex-col custom-width bg-sky-900 p-5 justify-between text-center">
        <div className="text-white">
          <div className="flex flex-row justify-between">
            <div>
              <img className='h-[25px] w-[25px]' src={logo32} alt="Logo" />
            </div>
            <div>
              <p className="text-sm font-extrabold">PUPPY</p>
              <p className="text-sm font-extrabold">MARKETPLACE</p>
            </div>
            <div>
              <img className='h-[25px] w-[25px]' src={logo32} alt="Logo" />
            </div>
          </div>
          <p className="text-yellow-400">...................................................</p>
          <p className="text-[10px] font-normal">Diverse Marketplace For Dog Enthusiasts</p>
          <p className="text-[10px] font-normal">Connect with buyers and sellers of puppies</p>
        </div>
        <img src={dog} className='w-[230px]' alt="Dog" />
        <div className="">
          <p className="text-[10px] font-normal text-yellow-400">Facing any trouble?</p>
          <p className="text-[10px] font-normal text-yellow-400 mt-2">Contact Us:</p>
          <p className="text-[10px] font-normal mt-2">Email: support@puppymarketplace.com</p>
          <p className="text-[10px] font-normal mt-2">Phone: +1-800-PUPPY-SUPPORT</p>
          <p className="text-[10px] font-normal mt-2">Help Center: Visit our Help Center for more resources</p>
          <p className="mt-5">&#169; 2024</p>
        </div>
      </div>

      <div className="flex justify-center items-center min-h-screen">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 ml-10 md:ml-20 lg:ml-60 p-5 w-80 max-w-md mt-">
          <h1 className="text-sky-900 font-extrabold text-2xl">LOGIN</h1>
          {errorMessage && (
    <div className="text-red-500 text-center mb-4">
      {errorMessage}
    </div>
  )}
          <div>
            <div className="mb-2 block">
              <label className="font-normal text-lg" htmlFor="email1"> Email</label>
            </div>
            <div className="relative">
              <input
                className="w-full p-2 pl-10 border border-gray-300 rounded-lg"
                id="email1"
                type="email"
                name='email'
                placeholder="Enter your  email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <img className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 h-6 w-6" src={User2} alt="User Icon" />
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <label className="font-normal text-lg" htmlFor="password1">Password</label>
            </div>
            <div className="relative">
              <input
                className="w-full p-2 pl-10 border border-gray-300 rounded-md"
                id="password1"
                type="password"
                placeholder="Enter your password"
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <img className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 h-6 w-6" src={lock} alt="Lock Icon" />
            </div>
            <div className="flex justify-end mb-6">
              <Link to='forgot-password'>
                <p className="text-xs font-normal">Forgot Password?</p>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="bg-sky-900 w-32 h-10 font-semibold mb-2 rounded-2xl hover:bg-gray-700 flex items-center text-white justify-center" type="submit">Log In</button>
          </div>
          <div>
            {/* <p className="text-center">----------- or continue with -----------</p> */}
          </div>
          {/* <div className="flex flex-row justify-between">
            <img className="w-10 h-10" src={Google} alt="Google" />
            <img className="w-10 h-10" src={Facebook} alt="Facebook" />
            <img className="w-10 h-10" src={Instagram} alt="Instagram" />
          </div> */}
          <div className="flex flex-col items-center">
  <p className="mb-4">or continue with</p>
  <div className="flex justify-center w-full">
    <button onClick={handleGoogleOAuth} className="w-60 h-12 bg-gray-100 rounded-md flex items-center justify-center">
      <img src={Google} alt="Google OAuth" className="w-8 h-8" />
    </button>
  </div>
</div>

        </form>
      </div>
    </div>
  );
}