import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold">Dashboard</h2>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <img
            src="https://storage.googleapis.com/a1aa/image/2M3u_--ahAnt3OvB8nPmzd38ddtKZFhQkiE4ZYPyRIM.jpg"
            alt="User"
            className="w-10 h-10 rounded-full"
          />
          <span>Zayuran</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
