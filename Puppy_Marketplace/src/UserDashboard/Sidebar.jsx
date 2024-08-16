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
    <div className={`flex h-screen ${isCollapsed ? "w-16" : "w-64"}`}>
      <Sidebar aria-label="Sidebar with content separator example" className="h-full">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="/" icon={HiChartPie}>
              {!isCollapsed && <span className="">Dashboard</span>}
            </Sidebar.Item>
            <Sidebar.Item href="UserManagement" icon={HiViewBoards}>
              {!isCollapsed && <span className="">User Management</span>}
            </Sidebar.Item>
            <Sidebar.Item href="Inbox" icon={HiInbox}>
              {!isCollapsed && <span className="">Inbox</span>}
            </Sidebar.Item>
            <Sidebar.Item href="ProductManagement" icon={HiUser}>
              {!isCollapsed && <span className="">Product Management</span>}
            </Sidebar.Item>
            <Sidebar.Item href="OrderManagement" icon={HiShoppingBag}>
              {!isCollapsed && <span className="">Order Management</span>}
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiArrowSmRight}>
              {!isCollapsed && <span className="">Messages</span>}
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiTable}>
              {!isCollapsed && <span className="">Notifications</span>}
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiTable}>
              {!isCollapsed && <span className="">Settings</span>}
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiTable}>
              {!isCollapsed && <span className="">Reports</span>}
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiTable}>
              {!isCollapsed && <span className="">Support</span>}
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiTable}>
              {!isCollapsed && <span className="lg:text-red-900">SignOut</span>}
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
        <button
          className="absolute bottom-0 mb-4 p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-all"
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