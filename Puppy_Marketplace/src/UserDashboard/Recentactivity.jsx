
const RecentActivity = () => {
    return (
        <div className="bg-white rounded-lg p-4 shadow-lg">
            <h2 className="text-xl font-bold mb-2">Recent Activity</h2>
            <ul>
                <li className="flex justify-between"><span>Complete Bio Info</span> <span className="text-green-500">●</span></li>
                <li className="flex justify-between"><span>Complete payment for last order</span> <span className="text-yellow-500">●</span></li>
                <li className="flex justify-between"><span>Connect with more buyers</span> <span className="text-blue-500">●</span></li>
                <li className="flex justify-between"><span>Add 3 more images of your puppy listing</span> <span className="text-red-500">●</span></li>
            </ul>
        </div>
    );
};

export default RecentActivity;
