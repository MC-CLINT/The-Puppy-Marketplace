import Home from './Home';
import SignUp from './Components/SignUp';
import LogIn from './Components/LogIn';
import VerifyEmail from './Components/VerifyEmail';
import Verified from './Components/Verified';
import ForgotPassword from './Components/ForgotPassword';
import VerifyEmailForgotPassword  from './Components/VerifyEmailForgotPassword';
import CreateNewPassword from './Components/CreateNewPassword';
import Dashboard from './UserDashboard/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-email-forgotpassword" element={<VerifyEmailForgotPassword />} />
        <Route path="/create-new-password" element={<CreateNewPassword />} />
        <Route path="/user-dashboard" element={<Dashboard />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/verified" element={<Verified />} />
      
      
        
      
       
        

        

    

        
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
