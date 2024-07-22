
"use client";

import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";

export default function SideBar() {
  return (
    <Sidebar aria-label="Sidebar with content separator example" >
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="Accounts" icon={HiChartPie}>
            User Management
          </Sidebar.Item>
          <Sidebar.Item href="Analytics" icon={HiViewBoards}>
            Analytics
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiInbox}>
            Inbox
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            Users
          </Sidebar.Item>
          <Sidebar.Item href="ContentManagement" icon={HiShoppingBag}>
            Content Management
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiArrowSmRight}>
            Custormization
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiTable}>
            Settings
          </Sidebar.Item>
        </Sidebar.ItemGroup>
       
      </Sidebar.Items>
    </Sidebar>
  );
}
