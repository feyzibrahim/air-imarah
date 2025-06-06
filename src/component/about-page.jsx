import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io";
import { Button } from "./ui/button";

function AboutPage() {
	return (
		<div className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 py-10 max-w-7xl mx-auto gap-10 pt-8">
			{/* Right - Image Grid */}
			{/* <div className="flex-1 flex justify-center gap-4 pt-14">
				<div className="w-72 p-2 bg-white shadow-2xl rounded-full">
					<Image
						src="/images/close-up-people-holding-map.jpg"
						alt="Trip"
						className="rounded-full h-full w-full object-cover"
						width={500}
						height={300}
					/>
				</div>
				<div className="space-y-4">
					<div className="p-2 bg-white shadow-2xl rounded-full">
						<Image
							src="/images/top-view-passport-tickets-arrangement.jpg"
							alt="Trip"
							className="rounded-full w-full object-cover"
							width={100}
							height={80}
						/>
					</div>
					<div className="p-2 bg-white shadow-2xl rounded-full">
						<Image
							src="/images/selective-focus-miniature-tourist-compass-map-with-plastic-toy-airplane-abstract-background-travel-concept.jpg"
							alt="Trip"
							className="rounded-full w-full object-cover"
							width={100}
							height={100}
						/>
					</div>
				</div>
			</div> */}

			<div className="flex  items-center gap-5 w-fit p-5">
				<Image
					src="/images/selective-focus-miniature-tourist-compass-map-with-plastic-toy-airplane-abstract-background-travel-concept.jpg"
					alt="Trip"
					className="rounded-xl h-80 w-50 md:w-50 object-cover"
					width={500}
					height={150}
				/>

				<div className="space-y-5 flex-1">
					<Image
						src="/images/close-up-people-holding-map.jpg"
						alt="Trip"
						className="rounded-xl w-50 h-56 object-cover"
						width={500}
						height={150}
					/>
					<Image
						src="/images/top-view-passport-tickets-arrangement.jpg"
						alt="Trip"
						className="rounded-xl w-50 h-36 object-cover"
						width={200}
						height={150}
					/>
				</div>
			</div>

			{/* Left - Text Content */}
			<div className="flex-1 text-center lg:text-left">
				<p className="italic text-sm md:text-xl text-gray-500 mb-2 font-brush">
					About Us
				</p>
				<h1 className="text-3xl md:text-4xl font-semibold leading-tight mb-4 font-grotesk">
					More About Air Imarah
				</h1>
				<p style={{ color: "rgba(108, 108, 108, 1)" }} className="font-mulish">
					At Air Imarah, we are dedicated to crafting exceptional travel
					experiences that cater to the diverse needs of our clients. Based in
					Dubai, UAE, we specialize in providing comprehensive travel and tour
					services, ensuring seamless journeys and unforgettable memories.
				</p>

				<p
					style={{ color: "rgba(108, 108, 108, 1)" }}
					className="pt-3 font-mulish"
				>
					Our team of passionate travel professionals is committed to delivering
					personalized solutions, from curated tour packages to efficient travel
					arrangements. We strive to exceed expectations by offering reliable,
					customer-centric services that reflect our deep understanding of the
					travel industry.
				</p>
				<p
					style={{ color: "rgba(108, 108, 108, 1)" }}
					className="pt-3 font-mulish"
				>
					Whether you're seeking adventure, relaxation, or cultural exploration,
					Air Imarah is your trusted partner in discovering the world.
				</p>

				<a
					href="https://wa.me/971503303771"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Button className="bg-teal-700 mt-10 hover:bg-teal-800 cursor-pointer rounded-full px-5 font-bold">
						Get in Touch
						<span>
							<IoLogoWhatsapp />
						</span>
					</Button>
				</a>
			</div>
		</div>
	);
}

export default AboutPage;
