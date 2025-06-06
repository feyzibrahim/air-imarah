"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const images = [
	{
		image: "/images/3d-icon-traveling-vacation.jpg",
		title: "Tour Packages",
		description: "Explore our exclusive tour packages.",
	},
	{
		image: "/images/top-view-travel-elements-collection.jpg",
		title: "Ticket Booking",
		description: "Book your tickets with ease and convenience.",
	},
	{
		image: "/images/10811.jpg",
		title: "Hotel Booking",
		description: "Find the perfect hotel for your stay.",
	},
	{
		image: "/images/visa-application-form-composition.jpg",
		title: "Visa Stamping",
		description: "Get your visa stamped hassle-free.",
	},
	{
		image: "/images/man-preparing-travel.jpg",
		title: "Passport service",
		description: "Get your passport processed quickly and easily.",
	},
	{
		image: "/images/physician-noting-down-symptoms-patient.jpg",
		title: "Medical registration",
		description: "Get your medical registration done with ease.",
	},
	// Add more images if you want
];

const VISIBLE_COUNT = 4;

export default function Destinations() {
	const [current, setCurrent] = useState(0);

	// Auto-scroll every 3 seconds
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrent((prev) => (prev + 1) % images.length);
		}, 3000);
		return () => clearInterval(interval);
	}, []);

	const prevSlide = () => {
		setCurrent((prev) => (prev - 1 + images.length) % images.length);
	};

	const nextSlide = () => {
		setCurrent((prev) => (prev + 1) % images.length);
	};

	return (
		<div className="text-center py-10 bg-gradient-to-b from-blue-50 to-white">
			<p className="text-teal-500 italic mb-2 font-brush text-2xl">Services</p>
			<h2 className="text-3xl font-bold mb-10 font-grotesk">
				Tours & Travel Services
			</h2>

			<div className="relative w-full mx-auto overflow-hidden h-72">
				<div
					className="flex transition-transform duration-700"
					style={{
						width: `${(images.length / VISIBLE_COUNT) * 100}%`,
						transform: `translateX(-${current * (100 / images.length)}%)`,
					}}
				>
					{images.concat(images.slice(0, VISIBLE_COUNT)).map((img, idx) => (
						<div
							key={idx}
							// style={{ width: `${100 / images.length}%` }}
							className="h-72 relative flex-shrink-0"
						>
							<div className="absolute text-left bottom-5 left-5 bg-white p-2 w-[90%] rounded-lg shadow-lg z-10">
								<h1 className="font-semibold">{img.title}</h1>
								<p className="text-gray-600 text-xs">{img.description}</p>
							</div>
							<Image
								src={img.image}
								alt={`Trip ${idx + 1}`}
								className="w-full h-72 object-cover"
								width={500}
								height={300}
								priority={idx === current}
							/>
						</div>
					))}
				</div>
			</div>
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
