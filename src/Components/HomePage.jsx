import React from 'react'
import Image from 'next/image';
import img1 from '../images/image1.png';
import img2 from '../images/image2.png';
import img3 from '../images/image3.png'

function HomePage() {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 py-10 max-w-7xl mx-auto gap-10 pt-8">
      {/* Left - Text Content */}
      <div className="flex-1 text-center lg:text-left">
        <p className="italic text-sm md:text-base text-gray-500 mb-2">Relax & Enjoy the Vacation</p>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
          Fly <span className="text-teal-600">Beyond</span> Your <br /> Limits
        </h1>
        <p className="text-gray-600 mb-6">Tours, tickets & travel dreams made real!</p>
        <button className="bg-teal-700 text-white px-6 py-2 rounded-full flex items-center gap-2 mx-auto lg:mx-0 hover:bg-teal-800 transition">
          Talk to Our Team 
        </button>
      </div>

      {/* Right - Image Grid */}
      <div className="flex-1 grid grid-cols-2 gap-4 pt-14">
        <Image src={img1} alt="Trip" className="rounded-xl w-full h-56 object-cover" />
         <Image src={img3} alt="Trip" className="rounded-xl w-full h-60 object-cover" />
        <Image src={img2} alt="Trip" className="rounded-xl w-full h-36 object-cover"  />  
      </div>
    </div>
  )
}

export default HomePage