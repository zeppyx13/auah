import React from "react";

const Statchart = () => {
  const charts = [
    {
      img: "https://storage.googleapis.com/a1aa/image/YuconUspJ3OmpAe1Wsz8JkYBPGkU6oohKMDwfC1yFGk.jpg",
      title: "Nongkrong",
      desc: "Total tempat nongkrong setiap bulan nya.",
    },
    {
      img: "https://storage.googleapis.com/a1aa/image/fRJW-ymZ1zSf971bzFMz43EB98BHcWS3zO1csryvZ6s.jpg",
      title: "Tempat di kunjungi",
      desc: "Tempat tempat yang di kunjungi",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
      {charts.map((chart, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow">
          <img
            src={chart.img}
            alt={chart.title}
            className="w-full h-48 object-cover rounded"
          />
          <p className="mt-4 text-gray-600">{chart.title}</p>
          <p className="text-gray-400">{chart.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Statchart;
