import Home from './Home';
import SignUp from './Components/SignUp';
import LogIn from './Components/LogIn';
import VerifyEmail from './Components/VerifyEmail';
import Verified from './Components/Verified';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './UserDashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup/verify-email" element={<VerifyEmail />} />
        <Route path="/signup/verify-email/verified" element={<Verified />} />
        <Route path='Dashboard' element = {<Dashboard />}>
        
        </Route>
    

        
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
