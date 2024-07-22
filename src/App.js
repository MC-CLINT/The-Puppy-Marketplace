import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Support from './Components/Support';
import Accounts from './Components/Accounts';
import ContentManagement from './Components/ContentManagement';
import Settings from './Components/Settings';
import Customization from './Components/Customization';
import Forms from './Components/Forms';
import SideBar from './Components/SideBar';
import Nav from './Components/Navbar';
import Analytics from './Components/Analytics';

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative">
        <Nav />
        <div className="flex">
          <SideBar />
          <div className="ml-4 flex-grow">
            <Routes>
              <Route path="Analytics" element={<Analytics />} />
              <Route path="Support" element={<Support />} />
              <Route path="Accounts" element={<Accounts />} />
              <Route path="ContentManagement" element={<ContentManagement />} />
              <Route path="Settings" element={<Settings />} />
              <Route path="Customization" element={<Customization />} />
              <Route path="LogOut" element={<Forms />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
