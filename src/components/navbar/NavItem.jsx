import React from "react";

const NavItem = ({ icon, text, active }) => {
  return (
    <a
      href="#"
      className={`block py-2.5 px-4 rounded transition duration-200 ${
        active ? "bg-red-500" : "hover:bg-gray-700"
      }`}
    >
      <i className={`${icon} mr-4`}></i>
      {text}
    </a>
  );
};

export default NavItem;
