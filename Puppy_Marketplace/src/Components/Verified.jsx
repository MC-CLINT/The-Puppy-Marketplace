import checkImage from '../assets/checkImage.png';
import { Link } from 'react-router-dom';

function Verified() {
  return (
    <div>
     <div className="flex justify-center items-center h-screen bg-yellow-400">
    <div className="bg-white p-8 rounded-lg shadow-lg text-center w-80">
      <div className="flex justify-center items-center bg-yellow-200 rounded-full w-16 h-16 mx-auto mb-4">
      <img src={checkImage} className="w-28 h-16 " />
      </div>
      <h2 className="text-3xl font-bold text-black">Verified!</h2>
      <p className="text-black mt-4">Hurray! Your account has been successfully verified</p>
      <Link to = 'user-dashboard'>
      <button className="mt-6 bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700">
        Continue To Dashboard
      </button>
      </Link>
    </div>
  </div>

    </div>
  );
}

export default Verified;
