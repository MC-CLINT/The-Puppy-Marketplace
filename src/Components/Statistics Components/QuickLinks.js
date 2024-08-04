import React from 'react';
import { Link } from 'react-router-dom';
import { FaUsers, FaShoppingCart, FaDog } from 'react-icons/fa';
import 'tailwindcss/tailwind.css';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

function QuickLinks() {
  return (
    <div className="bg-white p-6 rounded shadow-md w-full">
      <h2 className="text-xl font-semibold mb-4 text-blue-600">Quick Links</h2>
      <div className="grid grid-cols-1 gap-4">
        <Tippy content="Manage accounts">
          <Link to="/accounts" className="p-4 bg-blue-50 rounded flex items-center justify-between transition duration-300 ease-in-out transform hover:scale-105">
            <div className="flex items-center space-x-2">
              <FaUsers className="text-blue-600" size={20} />
              <span className="font-bold text-blue-600">Accounts</span>
            </div>
            <span className="text-blue-800">Manage accounts</span>
          </Link>
        </Tippy>
        <Tippy content="View orders">
          <Link to="/orders" className="p-4 bg-green-50 rounded flex items-center justify-between transition duration-300 ease-in-out transform hover:scale-105">
            <div className="flex items-center space-x-2">
              <FaShoppingCart className="text-green-600" size={20} />
              <span className="font-bold text-green-600">Orders</span>
            </div>
            <span className="text-green-800">View orders</span>
          </Link>
        </Tippy>
        <Tippy content="View listings">
          <Link to="/listings" className="p-4 bg-yellow-50 rounded flex items-center justify-between transition duration-300 ease-in-out transform hover:scale-105">
            <div className="flex items-center space-x-2">
              <FaDog className="text-yellow-600" size={20} />
              <span className="font-bold text-yellow-600">Listings</span>
            </div>
            <span className="text-yellow-800">View listings</span>
          </Link>
        </Tippy>
      </div>
    </div>
  );
}

export default QuickLinks;
