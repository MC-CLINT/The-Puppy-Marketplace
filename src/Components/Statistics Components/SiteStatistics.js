import React from 'react';

function SiteStatistics() {
  return (
    <div className="bg-white p-6 rounded shadow-lg w-full">
      <h2 className="text-2xl font-semibold mb-4 text-blue-600">Site Statistics</h2>
      <ul className="flex flex-row justify-between space-x-4">
        <li className="p-4 bg-blue-50 rounded">
          <span className="font-bold text-blue-600">Total Users:</span> <span className="text-blue-800">1,234</span>
        </li>
        <li className="p-4 bg-green-50 rounded">
          <span className="font-bold text-green-600">Total Listings:</span> <span className="text-green-800">567</span>
        </li>
        <li className="p-4 bg-yellow-50 rounded">
          <span className="font-bold text-yellow-600">Total Orders:</span> <span className="text-yellow-800">890</span>
        </li>
        <li className="p-4 bg-red-50 rounded">
          <span className="font-bold text-red-600">Revenue:</span> <span className="text-red-800">$123,456</span>
        </li>
      </ul>
    </div>
  );
}

export default SiteStatistics;
