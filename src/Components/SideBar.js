"use client";

import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";

export default function SideBar() {
  return (
    <Sidebar aria-label="Sidebar with content separator example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/" icon={HiChartPie}>
            <span className="">Dashboard</span>
          </Sidebar.Item>
          <Sidebar.Item href="UserManagement" icon={HiViewBoards}>
            <span className="">User Management</span>
          </Sidebar.Item>
          <Sidebar.Item href="Inbox" icon={HiInbox}>
            <span className="">Inbox</span>
          </Sidebar.Item>
          <Sidebar.Item href="ProductManagement" icon={HiUser}>
            <span className="">Product Management</span>
          </Sidebar.Item>
          <Sidebar.Item href="OrderManagement" icon={HiShoppingBag}>
            <span className="">Order Management</span>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiArrowSmRight}>
            <span className="">Messages</span>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiTable}>
            <span className="">Notifications</span>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiTable}>
            <span className="">Settings</span>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiTable}>
            <span className="">Reports</span>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiTable}>
            <span className="">Support</span>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiTable}>
            <span className="lg:text-red-900">SignOut</span>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
