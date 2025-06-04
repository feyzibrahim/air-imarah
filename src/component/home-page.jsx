import React from "react";
import Image from "next/image";
import { Button } from "../components/ui/button";
import { Calendar } from "lucide-react";

function HomePage() {
	return (
		<div className="flex flex-col-reverse lg:flex-row py-20 items-center justify-between max-w-5xl mx-auto gap-10">
			{/* Left - Text Content */}
			<div className="flex-1 text-center lg:text-left">
				<p className="italic text-sm md:text-xl text-gray-500 mb-2 font-brush">
					Relax & Enjoy the Vacation
				</p>
				<h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 font-grotesk">
					Fly <span className="text-teal-600">Beyond</span> Your <br /> Limits
				</h1>
				<p className="text-gray-600 mb-6">
					Tours, tickets & travel dreams made real!
				</p>
				<Button className="bg-teal-700 text-xs font-bold text-white px-6 py-2 rounded-full flex items-center gap-2 mx-auto lg:mx-0 hover:bg-teal-800 transition">
					Talk to Our Team
					<span>
						<Calendar />
					</span>
				</Button>
			</div>

			{/* Right - Image Grid */}
			<div className="flex-1 ">
				<div className="flex items-center gap-5 w-fit">
					<div className="space-y-5 flex-1">
						<Image
							src="/images/image1.png"
							alt="Trip"
							className="rounded-xl w-50 h-56 object-cover"
							width={200}
							height={150}
						/>
						<Image
							src="/images/image2.png"
							alt="Trip"
							className="rounded-xl w-50 h-36 object-cover"
							width={200}
							height={150}
						/>
					</div>
					<Image
						src="/images/image3.png"
						alt="Trip"
						className="rounded-xl h-80 w-50 object-cover"
						width={200}
						height={150}
					/>
				</div>
			</div>
		</div>
	);
}

export default HomePage;
