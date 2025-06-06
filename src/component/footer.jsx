import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { GoClockFill } from "react-icons/go";
import { MdMail } from "react-icons/md";
import Contact from "./contact";
import SocialMedia from "./social-media";

export default function Footer() {
	return (
		<div className="relative md:pt-20 pb-20 bg-gradient-to-b from-white to-blue-50">
			<Contact />

			<div className="max-w-7xl mx-auto px-4">
				<div className="flex flex-col md:flex-row justify-between gap-8">
					{/* Logo & Description */}
					<div className="flex-1">
						<p className="text-xl font-bold mb-2">Air Imarah</p>
						<p className="text-gray-600">Fly Beyond Your Limits</p>
						<SocialMedia />
					</div>

					{/* Quick Links */}
					<div className="flex-1">
						<p className="text-lg font-semibold mb-2">Quick Links</p>
						<ul className="text-gray-700 space-y-1">
							<li>
								<a href="/" className="hover:opacity-70 ">
									Home
								</a>
							</li>
							<li>
								<a
									href="#about-us"
									className="hover:opacity-70 shrink-0 "
								>
									About Us
								</a>
							</li>
							<li>
								<a href="#popular" className="hover:opacity-70 shrink-0 ">
									Popular Destinations
								</a>
							</li>
							<li>
								<a
									href="#services"
									className="hover:opacity-70 shrink-0 "
								>
									Services
								</a>
							</li>
							<li>
								<a
									href="#testimonials"
									className="hover:opacity-70 shrink-0 "
								>
									Testimonials
								</a>
							</li>
						</ul>
					</div>

					{/* Get in Touch */}
					<div className="flex-1">
						<p className="text-lg font-semibold mb-2">Get in Touch</p>
						<ul className="text-gray-700 space-y-2">
							<li className="flex items-start gap-3 ">
								<MdMail
									className="bg-teal-700 hover:bg-teal-800 rounded-full p-[5px] text-white shrink-0"
									size={25}
								/>
								airimarahtourismllc@gmail.com
							</li>
							<li className="flex items-start gap-3 ">
								<FaPhone
									className="bg-teal-700 hover:bg-teal-800 rounded-full p-[5px] text-white shrink-0"
									size={25}
								/>{" "}
								050 33 03771
							</li>
							<li className="flex items-start gap-3 ">
								<FaMapMarkerAlt
									className="bg-teal-700 hover:bg-teal-800 rounded-full p-[5px] text-white shrink-0"
									size={25}
								/>{" "}
								M 119 E, Fast Business Building Al Qusais 2, Near Al Tawar
								Center Dubai
							</li>
							<li className="flex items-start gap-3 ">
								<GoClockFill
									className="bg-teal-700 hover:bg-teal-800 rounded-full p-[5px] text-white shrink-0"
									size={25}
								/>{" "}
								Mon–Fri, 9AM–6PM
							</li>
						</ul>
					</div>

					{/* Instagram */}
					<div className="flex-1">
						<p className="text-lg font-semibold mb-2">
							Follow us on{" "}
							<a
								href="https://instagram.com/airimarah"
								className="hover:underline"
								target="_blank"
							>
								Instagram
							</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
