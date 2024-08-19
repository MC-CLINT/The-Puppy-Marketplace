"use client";

import { useState } from "react";
import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";

export default function SideBar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={`flex h-screen ${isCollapsed ? "w-16" : "w-64 "}`}>
      <Sidebar aria-label="Sidebar with content separator example" className="-mt-12  h-full">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="/" icon={HiChartPie} className="mb-4">
              {!isCollapsed && <span className="text-sky-900 font-bold">Dashboard</span>}
            </Sidebar.Item>
            <hr/>
            <Sidebar.Item href="UserManagement" icon={HiViewBoards} className="mb-4">
              {!isCollapsed && <span className="text-sky-900 font-bold">User Management</span>}
            </Sidebar.Item>
            <hr/>
            <Sidebar.Item href="Inbox" icon={HiInbox} className="mb-4">
              {!isCollapsed && <span className="text-sky-900 font-bold">Inbox</span>}
            </Sidebar.Item>
            <hr/>
            <Sidebar.Item href="ProductManagement" icon={HiUser} className="mb-4">
              {!isCollapsed && <span className="text-sky-900 font-bold">Product Management</span>}
            </Sidebar.Item>
            <hr/>
            <Sidebar.Item href="OrderManagement" icon={HiShoppingBag} className="mb-4">
              {!isCollapsed && <span className="text-sky-900 font-bold">Order Management</span>}
            </Sidebar.Item>
            <hr/>
            <Sidebar.Item href="#" icon={HiArrowSmRight} className="mb-4">
              {!isCollapsed && <span className="text-sky-900 font-bold">Messages</span>}
            </Sidebar.Item>
            <hr/>
          </Sidebar.ItemGroup>

          <hr/>

          <p className="mb-4 text-sky-900">Create New Listings</p>
          <p className="mb-4 text-sky-900">Offer Services</p>
          <p className="mb-4 text-sky-900">Manage Profile</p>

          

        </Sidebar.Items>
        <button
          className="absolute bottom-0 mb-2 p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-all"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? (
            <HiArrowSmRight className="w-6 h-6" />
          ) : (
            <HiArrowSmRight className="w-6 h-6 transform rotate-180" />
          )}
        </button>
      </Sidebar>
    </div>
  );
}