import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { IoLogoWhatsapp } from "react-icons/io";
import { Button } from "./ui/button";

function Booking() {
	return (
		<div className="relative w-full h-80">
			<Image
				src="/images/image7.png"
				alt="Trip"
				className="object-cover w-full h-full"
				width={500}
				height={300}
			/>

			{/* Centered content */}
			<div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
				<h2 className="text-2xl md:text-4xl font-bold mb-2 font-grotesk">
					Are You Ready To <br />
					Travel? Remember Us !!
				</h2>
				<p className="text-base md:text-lg mb-4 font-mulish">
					Book your perfect destination now and enjoy exclusive offers.
				</p>
				<a
					href="https://wa.me/971503303771"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Button className="bg-white text-teal-800 hover:bg-teal-100 cursor-pointer rounded-full px-5 font-bold">
						Book Now
						<span>
							<IoLogoWhatsapp />
						</span>
					</Button>
				</a>
			</div>
		</div>
	);
}

export default Booking;
