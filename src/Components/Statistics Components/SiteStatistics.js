import React, { useEffect, useState } from 'react';
import { FaUsers, FaDog, FaShoppingCart, FaDollarSign } from 'react-icons/fa';
import 'tailwindcss/tailwind.css';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const LOCAL_STORAGE_KEY = 'dogsData';
const LOCAL_STORAGE_KEY2 = 'accountsData';

function SiteStatistics() {
  const [displayDogData, setDisplayDogData] = useState([]);
  const [totalAccounts, setTotalAccounts] = useState([]);

  useEffect(() => {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedData) {
      setDisplayDogData(JSON.parse(savedData));
    }
  }, []);
  
  useEffect(() => {
    const peopleData = localStorage.getItem(LOCAL_STORAGE_KEY2);
    if (peopleData) {
      setTotalAccounts(JSON.parse(peopleData));
    }
  }, []);

  const totalListings = displayDogData.length;
  const totalUsers = totalAccounts.length;

  return (
    <div className="bg-white p-6 rounded shadow-lg w-full">
      <h2 className="text-2xl font-semibold mb-4 text-blue-600">Site Statistics</h2>
      <ul className="flex flex-wrap justify-between space-x-4">
        <Tippy content="Total registered users">
          <li className="p-4 bg-blue-50 rounded flex flex-col items-center transition duration-300 ease-in-out transform hover:scale-105">
            <FaUsers className="text-blue-600 mb-2" size={24} />
            <span className="font-bold text-blue-600">Total Users</span>
            <span className="text-blue-800">{totalUsers}</span>
          </li>
        </Tippy>
        <Tippy content="Total dog listings">
          <li className="p-4 bg-green-50 rounded flex flex-col items-center transition duration-300 ease-in-out transform hover:scale-105">
            <FaDog className="text-green-600 mb-2" size={24} />
            <span className="font-bold text-green-600">Total Listings</span>
            <span className="text-green-800">{totalListings}</span>
          </li>
        </Tippy>
        <Tippy content="Total orders placed">
          <li className="p-4 bg-yellow-50 rounded flex flex-col items-center transition duration-300 ease-in-out transform hover:scale-105">
            <FaShoppingCart className="text-yellow-600 mb-2" size={24} />
            <span className="font-bold text-yellow-600">Total Orders</span>
            <span className="text-yellow-800">890</span>
          </li>
        </Tippy>
        <Tippy content="Total revenue generated">
          <li className="p-4 bg-red-50 rounded flex flex-col items-center transition duration-300 ease-in-out transform hover:scale-105">
            <FaDollarSign className="text-red-600 mb-2" size={24} />
            <span className="font-bold text-red-600">Revenue</span>
            <span className="text-red-800">$123,456</span>
          </li>
        </Tippy>
      </ul>
    </div>
  );
}

export default SiteStatistics;
