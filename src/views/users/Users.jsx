import React from "react";
import Sidebar from "../../components/navbar/Sidebar";
import Header from "../../components/navbar/Header";
import Infocard from "../../components/cards/Infocard";
import Statchart from "../../components/cards/Statchart";
import UserList from "../../components/cards/UserList";

const Users = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-100 min-h-screen">
        <Header />
        <Infocard />
        <Statchart />
        <UserList />
      </div>
    </div>
  );
};

export default Users;
