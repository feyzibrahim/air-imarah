import React from 'react'
// import { FaMapMarkerAlt, FaUser, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
// import img5 from '../images/'
import Image from 'next/image';



const destinations = [
  {
    image: '../images/image5.png',
    title: 'Some Amazing Title Here',
    desc: 'Lorem ipsum dolor sit amet, alina adipisci elite. Egestas elementum enim netus amet turpis lectus.',
    price: 150,
    capacity: 12,
  },
  {
    image: '/images/room2.jpg',
    title: 'Some Amazing Title Here',
    desc: 'Lorem ipsum dolor sit amet, alina adipisci elite. Egestas elementum enim netus amet turpis lectus.',
    price: 250,
    capacity: 18,
  },
  {
    image: '/images/room3.jpg',
    title: 'Some Amazing Title Here',
    desc: 'Lorem ipsum dolor sit amet, alina adipisci elite. Egestas elementum enim netus amet turpis lectus.',
    price: 280,
    capacity: 24,
  },
];

function Packages() {
  return (


 <div className="text-center py-10 bg-gradient-to-b from-white to-blue-50">
      <p className="text-teal-500 italic mb-2">Top Destinations</p>
      <h2 className="text-3xl font-bold mb-10">Popular Destination For Vacations</h2>

      <div className="flex flex-wrap justify-center gap-6">
        {destinations.map((d, i) => (
          <div
            key={i}
            className="bg-white shadow-lg rounded-xl overflow-hidden w-[300px] transition hover:scale-105"
          >
            <img src={d.image} alt="room" className="w-full h-48 object-cover" />
            <div className="p-5 text-left">
              <h3 className="font-semibold text-lg mb-2">{d.title}</h3>
              <p className="text-gray-500 text-sm mb-4">{d.desc}</p>
              <div className="flex items-center text-sm text-gray-700 mb-4 space-x-4">
                <div className="flex items-center space-x-1">
                  {/* <FaMapMarkerAlt className="text-teal-600" /> */}
                  <span>Museums</span>
                </div>
                <div className="flex items-center space-x-1">
                  {/* <FaUser className="text-teal-600" /> */}
                  <span>{d.capacity} Person Capacity</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold">${d.price}<span className="text-sm font-normal">/Per Night</span></span>
                <button className="bg-teal-600 text-white p-2 rounded-full hover:bg-teal-700">
                  {/* <FaArrowRight /> */}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <div className="mt-10 flex justify-center space-x-4">
        <button className="p-3 bg-white rounded-full shadow-md hover:bg-gray-100">
          {/* <FaArrowLeft /> */}
        </button>
        <button className="p-3 bg-white rounded-full shadow-md hover:bg-gray-100">
          {/* <FaArrowRight /> */}
        </button>
      </div>
    </div>




  )
}


export default Packages