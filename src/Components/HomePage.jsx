import React from 'react'

function HomePage() {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 py-10 max-w-7xl mx-auto gap-10">
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
      <div className="flex-1 grid grid-cols-2 gap-4">
        <img src="/image1.png" alt="Trip" className="rounded-xl w-full h-48 object-cover" />
        <img src="/image2.png" alt="Beach" className="rounded-xl w-full h-48 object-cover" />
        <img src="/image3.png" alt="Hot air balloon" className="rounded-xl w-full h-48 object-cover col-span-2" />
      </div>
    </div>
  )
}

export default HomePage