import React from "react";
import { Button } from "@/component/ui/button";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Contact() {
	return (
		<div className="flex items-center justify-center md:absolute -top-32 left-0 right-0 m-5">
			<div className="w-full md:w-[800px] md:h-32 px-10 py-10 rounded-2xl bg-[rgba(50,134,135,1)] flex items-center justify-center gap-5">
				<p className="md:text-3xl font-grotesk font-bold text-white">
					Contact now for exclusive deals
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
