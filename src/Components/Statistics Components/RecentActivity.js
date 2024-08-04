import React from 'react';
import { FaUserPlus, FaDog, FaShoppingCart } from 'react-icons/fa';
import 'tailwindcss/tailwind.css';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

function RecentActivity() {
  const activities = [
    { id: 1, activity: "User John Doe registered", time: "2 hours ago", icon: <FaUserPlus className="text-blue-600" size={20} /> },
    { id: 2, activity: "New listing: Golden Retriever", time: "4 hours ago", icon: <FaDog className="text-green-600" size={20} /> },
    { id: 3, activity: "Order #12345 placed", time: "6 hours ago", icon: <FaShoppingCart className="text-yellow-600" size={20} /> },
    // Add more activities as needed
  ];

  return (
    <div className="bg-white p-6 rounded shadow-md w-full">
      <h2 className="text-xl font-semibold mb-4 text-blue-600">Recent Activity</h2>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="border-b-2 p-2">Activity</th>
            <th className="border-b-2 p-2">Time</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity) => (
            <tr key={activity.id} className="hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105">
              <td className="border-b p-2 flex items-center space-x-2">
                <Tippy content={activity.activity}>
                  <div>{activity.icon}</div>
                </Tippy>
                <span>{activity.activity}</span>
              </td>
              <td className="border-b p-2 text-gray-500">{activity.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentActivity;
