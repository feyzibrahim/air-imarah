import React from 'react'
import Image from 'next/image';
import img1 from '../images/image1.png';
import img2 from '../images/image2.png';
import img3 from '../images/image3.png'


function Destinations() {
  return (
  <div className="text-center py-10 bg-gradient-to-b from-white to-blue-50">
      <p className="text-teal-500 italic mb-2">Best Places For Your Party</p>
      <h2 className="text-3xl font-bold mb-10">Place That Accommodates Your Guest</h2>

      {/* <div className="flex flex-wrap justify-center gap-6"> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  px-4">
                <Image src={img1} alt="Trip" className=" w-full object-cover h-72" />
                 <Image src={img3} alt="Trip" className=" w-full  object-cover  h-72" />
                <Image src={img2} alt="Trip" className=" w-full  object-cover  h-72"  />  
                   <Image src={img2} alt="Trip" className=" w-full  object-cover  h-72"  />  
              </div>
      {/* </div> */}

     
    </div>
  )
}

export default Destinations