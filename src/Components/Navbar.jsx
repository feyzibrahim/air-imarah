import React from "react";
import { Phone, Mail, Facebook, Twitter, Youtube, Instagram } from 'lucide-react';
import { Button } from "./ui/button";

function Navbar() {
  return (
     

    <div>
      {/* set1 */}
      <div className="flex flex-col md:flex-row text-white text-sm w-full">
      {/* Left side */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 py-2 bg-teal-700 w-full md:w-1/2">
        <div className="flex items-center gap-x-2">
          <Phone size={16} />
          <p>050 33 03771</p>
        </div>
        <div className="flex items-center gap-x-2">
          <Mail size={16} />
          <p className="text-center sm:text-left">airimarahtourismllc@gmail.com</p>
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center justify-center gap-x-3 px-4 py-2 bg-black w-full md:w-1/2">
        <Facebook size={25} className="bg-white text-teal-700 rounded-full p-1" />
        <Twitter size={25} className="bg-white text-teal-700 rounded-full p-1" />
        <Youtube size={25} className="bg-white text-teal-700 rounded-full p-1" />
        <Instagram size={25} className="bg-white text-teal-700 rounded-full p-1" />
      </div>
    </div>

    {/* set2 */}
  <div className="flex flex-col sm:flex-row items-center justify-center  px-5 py-2">
  {/* Branding */}
  <div className="self-start md:self-center">
    <p className="text-teal-700 font-semibold text-2xl md:ml-2">Air Imarah</p>
  </div>

  {/* Navigation Menu */}
  <div className="flex items-center justify-center gap-10 px-4 py-2 w-full md:w-1/2">
    <p className=" font-semibold " style={{color:'rgba(108, 108, 108, 1)'}}>Home</p>
    <p className=" font-semibold ">About Us</p>
    <p className=" font-semibold ">Host A Venue</p>
    <p className=" font-semibold ">Hotels</p>
    <p className=" font-semibold ">Blog</p>
    <Button className="p-4 bg-teal-700 rounded-md">Contact Us</Button>
  </div>
</div>
    </div>
 

  );
}

export default Navbar;
