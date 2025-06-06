import React from "react";
import Image from "next/image";
import { Button } from "@/component/ui/button";
import { Calendar, Send } from "lucide-react";
import { IoLogoWhatsapp } from "react-icons/io";

function HomePage() {
	return (
		<div
			className="flex flex-col-reverse lg:flex-row py-20 items-center justify-between max-w-5xl mx-auto gap-10"
			style={{
				backgroundImage: "url('/map-image.png')",
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
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

				<a
					href="https://wa.me/971503303771"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Button className="bg-teal-700 hover:bg-teal-800 cursor-pointer rounded-full px-5 font-bold">
						Talk to Our Team
						<span>
							<IoLogoWhatsapp />
						</span>
					</Button>
				</a>
			</div>

			{/* Right - Image Grid */}
			<div className="flex-1 relative flex justify-center items-center">
				{/* <div className="absolute top-1/2 left-1/2 h-40 w-40 bg-[#328687] rounded-full flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2">
					<svg
						width="160"
						height="160"
						viewBox="0 0 160 160"
						className="absolute"
						style={{ pointerEvents: "none" }}
					>
						<defs>
							<path
								id="circlePath"
								d="
        M80,25
        a55,55 0 1,1 0,110
        a55,55 0 1,1 0,-110"
							/>
						</defs>
						<text
							fill="#fff"
							fontSize="13"
							fontFamily="sans-serif"
							letterSpacing="2"
							textAnchor="middle"
						>
							<textPath href="#circlePath" startOffset="50%">
								{"Contact Now • ".repeat(3)}
							</textPath>
						</text>
					</svg>

					<div className="h-20 w-20 bg-white rounded-full flex items-center justify-center relative z-10">
						<Send className="text-teal-700" size={34} />
					</div>
				</div> */}
				<div className="flex items-center gap-5 w-fit p-5">
					<div className="space-y-5 flex-1">
						<Image
							src="/images/georgia.jpg"
							alt="Trip"
							className="rounded-xl w-50 h-56 object-cover"
							width={200}
							height={150}
						/>
						<Image
							src="/images/kazakhstan.jpg"
							alt="Trip"
							className="rounded-xl w-50 h-36 object-cover"
							width={200}
							height={150}
						/>
					</div>
					<Image
						src="/images/bali.jpg"
						alt="Trip"
						className="rounded-xl h-80 md:w-50 object-cover"
						width={200}
						height={150}
					/>
				</div>
			</div>
		</div>
	);
}

export default HomePage;
