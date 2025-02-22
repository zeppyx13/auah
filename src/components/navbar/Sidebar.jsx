import React from "react";
import NavItem from "./NavItem";
const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white min-h-screen p-4">
      <h1 className="text-2xl font-bold">JB Pay</h1>
      <nav className="mt-10 space-y-2">
        <NavItem icon="fas fa-tachometer-alt" text="Dashboard" active />
        <NavItem icon="fas fa-image" text="Gallery" />
        <NavItem icon="fas fa-calendar-alt" text="Event" />
        <h2 className="text-gray-400 px-4 mt-6">ACCOUNT PAGES</h2>
        <NavItem icon="fas fa-user" text="Profile" />
        <NavItem icon="fas fa-sign-out-alt" text="Sign Out" />
      </nav>
    </div>
  );
};

export default Sidebar;
