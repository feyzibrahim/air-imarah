"use client";
import React, { useState } from "react";
import {
	Phone,
	Mail,
	Facebook,
	Twitter,
	Youtube,
	Instagram,
	Menu,
	X,
	PhoneCall,
} from "lucide-react";
import { Button } from "../components/ui/button";

function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<div>
			{/* set1 */}
			<div
				className="flex flex-col md:flex-row text-white text-sm w-full space-between items-center justify-between py-2 px-62"
				style={{
					background: "linear-gradient(-40deg, #000 50%, #0f766e 50%)",
				}}
			>
				{/* Left side */}
				<div className="flex items-center gap-4 px-4 py-2">
					<div className="flex items-center gap-x-2">
						<Phone size={16} />
						<p>050 33 03771</p>
					</div>
					<div className="flex items-center gap-x-2">
						<Mail size={16} />
						<p className="text-center sm:text-left">
							airimarahtourismllc@gmail.com
						</p>
					</div>
				</div>

				{/* Right side */}
				<div className="flex items-center gap-x-3 px-4 py-2">
					<Facebook
						size={25}
						className="bg-white text-teal-700 rounded-full p-1"
					/>
					<Twitter
						size={25}
						className="bg-white text-teal-700 rounded-full p-1"
					/>
					<Youtube
						size={25}
						className="bg-white text-teal-700 rounded-full p-1"
					/>
					<Instagram
						size={25}
						className="bg-white text-teal-700 rounded-full p-1"
					/>
				</div>
			</div>

			{/* set2 */}
			<div className="sticky top-0 z-50 bg-white flex flex-col sm:flex-row items-center justify-between py-2 shadow px-62">
				{/* Branding */}
				<div className="self-start md:self-center">
					<p className="text-teal-700 font-semibold text-2xl md:ml-2 font-grotesk">
						Air Imarah
					</p>
				</div>

				{/* Hamburger for mobile */}
				<div className="sm:hidden absolute right-5 top-1/2 -translate-y-1/2">
					<button
						onClick={() => setMenuOpen(!menuOpen)}
						aria-label="Toggle menu"
					>
						{menuOpen ? <X size={28} /> : <Menu size={28} />}
					</button>
				</div>

				{/* Navigation Menu */}
				<div
					className={`
                        flex-col sm:flex-row items-start md:items-center justify-center gap-10 px-4 py-2 w-full sm:w-1/2
                        bg-white sm:bg-transparent absolute sm:static left-0 top-full sm:top-auto z-20
                        ${menuOpen ? "flex" : "hidden"} sm:flex
                        shadow-md sm:shadow-none text-sm
                    `}
				>
					<p
						className="font-semibold"
						style={{ color: "rgba(108, 108, 108, 1)" }}
					>
						Home
					</p>
					<p className="font-semibold shrink-0">About Us</p>
					<p className="font-semibold shrink-0">Host A Venue</p>
					<p className="font-semibold shrink-0">Hotels</p>
					<p className="font-semibold shrink-0">Blog</p>
					<Button className="bg-teal-700 rounded-full px-5 font-bold">
						Contact Us
						<span>
							<PhoneCall />
						</span>
					</Button>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
