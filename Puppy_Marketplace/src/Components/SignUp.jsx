// import logo32 from '../assets/logo3 2.png'
// import dog from '../assets/Colorful Beagle 1.png'
// import { Link } from 'react-router-dom'
// import axios from 'axios';

// "use client";


// export default function SignUp() {
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
// import UserIcon from '../assets/user2.png'
// import EmailIcon from '../assets/mail.png'
// import PhoneIcon from '../assets/voicemail.png'
// import EyeIcon from '../assets/eye-off.png'
// import CheckIcon from '../assets/check-circle.png'







// export function Component() {
//   return (
//     <div className="max-w-md ml-2 md:ml-12 lg:ml-60 mx-auto p-6">
//     <h2 className="text-2xl text-sky-900 font-bold mb-6">CREATE AN ACCOUNT</h2>
//     <form action="http://localhost:8000/PuppyMarketPlace/register" method="post" className="space-y-4">
//       <div className="flex space-x-4">
//         <div className="flex-1">
//           <label className="block text-sm font-medium mb-1">First Name</label>
//           <input type="text" className="w-full px-3 py-2 border rounded-md" />
//         </div>
//         <div className="flex-1">
//           <label className="block text-sm font-medium mb-1">Last Name</label>
//           <input type="text" className="w-full px-3 py-2 border rounded-md" />
//         </div>
//       </div>
//       <div className="flex space-x-4 items-center">
//         <div className="flex-1">
//           <label className="block text-sm font-medium mb-1">Username</label>
//           <div className="relative">
//           <span className="absolute inset-y-0 left-2 pr-3 flex items-center">
//             <img src={UserIcon} className="h-5 w-5 text-gray-500" alt="User Icon"/>
//             </span>
//             <input type="text" className="w-60 px-8 py-2 border rounded-md" />
//             <span className="absolute inset-y-0 right-0 pr-3 flex items-center">
//             <img src={CheckIcon} className="h-5 w-5 text-gray-500" alt="User Icon"/>
//             </span>
//           </div>
//         </div>
//         <div className="flex-1">
//           <label className="block text-sm font-medium mb-1">Sex</label>
//           <select className="w-full px-3 py-2 border rounded-md">
//             <option value=""></option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//           </select>
//         </div>
//       </div>
//       <div className="flex space-x-4 items-center">
//         <div className="flex-1">
//           <label className="block text-sm font-medium mb-1">Email</label>
//           <div className="relative">
//             <input type="email" className="w-full pl-8 px-3 py-2 border rounded-md" />
//             <span className="absolute inset-y-0 left-2 pr-3 flex items-center">
//             <img src={EmailIcon} className="h-5 w-5 text-gray-500" alt="User Icon"/>
//             </span>
//           </div>
//         </div>
//         <div className="flex-1">
//           <label className="block text-sm font-medium mb-1">Phone Number</label>
//           <div className="relative">
//             <input type="tel" className="w-full pl-8 px-3 py-2 border rounded-md" />
//             <span className="absolute inset-y-0 left-2 pr-3 flex items-center">
//             <img src={PhoneIcon} className="h-5 w-5 text-gray-500" alt="User Icon"/>
//             </span>
//           </div>
//         </div>
//       </div>
//       <div className="flex space-x-4 items-center">
//         <div className="flex-1">
//           <label className="block text-sm font-medium mb-1">Set Password</label>
//           <div className="relative">
//           <span className="absolute inset-y-0 left-2 pr-3 flex items-center">
//             <img src={lock} className="h-5 w-5 text-gray-500" alt="User Icon"/>
//             </span>
//             <input type="password" className="w-full px-10 py-2 border rounded-md" />
//             <span className="absolute inset-y-0 right-0 pr-3 flex items-center">
//             <img src={EyeIcon} className="h-5 w-5 text-gray-500" alt="User Icon"/>
//             </span>
//           </div>
//         </div>
//       </div>
//       <div className="flex space-x-4 items-center">
//         <div className="flex-1">
//           <label className="block text-sm font-medium mb-1">Confirm Password</label>
//           <div className="relative">
//           <span className="absolute inset-y-0 left-2 pr-3 flex items-center">
//             <img src={lock} className="h-5 w-5 text-gray-500" alt="User Icon"/>
//             </span>
//             <input type="password" className="w-full px-10 py-2 border rounded-md"/>
//             <span className="absolute inset-y-0 right-0 pr-3 flex items-center">
//             <img src={EyeIcon} className="h-5 w-5 text-gray-500" alt="User Icon"/>
//             </span>
//           </div>
//         </div>
//       </div>
//       <div className="flex justify-center">
//       <Link to = 'verify-email'>
//       <Button className="bg-sky-900 w-32 h-10 font-semibold mb-2 rounded-2xl flex hover:bg-gray-700 items-center justify-center" type="submit">Sign Up</Button>
//       </Link>
        
