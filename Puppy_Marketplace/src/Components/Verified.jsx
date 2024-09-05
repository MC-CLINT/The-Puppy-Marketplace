// import checkImage from '../assets/checkImage.png';
// import { Link } from 'react-router-dom';

// function Verified() {
//   return (
//     <div>
//      <div className="flex justify-center items-center h-screen bg-yellow-400">
//     <div className="bg-white p-8 rounded-lg shadow-lg text-center w-80">
//       <div className="flex justify-center items-center bg-yellow-200 rounded-full w-16 h-16 mx-auto mb-4">
//       <img src={checkImage} className="w-28 h-16 " />
//       </div>
//       <h2 className="text-3xl font-bold text-black">Verified!</h2>
//       <p className="text-black mt-4">Hurray! Your account has been successfully verified</p>
//       <Link to = 'user-dashboard'>
//       <button className="mt-6 bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700">
//         Continue To Dashboard
//       </button>
//       </Link>
//     </div>
//   </div>

//     </div>
//   );
// }

// export default Verified;


//my modifications
import { useNavigate } from 'react-router-dom';
import checkImage from '../assets/checkImage.png';
import axios from 'axios';

function Verified() {
  const navigate = useNavigate();

  const handleDashboardNavigation = async () => {
    try {
      // Make a request to the backend's /user-dashboard endpoint to fetch user data
      const response = await axios.get('http://localhost:3000/PuppyMarketPlace/signup/verifyEmail/Verified/user-dashboard');
      
      if (response.status === 200) {
        // Assuming you store user data in local storage or context
        localStorage.setItem('userData', JSON.stringify(response.data));
        // Redirect to the dashboard page
        navigate('/user-dashboard');
      }
    } catch (error) {
      console.error('Error navigating to dashboard:', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-yellow-400">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center w-80">
        <div className="flex justify-center items-center bg-yellow-200 rounded-full w-16 h-16 mx-auto mb-4">
          <img src={checkImage} className="w-28 h-16" />
        </div>
        <h2 className="text-3xl font-bold text-black">Verified!</h2>
        <p className="text-black mt-4">Hurray! Your account has been successfully verified</p>
        <button 
          onClick={handleDashboardNavigation}
          className="mt-6 bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700"
        >
          Continue To Dashboard
        </button>
      </div>
    </div>
  );
}

export default Verified;
