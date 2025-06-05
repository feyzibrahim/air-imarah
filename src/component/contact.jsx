import React from "react";
import { Button } from "@/component/ui/button";

export default function Contact() {
	return (
		<div className="flex items-center justify-center md:absolute -top-28 left-0 right-0 mb-10">
			<div className="w-full md:w-[800px] md:h-32 px-10 py-10 rounded-2xl bg-[rgba(50,134,135,1)] flex items-center justify-center ">
				<div className="flex flex-col md:flex-row justify-between gap-10">
					<div>
						<p className="md:text-3xl font-grotesk font-bold text-white">
							Subscribe for Latest Newsletter
						</p>
					</div>

					<div className="md:flex items-center justify-center gap-2 space-y-5 md:space-y-0">
						<input
							type="text"
							className="bg-white px-6 py-2 rounded-full font-bold text-teal-800 font-mulish"
							placeholder="Enter your Email Address"
						/>
						<Button className="bg-white text-teal-800 font-mulish font-bold rounded-full px-4 py-2 hover:bg-gray-200 transition-colors cursor-pointer w-full md:w-fit">
							SubScribe
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
