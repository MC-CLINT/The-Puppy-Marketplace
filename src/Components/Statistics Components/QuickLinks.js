import React from 'react';
import { Link } from 'react-router-dom';

function QuickLinks() {
  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
      <div className="grid grid-cols-1 gap-4">
        <Link to="/accounts" className="p-4 bg-blue-50 rounded flex items-center justify-between">
          <span className="font-bold text-blue-600">Accounts</span>
          <span className="text-blue-800">Manage accounts</span>
        </Link>
        <Link to="/orders" className="p-4 bg-green-50 rounded flex items-center justify-between">
          <span className="font-bold text-green-600">Orders</span>
          <span className="text-green-800">View orders</span>
        </Link>
        <Link to="/listings" className="p-4 bg-yellow-50 rounded flex items-center justify-between">
          <span className="font-bold text-yellow-600">Listings</span>
          <span className="text-yellow-800">View listings</span>
          </Link>
    
        
       
      </div>
    </div>
  );
}

export default QuickLinks;
