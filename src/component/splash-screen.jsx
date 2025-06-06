"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function SplashScreen() {
	const [letters, setLetters] = useState([]);

	useEffect(() => {
		// Split the text into individual letters, preserving spaces
		const text = "Air Imarah";
		setLetters(text.split(""));
	}, []);

	return (
		<div className="fixed inset-0 flex flex-col items-center justify-center bg-[#338789] z-50 animate-fadeOut">
			<video
				src="/logo-animation.mov"
				autoPlay
				muted
				playsInline
				className="h-64 w-64 object-contain"
			/>
			<h1 className="font-black text-4xl text-white -mt-14 font-montserrat flex space-x-1">
				{letters.map((letter, index) => (
					<span
						key={index}
						className={`opacity-0 animate-fadeIn ${
							letter === " " ? "w-4" : ""
						}`}
						style={{ animationDelay: `${index * 0.1}s` }}
					>
						{letter === " " ? "\u00A0" : letter}
					</span>
				))}
			</h1>
		</div>
	);
}
