import logo32 from '../assets/logo3 2.png'
import dog from '../assets/Colorful Beagle 1.png'
import { Link } from 'react-router-dom'

"use client";


export default function SignUp() {
  return (

      <div className="flex flex-row  ">

<div className="hidden sm:flex flex-col custom-width bg-sky-900 p-5 justify-between text-center">
 



          <div className="text-white">

              <div className="flex flex-row justify-between">

                <div>
                <img className='h-[25px] w-[25px]' src={logo32}/>
                </div>
            
                <div>
                <p className="text-sm font-extrabold">PUPPY</p>
                <p className="text-sm font-extrabold">MARKETPLACE</p>
                </div>

                <div>
                <img  className='h-[25px] w-[25px]' src={logo32}/>
                </div>

              </div>

              <p className="text-yellow-400">...................................................</p>
              <p className="text-[10px] font-normal  ">Diverse Marketplace For Dog Enthusiasts</p>
              <p className="text-[10px] font-normal "> Connect with buyers and sellers of puppies</p>

          </div>

          
            <img src={dog} className='w-[230px] '/>
        


          <div className="">
            <p className="text-[10px] font-normal text-yellow-400">Facing any trouble ?</p>
            <p className="text-[10px] font-normal text-yellow-400 mt-2">Contact Us:</p>
            <p className="text-[10px] font-normal mt-2">Email: support@puppymarketplace.com</p>
            <p className="text-[10px] font-normal mt-2">Phone: +1-800-PUPPY-SUPPORT</p>
            <p className="text-[10px] font-normal mt-2">Help Center: Visit our Help Center for more resources</p>
            <p className="mt-5">&#169; 2024</p>
          
          </div>

            
        
        </div>

        <div className="flex justify-center items-center min-h-screen">
        
        </div>

        <div className="flex justify-center items-center min-h-screen">
        <Component />
        </div>


      </div>

);
}

import { Button, Label, TextInput } from "flowbite-react";
import lock from '../assets/lock.png'
import User2 from '../assets/user2.png'
import Facebook from '../assets/Facebook.png'
import Google from '../assets/Google.png'
import Instagram from '../assets/Instagram.png'
import UserIcon from '../assets/user2.png'
import EmailIcon from '../assets/mail.png'
import PhoneIcon from '../assets/voicemail.png'
import EyeIcon from '../assets/eye-off.png'
import CheckIcon from '../assets/check-circle.png'







export function Component() {
  return (
    <div className="max-w-md ml-2 md:ml-12 lg:ml-60 mx-auto p-6">
    <h2 className="text-2xl text-sky-900 font-bold mb-6">CREATE AN ACCOUNT</h2>
    <form className="space-y-4">
      <div className="flex space-x-4">
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">First Name</label>
          <input type="text" className="w-full px-3 py-2 border rounded-md" />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">Last Name</label>
          <input type="text" className="w-full px-3 py-2 border rounded-md" />
        </div>
      </div>
      <div className="flex space-x-4 items-center">
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">Username</label>
          <div className="relative">
          <span className="absolute inset-y-0 left-2 pr-3 flex items-center">
            <img src={UserIcon} className="h-5 w-5 text-gray-500" alt="User Icon"/>
            </span>
            <input type="text" className="w-60 px-8 py-2 border rounded-md" />
            <span className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <img src={CheckIcon} className="h-5 w-5 text-gray-500" alt="User Icon"/>
            </span>
          </div>
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">Sex</label>
          <select className="w-full px-3 py-2 border rounded-md">
            <option value=""></option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      </div>
      <div className="flex space-x-4 items-center">
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">Email</label>
          <div className="relative">
            <input type="email" className="w-full pl-8 px-3 py-2 border rounded-md" />
            <span className="absolute inset-y-0 left-2 pr-3 flex items-center">
            <img src={EmailIcon} className="h-5 w-5 text-gray-500" alt="User Icon"/>
            </span>
          </div>
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">Phone Number</label>
          <div className="relative">
            <input type="tel" className="w-full pl-8 px-3 py-2 border rounded-md" />
            <span className="absolute inset-y-0 left-2 pr-3 flex items-center">
            <img src={PhoneIcon} className="h-5 w-5 text-gray-500" alt="User Icon"/>
            </span>
          </div>
        </div>
      </div>
      <div className="flex space-x-4 items-center">
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">Set Password</label>
          <div className="relative">
          <span className="absolute inset-y-0 left-2 pr-3 flex items-center">
            <img src={lock} className="h-5 w-5 text-gray-500" alt="User Icon"/>
            </span>
            <input type="password" className="w-full px-10 py-2 border rounded-md" />
            <span className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <img src={EyeIcon} className="h-5 w-5 text-gray-500" alt="User Icon"/>
            </span>
          </div>
        </div>
      </div>
      <div className="flex space-x-4 items-center">
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">Confirm Password</label>
          <div className="relative">
          <span className="absolute inset-y-0 left-2 pr-3 flex items-center">
            <img src={lock} className="h-5 w-5 text-gray-500" alt="User Icon"/>
            </span>
            <input type="password" className="w-full px-10 py-2 border rounded-md"/>
            <span className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <img src={EyeIcon} className="h-5 w-5 text-gray-500" alt="User Icon"/>
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
      <Link to = '/verify-email'>
      <Button className="bg-sky-900 w-32 h-10 font-semibold mb-2 rounded-2xl flex hover:bg-gray-700 items-center justify-center" type="submit">Sign Up</Button>
      </Link>
        
      </div>
      <div>
        <p className="text-center ">----------- or continue with -----------</p>
      </div>

      <div className="flex flex-row justify-between">
        <img className="w-10 h-10" src={Google}/>
        <img className="w-10 h-10" src={Facebook}/>
        <img className="w-10 h-10" src={Instagram}/>
      </div>
    </form>
  </div>
  );
}
