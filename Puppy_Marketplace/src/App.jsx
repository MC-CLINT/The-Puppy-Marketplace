import Home from './Home';
import SignUp from './Components/SignUp';
import LogIn from './Components/LogIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
