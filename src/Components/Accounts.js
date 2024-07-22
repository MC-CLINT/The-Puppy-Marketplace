import React from 'react';

const UsersTable = () => {
  return (
    <table className="min-w-full divide-y divide-gray-200 ">
      <thead className="bg-gray-50 w-full">
        <tr>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            User ID
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Username
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Full Name
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Email
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Role
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Status
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Sign-up Date
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Last Login
          </th>
          <th scope="col" className="relative px-6 py-3">
            <span className="sr-only">Actions</span>
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">user.id</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">user.username</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">user.fullName</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">user.email</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">user.role</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">user.status</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">user.signupDate</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">user.lastLogin</td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <a href="#" className="ml-4 text-red-600 hover:text-red-900">Delete</a>
            </td>
          </tr>
      </tbody>
    </table>
  );
};

export default UsersTable;
