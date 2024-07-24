import logo32 from '../assets/logo3 2.png'
import dog from '../assets/Colorful Beagle 1.png'
"use client";
export default function SignUp() {
  return (

      <div className="flex flex-row  ">

<div className="hidden sm:flex flex-col custom-width bg-sky-900 p-5 justify-between text-center">
 



          <div className="text-white">

              <div className="flex flex-row justify-between">

                <div>
                <img className='h-14 w-14' src={logo32}/>
                </div>
            
                <div>
                <p className="text-xl font-extrabold">PUPPY</p>
                <p className="text-xl font-extrabold">MARKETPLACE</p>
                </div>

                <div>
                <img  className='h-14 w-14' src={logo32}/>
                </div>

              </div>

              <p className="text-yellow-400">...................................................</p>
              <p className="text-lg font-normal leading-7">Diverse Marketplace For Dog Enthusiasts</p>
              <p className="text-lg font-normal leading-7">- Connect with buyers and sellers of puppies</p>

          </div>

          
            <img src={dog}/>
        


          <div className="leading-4">
            <p className="text-sm font-normal text-yellow-400">Facing any trouble ?</p>
            <p className="text-sm font-normal text-yellow-400 mt-2">Contact Us:</p>
            <p className="text-sm font-normal mt-2">Email: support@puppymarketplace.com</p>
            <p className="text-sm font-normal mt-2">Phone: +1-800-PUPPY-SUPPORT</p>
            <p className="text-sm font-normal mt-2">Help Center: Visit our Help Center for more resources</p>

            <p className="mt-5">&#169; 2024</p>
          
          </div>

            
        
        </div>

        


      </div>

);
}


