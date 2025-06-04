import React from "react";
import Image from "next/image";

function Destinations() {
	return (
		<div className="text-center py-10 bg-gradient-to-b from-white to-blue-50">
			<p className="text-teal-500 italic mb-2">Best Places For Your Party</p>
			<h2 className="text-3xl font-bold mb-10">
				Place That Accommodates Your Guest
			</h2>

			{/* <div className="flex flex-wrap justify-center gap-6"> */}
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  px-4">
				<Image
					src="/images/image1.png"
					alt="Trip"
					className=" w-full object-cover h-72"
					width={500}
					height={300}
				/>
				<Image
					src="/images/image3.png"
					alt="Trip"
					className=" w-full  object-cover  h-72"
					width={500}
					height={300}
				/>
				<Image
					src="/images/image2.png"
					alt="Trip"
					className=" w-full  object-cover  h-72"
					width={500}
					height={300}
				/>
				<Image
					src="/images/image2.png"
					alt="Trip"
					className=" w-full  object-cover  h-72"
					width={500}
					height={300}
				/>
			</div>
			{/* </div> */}
		</div>
	);
}

export default Destinations;
