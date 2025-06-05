"use client";

import { Carousel, CarouselContent, CarouselItem } from "@/component/ui/carousel";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const destinations = [
	{
		image: "/images/azerbaijan.jpg",
		title: "Azerbaijan",
		desc: "Where East meets West — explore Baku's futuristic skyline, ancient mosques, and the stunning landscapes of the Caucasus.",
	},
	{
		image: "/images/georgia-2.jpg",
		title: "Georgia",
		desc: "Discover the enchanting landscapes and rich history of Georgia, from the vibrant streets of Tbilisi to the majestic Caucasus Mountains.",
	},
	{
		image: "/images/kazakhstan-2.avif",
		title: "Kazakhstan",
		desc: "Experience the vast steppes and modern cities of Kazakhstan, where tradition meets innovation in a unique cultural blend.",
	},
	{
		image: "/images/malaysia.jpg",
		title: "Malaysia",
		desc: "Discover the diverse landscapes and rich cultural heritage of Malaysia, from the bustling streets of Kuala Lumpur to the serene beaches of Langkawi.",
	},
	{
		image: "/images/thailand.jpg",
		title: "Thailand",
		desc: "Immerse yourself in the vibrant culture and stunning scenery of Thailand, from the bustling markets of Bangkok to the tranquil beaches of Phuket.",
	},
	{
		image: "/images/bali.jpg",
		title: "Bali",
		desc: "Experience the tropical paradise of Bali, with its lush rice terraces, vibrant arts scene, and stunning beaches.",
	},
	{
		image: "/images/maldives.jpg",
		title: "Maldives",
		desc: "Relax in the idyllic Maldives, where crystal-clear waters and luxurious resorts create the perfect getaway.",
	},
];

export default function Packages() {
	const [current, setCurrent] = useState(0);
	const slidesToShow = 3;
	const totalSlides = destinations.length;

	// Auto-scroll every 3 seconds
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrent((prev) => (prev + 1) % totalSlides);
		}, 3000);
		return () => clearInterval(interval);
	}, []);

	const prevSlide = () => {
		setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);
	};

	const nextSlide = () => {
		setCurrent((prev) => (prev + 1) % totalSlides);
	};
	return (
		<div className="text-center py-10 bg-gradient-to-b from-blue-50 to-white">
			<p className="text-teal-500 italic mb-2 font-brush text-3xl">
				Top Destinations
			</p>
			<h2 className="text-3xl font-bold mb-10 font-grotesk">
				Popular Destination For Vacations
			</h2>
			<Carousel className="w-full max-w-6xl mx-auto">
				<CarouselContent
					className="flex transition-transform duration-700"
					style={{
						transform: `translateX(-${current * (100 / slidesToShow)}%)`, // 3 slides per view
					}}
				>
					{destinations.map((destination, index) => (
						<CarouselItem
							key={index}
							className="md:basis-1/2 lg:basis-1/3 flex-shrink-0"
							style={{ minWidth: "33.3333%" }}
						>
							<div className="p-1 bg-white rounded-lg border shadow-md mb-10">
								<div className="p-1">
									<Image
										src={destination.image}
										alt="Destination"
										className="w-full h-64 object-cover rounded-sm"
										width={500}
										height={300}
									/>
									<div className="p-2 text-left tex">
										<h3 className="text-lg font-semibold font-grotesk">
											{destination.title}
										</h3>
										<p className="text-sm text-gray-500 font-mulish">
											{destination.desc}
										</p>
									</div>
								</div>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>

			<div className="flex justify-center items-center mt-6">
				<div className="flex justify-center items-center gap-4 px-4 mt-6 rounded-full bg-white p-2 shadow-lg w-fit text-teal-800">
					<button
						onClick={prevSlide}
						aria-label="Previous Slide"
						className="cursor-pointer"
					>
						<ArrowLeft />
					</button>
					<button
						onClick={nextSlide}
						aria-label="Next Slide"
						className="cursor-pointer"
					>
						<ArrowRight />
					</button>
				</div>
			</div>
		</div>
	);
}
