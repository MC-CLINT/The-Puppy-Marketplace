import cart from '../assets/new orders.png'
const NewOrders = () => {
    return (
        <div className="flex flex-col justify-between bg-gradient-to-r from-blue-900 to-blue-500 rounded-lg p-4 h-80 w-full text-white">
        <h2 className="text-xl font-bold">New Orders</h2>

        <div className="flex flex-row justify-between">
        <img src={cart} className="h-12 w-12 mt-2 " />
        <p className="text-6xl font-bold">00</p>

        </div>
        
    </div>
    );
};

export default NewOrders;