//       </div>
//       <div>
//         <p className="text-center ">----------- or continue with -----------</p>
//       </div>

//       <div className="flex flex-row justify-between">
//         <img className="w-10 h-10" src={Google}/>
//         <img className="w-10 h-10" src={Facebook}/>
//         <img className="w-10 h-10" src={Instagram}/>
//       </div>
//     </form>
//   </div>
//   );
// }

// //below is my adjustments for the frontend so i can connect it to the backend of my code

// //try
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import logo32 from '../assets/logo3 2.png';
import dog from '../assets/Colorful Beagle 1.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'flowbite-react';
import lock from '../assets/lock.png';
import UserIcon from '../assets/user2.png';
import EmailIcon from '../assets/mail.png';
import PhoneIcon from '../assets/voicemail.png';
import EyeIcon from '../assets/eye-off.png';
import CheckIcon from '../assets/check-circle.png';
import Google from '../assets/Google.png';
import Facebook from '../assets/Facebook.png';
import Instagram from '../assets/Instagram.png';


export default function SignUp() {
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
        <div>
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

export function Component() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    sex: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted');  
    try {
      const response = await axios.post('http://localhost:3000/PuppyMarketPlace/signup', formData);
      console.log(response.data);
      navigate('/user-dashboard');
    } catch (error) {
      console.error(error);
      
    }
  };
  const handleGoogleOAuth = () => {
    // Redirect to Google OAuth endpoint
    window.location.href = 'http://localhost:3000/auth/google';
  };


  return (
    <div className="max-w-md ml-2 md:ml-12 lg:ml-60 mx-auto p-6">
      <h2 className="text-2xl text-sky-900 font-bold mb-6">CREATE AN ACCOUNT</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex space-x-4">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
        </div>
        <div className="flex space-x-4 items-center">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">Username</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-2 pr-3 flex items-center">
                <img src={UserIcon} className="h-5 w-5 text-gray-500" alt="User Icon" />
              </span>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-60 px-8 py-2 border rounded-md"
              />
              <span className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <img src={CheckIcon} className="h-5 w-5 text-gray-500" alt="Check Icon" />
              </span>
            </div>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">Sex</label>
            <select
              name="sex"
              value={formData.sex}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
            >
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
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-8 px-3 py-2 border rounded-md"
              />
              <span className="absolute inset-y-0 left-2 pr-3 flex items-center">
                <img src={EmailIcon} className="h-5 w-5 text-gray-500" alt="Email Icon" />
              </span>
            </div>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">Phone Number</label>
            <div className="relative">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full pl-8 px-3 py-2 border rounded-md"
              />
              <span className="absolute inset-y-0 left-2 pr-3 flex items-center">
                <img src={PhoneIcon} className="h-5 w-5 text-gray-500" alt="Phone Icon" />
              </span>
            </div>
          </div>
        </div>
        <div className="flex space-x-4 items-center">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">Set Password</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-2 pr-3 flex items-center">
                <img src={lock} className="h-5 w-5 text-gray-500" alt="Lock Icon" />
              </span>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-10 py-2 border rounded-md"
              />
              <span className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <img src={EyeIcon} className="h-5 w-5 text-gray-500" alt="Eye Icon" />
              </span>
            </div>
          </div>
        </div>
        <div className="flex space-x-4 items-center">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">Confirm Password</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-2 pr-3 flex items-center">
                <img src={lock} className="h-5 w-5 text-gray-500" alt="Lock Icon" />
              </span>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-10 py-2 border rounded-md"
              />
              <span className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <img src={EyeIcon} className="h-5 w-5 text-gray-500" alt="Eye Icon" />
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
         
            <Button className="bg-sky-900 w-32 h-10 font-semibold mb-2 rounded-2xl flex hover:bg-gray-700 items-center justify-center"
             type="submit">Sign Up
             
             </Button>
          
        </div>
        <div>
          {/* <p className="text-center">----------- or continue with -----------</p> */}
        </div>
        {/* <div className="flex flex-row justify-between">
      
          <button onClick={handleGoogleOAuth} className="w-10 h-10">
            <img src={Google} alt="Google OAuth" />
          </button>
        
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
  );
}
