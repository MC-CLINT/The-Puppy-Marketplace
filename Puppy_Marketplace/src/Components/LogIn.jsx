import logo32 from '../assets/logo3 2.png'
import dog from '../assets/Colorful Beagle 1.png'
import { Link } from 'react-router-dom'
"use client";


export default function LogIn() {
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

export function Component() {
  return (
    <form className="flex flex-col gap-4 ml-10 md:ml-20 lg:ml-60 p-5 w-80 max-w-md mt-">
      <h1 className="text-sky-900 font-extrabold text-2xl">LOGIN</h1>

      <div>
        <div className="mb-2 block">
          <Label className="font-normal text-lg" htmlFor="email1" value="Username / Email" />
        </div>
        <div className="relative">
          <TextInput 
            className="w-full p-2 pl-10 border border-gray-300 rounded-lg" 
            id="email1" 
            type="email" 
            placeholder="enter your username or email" 
            required 
          />
          <img className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 h-6 w-6"  src={User2}/>
        </div>
      </div>

      <div>
        <div className="mb-2 block">
          <Label className="font-normal text-lg" htmlFor="password1" value="Password" />
        </div>
        <div className="relative">
          <TextInput 
            className="w-full p-2 pl-10 border border-gray-300 rounded-md " 
            id="password1" 
            type="password" 
            placeholder="enter your password"
          />
          <img className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 h-6 w-6"  src={lock}/>
        </div>
        <div className="flex justify-end mb-6">
        <Link to = 'forgot-password'>
        <p className="text-xs font-normal">Forgot Password ?</p>
        </Link>
        </div>
        
      </div>

      <div className="flex justify-center">
        <Button className="bg-sky-900 w-32 h-10 font-semibold mb-2 rounded-2xl hover:bg-gray-700 flex items-center justify-center" type="submit">Log In</Button>
      </div>
      <div>
        <p className="text-center">----------- or continue with -----------</p>
      </div>

      <div className="flex flex-row justify-between">
        <img className="w-10 h-10" src={Google}/>
        <img className="w-10 h-10" src={Facebook}/>
        <img className="w-10 h-10" src={Instagram}/>
      </div>
    </form>
  );
}


