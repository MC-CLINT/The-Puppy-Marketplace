import bag from '../assets/cart.png'

const MyCart = () => {
    return (
        <div className="flex flex-col justify-between bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-lg p-4 h-80 w-full text-white">
            <h2 className="text-xl font-bold">My Cart</h2>

            <div className="flex flex-row justify-between">
            <img src={bag} className="h-12 w-12 mt-2 " />
            <p className="text-6xl font-bold">09</p>

            </div>
            
        </div>
    );
};

export default MyCart;
