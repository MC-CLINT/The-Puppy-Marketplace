import React from 'react';

const Ordertable = () => {
  return (
   <>
     <table className="min-w-full divide-y divide-gray-200 ">
      <thead className="bg-gray-50 w-full">
        <tr>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Product ID
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Seller ID
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Buyer
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Order ID
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Date
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Time
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Status
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Satisfaction
          </th>
         
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Product ID</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Seller ID</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Date</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Time</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Status</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">user.status</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">user.signupDate</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">user.lastLogin</td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <a href="#" className="ml-4 text-red-600 hover:text-red-900">Delete</a>
            </td>
          </tr>
      </tbody>
    </table>
   
   
   </>
  );
};

export default Ordertable;
