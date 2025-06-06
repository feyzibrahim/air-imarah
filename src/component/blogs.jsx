"use client";
import { useState } from "react";
import React from "react";
import { Button } from "./ui/button";

const destinations = [
	{
		image: "/testimonials/muammed-Uvais.jpeg",
		title: "Muhammed Uvais",
		desc: "5 days Kashmir trip with AIR EMARAT was flawless!! From shikara rides to Gulmarg skies, they tailored our itinerary perfectly.",
	},
	{
		image: "/testimonials/shabeeb.jpeg",
		title: "Shabeeb Maloof",
		desc: "So happy that I chose Air Emarat for my honeymoon trip to Bali, Indonesia. From sea beaches to vibrant cultures, our itinerary was great!",
	},
	{
		image: "/testimonials/NAYIF.jpeg",
		title: "Nayif Muhammed",
		desc: "Air Emarat demonstrated exceptional expertise in arranging our company’s business trip to china. From flights to accommodation, everything was perfect!",
	},
	{
		image: "/testimonials/NABEEL.jpg",
		title: "Nabeel",
		desc: "Dreamy honeymoon!! Thank you AIR EMARAT For making our Maldives gateway unforgettable. We loved it!!",
	},
	{
		image: "/testimonials/shaheel.jpeg",
		title: "Shaheel Ahmed",
		desc: "Unforgettable Thai adventure, thankyou air Emarat! ♥️ you guys exceeded our expectations! Our honeymoon was perfect!!!",
	},
	{
		image: "/testimonials/mishab.jpeg",
		title: "Mishab",
		desc: "Our honeymoon in Almaty, Kazakhstan was absolute bliss, thanks to AIR EMARAT. Exceptional service!!",
	},
	{
		image: "/testimonials/jareed.jpeg",
		title: "Jareed",
		desc: "Majestic pyramids, mesmerizing Nile cruise!! Happy choosing air Emarat for my long-waited Egypt trip. They delivered exceptional service.",
	},
];

export default function Blogs() {
	const perRow = 3;
	const [rows, setRows] = useState(1);
	const totalRows = Math.ceil(destinations.length / perRow);

	const handleShowMore = () => {
		if (rows < totalRows) setRows(rows + 1);
	};

	const visibleTestimonials = destinations.slice(0, rows * perRow);

	return (
		<div className="flex flex-col items-center text-center py-10 bg-gradient-to-b from-white to-blue-50 pb-40">
			<p className="text-teal-500 italic mb-2 font-brush text-2xl">Testimonials</p>
			<h2 className="text-3xl font-bold mb-10 font-grotesk">
				What Our Clients Say
			</h2>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
				{visibleTestimonials.map((d, i) => (
					<div
						key={i}
						className="bg-white cursor-pointer shadow-lg rounded-xl overflow-hidden w-[275px] transition hover:scale-105 mx-auto"
					>
						<img
							src={d.image}
							alt="room"
							className="w-full h-48 object-cover"
						/>
						<div className="p-5 text-left">
							<h1 className="text-gray-500 text-lg mb-4 font-bold font-grotesk">
								{d.title}
							</h1>
							<p className="text-gray-500 text-sm mb-4">{d.desc}</p>
						</div>
					</div>
				))}
			</div>
			<div className="flex gap-4">
				<Button
					onClick={handleShowMore}
					disabled={rows >= totalRows}
					className="bg-teal-800 hover:bg-teal-700 cursor-pointer rounded-full px-5 font-bold"
				>
					Show More
				</Button>
			</div>
		</div>
	);
}
