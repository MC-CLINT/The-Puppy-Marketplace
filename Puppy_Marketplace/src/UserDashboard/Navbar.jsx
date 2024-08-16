"use client";
import Logo from '../assets/logo.png';
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { RiNotification4Line } from "react-icons/ri";
import { TiMessages } from "react-icons/ti";

export default function Nav() {
  return (
    <Navbar fluid rounded className="border border-lg mb-9 w-auto " style={{backgroundColor:'#15415C'}}>
      <Navbar.Brand className='w-auto '>
        <img src={Logo} alt="logo" className="w-5 h-5" />
        <span className="font-bold text-white">Puppy Market</span>
      </Navbar.Brand>
      <div className="flex items-center space-x-4">
        <RiNotification4Line className="w-7 h-7 text-white" />
        <TiMessages className="w-7 h-7 text-white" />
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