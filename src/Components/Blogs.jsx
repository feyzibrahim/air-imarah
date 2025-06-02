import React from 'react'




const destinations = [
  {
    image: '../images/image5.png',
    title: 'Some Amazing Title Here',
    desc: 'Lorem ipsum dolor sit amet, alina adipisci elite. Egestas elementum enim netus amet turpis lectus.',
  
  },
  {
    image: '/images/room2.jpg',
    title: 'Some Amazing Title Here',
    desc: 'Lorem ipsum dolor sit amet, alina adipisci elite. Egestas elementum enim netus amet turpis lectus.',
  
  },
  {
    image: '/images/room3.jpg',
    title: 'Some Amazing Title Here',
    desc: 'Lorem ipsum dolor sit amet, alina adipisci elite. Egestas elementum enim netus amet turpis lectus.',
   
  },
];

function Blogs() {
  return (
   <div className="text-center py-10 bg-gradient-to-b from-white to-blue-50">
      <p className="text-teal-500 italic mb-2">Best Places For Your Party</p>
      <h2 className="text-3xl font-bold mb-10">Place That Accommodates Your Guest</h2>

      <div className="flex flex-wrap justify-center gap-6">
        {destinations.map((d, i) => (
          <div
            key={i}
            className="bg-white shadow-lg rounded-xl overflow-hidden w-[300px] transition hover:scale-105"
          >
            <img src={d.image} alt="room" className="w-full h-48 object-cover" />
            <div className="p-5 text-left">
              <p className="text-gray-500 text-sm mb-4">{d.desc}</p>
              <div className="flex items-center text-sm text-gray-700 mb-4 space-x-4">
               <p>Read more</p>
               
              </div>
             
            </div>
          </div>
        ))}
      </div>

     
    </div>
  )
}

export default Blogs