"use client";
import { Button } from "@/component/ui/button";
import { Mail, Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<div>
			{/* set1 */}
			<div
				className="hidden md:flex flex-col md:flex-row text-white text-sm w-full space-between items-center justify-between py-2 md:px-62"
				style={{
					background: "linear-gradient(-40deg, #000 50%, #0f766e 50%)",
				}}
			>
				{/* Left side */}
				<div className="flex items-center gap-4 px-4 py-2">
					<div className="flex items-center gap-x-2">
						<Phone size={16} />
						<a href="tel:0503303771" className="">
							050 33 03771
						</a>
					</div>
					<div className="flex items-center gap-x-2">
						<Mail size={16} />
						<a
							href="mailto:airimarahtourismllc@gmail.com"
							className="text-center sm:text-left "
						>
							airimarahtourismllc@gmail.com
						</a>
					</div>
				</div>

				{/* Right side */}
				<div className="flex items-center gap-3 py-2">
					<a
						href="https://facebook.com/airimarahtourismllc"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Facebook"
					>
						<FaFacebookF
							size={25}
							className="bg-teal-700 hover:bg-teal-800 rounded-full p-[5px]"
						/>
					</a>
					<a
						href="https://twitter.com/airimarahtourismllc"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Twitter"
					>
						<FaTwitter
							size={25}
							className="bg-teal-700 hover:bg-teal-800 rounded-full p-[5px]"
						/>
					</a>
					<a
						href="https://youtube.com/@airimarahtourismllc"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="YouTube"
					>
						<FaYoutube
							size={25}
							className="bg-teal-700 hover:bg-teal-800 rounded-full p-[5px]"
						/>
					</a>
					<a
						href="https://instagram.com/airimarahtourismllc"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Instagram"
					>
						<AiFillInstagram
							size={25}
							className="bg-teal-700 hover:bg-teal-800 rounded-full p-[4px]"
						/>
					</a>
				</div>
			</div>

			{/* set2 */}
			<div className="sticky top-0 z-50 bg-white flex flex-col sm:flex-row items-center justify-between py-2 shadow md:px-62">
				{/* Branding */}
				<div className="self-start md:self-center">
					<a
						href="/"
						className="text-teal-700 font-semibold text-2xl ml-2 font-grotesk flex items-center gap-2"
					>
						<Image src="/logo.png" alt="Air Imarah" width={50} height={50} />
						Air Imarah
					</a>
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
					<a
						href="/"
						className="font-semibold "
						style={{ color: "rgba(108, 108, 108, 1)" }}
					>
						Home
					</a>
					<a href="/about" className="font-semibold shrink-0 ">
						About Us
					</a>
					<a href="/host" className="font-semibold shrink-0 ">
						Host A Venue
					</a>
					<a href="/hotels" className="font-semibold shrink-0 ">
						Hotels
					</a>
					<a href="/blog" className="font-semibold shrink-0 ">
						Blog
					</a>

					<a
						href="https://wa.me/971503303771"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Button className="bg-teal-700 hover:bg-teal-800 cursor-pointer rounded-full px-5 font-bold">
							Contact Us
							<span>
								<IoLogoWhatsapp />
							</span>
						</Button>
					</a>
				</div>
			</div>
		</div>
	);
}
