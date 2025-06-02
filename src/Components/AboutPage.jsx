import React from 'react'
import Image from 'next/image';
import img1 from '../images/image1.png';
import img2 from '../images/image2.png';
import img3 from '../images/image3.png'

function AboutPage() {
  return (
  <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 py-10 max-w-7xl mx-auto gap-10 pt-8">


   {/* Right - Image Grid */}
       <div className="flex-1 grid grid-cols-2 gap-4 pt-14">
          <Image src={img1} alt="Trip" className="rounded-xl w-full h-56 object-cover" />
           <Image src={img3} alt="Trip" className="rounded-xl w-full h-60 object-cover" />
          <Image src={img2} alt="Trip" className="rounded-xl w-full h-36 object-cover"  />  
        </div>


        {/* Left - Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <p className="italic text-sm md:text-base text-gray-500 mb-2">Get About Us</p>
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight mb-4">
          More About Travelsy
          </h1>
          <p style={{color:"rgba(108, 108, 108, 1)"}}>Amet cursus sit amet dictum. At erat pellentesque adipiscing commodo. Sit amet volutpat consequat mauris nunc congue nisi vitae suscipit. In arcu cursus euismod quis viverra nibh cras pulvinar. Vulputate eu sceler felis imperdiet proin fermentum. Arcu vitae elementum curabitur vitae nunc sed velit.</p>

           <p style={{color:"rgba(108, 108, 108, 1)"}} className='pt-3'>Rutrum quisque non tellus orci ac. Varius vel pharetra vel turpis nunc eget lorem dolor sed. Interdum posuere lorem ipsum dolor sit. Egestas maecenas pharetra convallis posuere morbi.</p>
           
           <div className='pt-3' style={{fontWeight:600,color:"rgba(0, 0, 0, 1)",fontWeight:"16px"}}>
          <p>Donec adipiscing tristique risus nec feugiat in</p>
           <p>Donec adipiscing tristique risus nec feugiat in</p>
           <p>Donec adipiscing tristique risus nec feugiat in</p>
           </div>
          
          <div className='pt-8'>
               <button className="bg-teal-700  text-white px-6 py-2 rounded-full flex items-center gap-2 mx-auto lg:mx-0 hover:bg-teal-800 transition">
           Read more
          </button>
          </div>
        
        </div>
  
     
       
      </div>
  )
}

export default AboutPage