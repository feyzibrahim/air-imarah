import React from 'react'
import { Phone } from 'lucide-react';





const destinations = [
  {
  icon: <Phone size={16} />,
    title: '100+',
   Subtitle:"heal"
  },
  {
  icon: <Phone size={16} />,
    title: '100+',
   Subtitle:"heal"
  },
  {
  icon: <Phone size={16} />,
    title: '100+',
   Subtitle:"heal"
  },

   {
  icon: <Phone size={16} />,
    title: '100+',
   Subtitle:"heal"
  },
];

function Users() {
  return (
    <div className="text-center py-10">
      <div className="flex flex-wrap justify-center gap-6">
        {destinations.map((d, i) => (
          <div
            key={i}
            className="bg-white shadow-lg rounded-xl overflow-hidden w-[200px] p-5 transition hover:scale-105 flex flex-col items-center text-center space-y-2"
          >
            <div className="text-white bg-teal-800 p-5 rounded-3xl">{d.icon}</div>
            <h3 className="font-semibold text-xl">{d.title}</h3>
            <p className="text-gray-500 text-sm">{d.Subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Users