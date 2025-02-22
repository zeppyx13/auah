import React from "react";

const Infocard = () => {
  const stats = [
    {
      icon: "fas fa-map-marker-alt text-black",
      label: "Total Tempat",
      value: "13",
    },
    {
      icon: "fas fa-camera text-pink-500",
      label: "Total Belum Dibayar",
      value: "Rp. 1.348.000",
    },
    {
      icon: "fas fa-building text-green-500",
      label: "Total Dibayar",
      value: "Rp. 190.000",
    },
    {
      icon: "fas fa-wallet text-blue-500",
      label: "Total Pengeluaran",
      value: "Rp. 1.538.000",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded-lg shadow flex items-center"
        >
          <i className={`${stat.icon} text-3xl`}></i>
          <div className="ml-4">
            <p className="text-gray-600">{stat.label}</p>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Infocard;
