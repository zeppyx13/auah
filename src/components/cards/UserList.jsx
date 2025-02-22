import React from "react";

const UserList = () => {
  const users = [
    {
      username: "bagusuapadana",
      name: "Bagus Upadana",
      email: "gusdeupadana16@gmail.com",
    },
    {
      username: "Vitoruzz",
      name: "Vitoruzz",
      email: "ivanjayadi2005@gmail.com",
    },
    { username: "Subagla", name: "Subagla", email: "subagla08@gmail.com" },
    { username: "indra", name: "Indra", email: "indrasaguna05@gmail.com" },
    {
      username: "Sung Rue",
      name: "Sung Rue",
      email: "gemahotono338@gmail.com",
    },
    { username: "Zephyrus", name: "Zephyrus", email: "gn.nanda@gmail.com" },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {users.map((user, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded-lg shadow flex items-center"
        >
          <img
            src="https://storage.googleapis.com/a1aa/image/2M3u_--ahAnt3OvB8nPmzd38ddtKZFhQkiE4ZYPyRIM.jpg"
            alt="User"
            className="w-12 h-12 rounded-full"
          />
          <div className="ml-4">
            <p className="text-gray-600">
              User: <span className="font-bold">{user.username}</span>
            </p>
            <p className="text-gray-600">
              Name: <span className="font-bold">{user.name}</span>
            </p>
            <p className="text-gray-600">
              Email: <span className="font-bold">{user.email}</span>
            </p>
          </div>
          <button className="ml-auto text-blue-500">Detail</button>
        </div>
      ))}
    </div>
  );
};

export default UserList;
