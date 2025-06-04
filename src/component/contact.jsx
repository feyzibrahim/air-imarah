import React from "react";
import { Button } from "@/component/ui/button";

function Contact() {
	return (
		<div className="flex items-center justify-center">
			<div className="w-[800px] h-32 rounded-3xl bg-[rgba(50,134,135,1)] flex items-center justify-center text-white text-xl font-semibold">
				<div className="flex justify-between gap-10">
					<div>
						<p className="text-xl">Subscribe for Latest Newsletter</p>
					</div>

					<div className="flex gap-2">
						<input
							type="text"
							className="bg-white p-2 rounded-2xl text-black  "
							placeholder="Enter your Email Address"
						/>
						<Button className="bg-white text-black rounded-2xl">
							SubScribe
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;
