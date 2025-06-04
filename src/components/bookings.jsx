import React from "react";
import Image from "next/image";

function Booking() {
	return (
		<div className="relative w-full h-96">
			<Image
				src="/images/image7.png"
				alt="Trip"
				className="object-cover rounded-xl"
				width={500}
				height={300}
			/>

			{/* Centered content */}
			<div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
				<h2 className="text-2xl md:text-4xl font-bold mb-2">
					Are You Ready To Travel? Remember Us !!
				</h2>
				<p className="text-base md:text-lg mb-4">
					Book your perfect destination now and enjoy exclusive offers.
				</p>
				<button className="bg-white text-cyan-950 py-2 px-5 rounded-full text-sm font-semibold">
					Book Now
				</button>
			</div>
		</div>
	);
}

export default Booking;
