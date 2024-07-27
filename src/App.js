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
import Inbox from './Components/Inbox'
import Dashboard from './Components/Dashboard'
import ProductManagement from './Components/ProductMangement';
import Ordertable from './Components/OrderManagement';
import AddNewListing from './Components/AddNewListing';
export default function App() {
  return (
    <BrowserRouter>
      <div className="relative">
        <Nav />
        <div className="flex">
          <SideBar />
          <div className="ml-4 flex-grow w-full">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="UserManagement" element={<Accounts/>} />
              <Route path="Support" element={<Support />} />
              <Route path="Accounts" element={<Accounts />} />
              <Route path="ContentManagement" element={<ContentManagement />} />
              <Route path="Settings" element={<Settings />} />
              <Route path="Customization" element={<Customization />} />
              <Route path="LogOut" element={<Forms />} />
              <Route path = 'Inbox' element  = {<Inbox/>}/>
              <Route path = 'ProductManagement' element = {<ProductManagement/>}/>
              <Route path = 'OrderManagement' element = {<Ordertable/>}/>
              <Route path = 'AddNewListing' element ={<AddNewListing/>}/>
              
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
