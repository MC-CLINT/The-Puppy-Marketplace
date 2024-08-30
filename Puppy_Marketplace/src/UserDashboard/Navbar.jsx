"use client";
import menu from '../assets/menu.png'
import Logo from '../assets/logo.png';
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import bell from '../assets/bell.png'
import logo from '../assets/logo 2.png';
import mail from '../assets/dashboard mail.png';
import { Link } from 'react-router-dom'



export default function Nav() {
  return (
    <Navbar fluid rounded className="border border-lg w-auto mb-0 bg-white ">
      <Navbar.Brand className='w-auto '>
        <img src={menu} alt="logo" className="w-7 h-7 ml-5" />
        <Link to = '/'>
        <img src={logo} alt="logo" className="w-10 h-10 mr-2 ml-6 hover:bg-sky-900" />
        </Link>
        <span className="text-lg font-bold text-sky-900">PUPPY MARKETPLACE</span>
      </Navbar.Brand>
      <div className="flex items-center space-x-4">
      <input 
  type='search' 
  className='pl-2 border-2 rounded-xl border-sky-900 w-40 sm:w-52 md:w-72 lg:w-96 h-8' 
  placeholder='Search...' 
/>

        <img src={mail}  className="w-6 h-6 mr-6 ml-6" />
        <img src={bell}  className="w-6 h-6 mr-6 ml-6" />
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
      </div>
    </Navbar>
  );
}