import { FiMail, FiPhone, FiMapPin, FiClock } from "react-icons/fi"; // Import icons
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
							<li>Home</li>
							<li>About</li>
							<li>Services</li>
							<li>Blog</li>
							<li>Contact</li>
						</ul>
					</div>

					{/* Get in Touch */}
					<div className="flex-1">
						<p className="text-lg font-semibold mb-2">Get in Touch</p>
						<ul className="text-gray-700 space-y-2">
							<li className="flex items-start gap-3 ">
								<FiMail
									className="bg-teal-700 hover:bg-teal-800 rounded-full p-[5px] text-white shrink-0"
									size={25}
								/>
								airimarahtourismllc@gmail.com
							</li>
							<li className="flex items-start gap-3 ">
								<FiPhone
									className="bg-teal-700 hover:bg-teal-800 rounded-full p-[5px] text-white shrink-0"
									size={25}
								/>{" "}
								050 33 03771
							</li>
							<li className="flex items-start gap-3 ">
								<FiMapPin
									className="bg-teal-700 hover:bg-teal-800 rounded-full p-[5px] text-white shrink-0"
									size={25}
								/>{" "}
								M 119 E, Fast Business Building Al Qusais 2, Near Al Tawar
								Center Dubai
							</li>
							<li className="flex items-start gap-3 ">
								<FiClock
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
							Follow us on Instagram
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
