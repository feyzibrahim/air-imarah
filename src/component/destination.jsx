"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const images = [
	"/images/image1.png",
	"/images/image2.png",
	"/images/image3.png",
	"/images/image5.png",
	"/images/image7.png",
	"/images/imag4.png",
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
			<p className="text-teal-500 italic mb-2 font-brush text-2xl">
				Best Places For Your Party
			</p>
			<h2 className="text-3xl font-bold mb-10 font-grotesk">
				Place That Accommodates Your Guest
			</h2>

			<div className="relative w-full mx-auto overflow-hidden h-72">
				<div
					className="flex transition-transform duration-700"
					style={{
						width: `${(images.length / VISIBLE_COUNT) * 100}%`,
						transform: `translateX(-${current * (100 / images.length)}%)`,
					}}
				>
					{images.concat(images.slice(0, VISIBLE_COUNT)).map((src, idx) => (
						<div
							key={idx}
							style={{ width: `${100 / images.length}%` }}
							className="h-72 relative flex-shrink-0"
						>
							<Image
								src={src}
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
