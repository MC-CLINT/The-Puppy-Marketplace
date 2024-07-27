import React from 'react';

function RecentActivity() {
  const activities = [
    { id: 1, activity: "User John Doe registered", time: "2 hours ago" },
    { id: 2, activity: "New listing: Golden Retriever", time: "4 hours ago" },
    { id: 3, activity: "Order #12345 placed", time: "6 hours ago" },
    // Add more activities as needed
  ];

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="border-b-2 p-2">Activity</th>
            <th className="border-b-2 p-2">Time</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity) => (
            <tr key={activity.id} className="hover:bg-gray-100">
              <td className="border-b p-2">{activity.activity}</td>
              <td className="border-b p-2 text-gray-500">{activity.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentActivity;
