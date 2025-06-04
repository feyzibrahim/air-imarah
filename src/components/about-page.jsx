import React from "react";
import Image from "next/image";
import Link from "next/link";

function AboutPage() {
	return (
		<div className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 py-10 max-w-7xl mx-auto gap-10 pt-8">
			{/* Right - Image Grid */}
			<div className="flex-1 grid grid-cols-2 gap-4 pt-14">
				<Image
					src="/images/image1.png"
					alt="Trip"
					className="rounded-xl w-full h-56 object-cover"
					width={500}
					height={300}
				/>
				<Image
					src="/images/image3.png"
					alt="Trip"
					className="rounded-xl w-full h-60 object-cover"
					width={500}
					height={300}
				/>
				<Image
					src="/images/image2.png"
					alt="Trip"
					className="rounded-xl w-full h-36 object-cover"
					width={500}
					height={300}
				/>
			</div>

			{/* Left - Text Content */}
			<div className="flex-1 text-center lg:text-left">
				<p className="italic text-sm md:text-xl text-gray-500 mb-2 font-brush">
					About Us
				</p>
				<h1 className="text-3xl md:text-4xl font-semibold leading-tight mb-4">
					More About Travelsy
				</h1>
				<p style={{ color: "rgba(108, 108, 108, 1)" }}>
					At Air Imarah, we are dedicated to crafting exceptional travel
					experiences that cater to the diverse needs of our clients. Based in
					Dubai, UAE, we specialize in providing comprehensive travel and tour
					services, ensuring seamless journeys and unforgettable memories.
				</p>

				<p style={{ color: "rgba(108, 108, 108, 1)" }} className="pt-3">
					Our team of passionate travel professionals is committed to delivering
					personalized solutions, from curated tour packages to efficient travel
					arrangements. We strive to exceed expectations by offering reliable,
					customer-centric services that reflect our deep understanding of the
					travel industry.
				</p>
				<p style={{ color: "rgba(108, 108, 108, 1)" }} className="pt-3">
					Whether you're seeking adventure, relaxation, or cultural exploration,
					Air Imarah is your trusted partner in discovering the world.
				</p>

				<div className="pt-8">
					<Link
						href="/about"
						className="bg-teal-700  text-white px-6 py-2 rounded-full flex items-center gap-2 mx-auto lg:mx-0 hover:bg-teal-800 transition"
					>
						Read more
					</Link>
				</div>
			</div>
		</div>
	);
}

export default AboutPage;
