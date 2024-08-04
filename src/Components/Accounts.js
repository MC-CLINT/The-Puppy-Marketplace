import React, {  useEffect, useContext } from 'react';
import { AppContext } from '../App';
import { Link } from 'react-router-dom';

const LOCAL_STORAGE_KEY = 'accountsData';

const UsersTable = () => {
  const { accounts, setAccounts } = useContext(AppContext);

  // Load data from local storage or use default data
  useEffect(() => {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedData) {
      setAccounts(JSON.parse(savedData));
    }
  }, [setAccounts]);

  // Save data to local storage whenever accounts change
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(accounts));
  }, [accounts]);

  const deleteUser = (userId) => {
    setAccounts(accounts.filter(user => user.userId !== userId));
  };

  return (
    <div>
      <table className="min-w-full divide-y divide-gray-200">
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
        <tbody className="bg-white divide-y divide-gray-200 w-auto">
          {accounts.map(user => (
            <TableRow key={user.userId} {...user} deleteUser={deleteUser} />
          ))}
          <tr>
            <td colSpan="9" className="px-6 py-4 whitespace-nowrap text-center">
              <Link to="" className="block">
                <button className="w-full bg-green-600 text-white rounded-lg py-2 px-4">
                  Add New User
                </button>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const TableRow = ({ userId, username, fullName, email, role, status, signUpDate, lastLogin, deleteUser }) => {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{userId}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{username}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{fullName}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{email}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{role}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{status}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{signUpDate}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lastLogin}</td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <a
          href="#"
          onClick={() => deleteUser(userId)}
          className="ml-4 text-red-600 hover:text-red-900"
        >
          Delete
        </a>
      </td>
    </tr>
  );
};

export default UsersTable;
