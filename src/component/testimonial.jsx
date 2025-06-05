import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Testimonial() {
	return (
		<div className="text-center py-10 ">
			<p className="text-teal-500 italic mb-2 text-2xl font-brush">Latest News</p>
			<h2 className="text-3xl font-bold mb-10 font-grotesk">Read Latest Blogs</h2>

			<div className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 py-10 max-w-7xl mx-auto gap-10 ">
				{/* Right - Image Grid */}
				<div className="flex flex-col md:flex-row gap-5 items-end">
					<Image
						src="/images/image2.png"
						alt="Trip"
						className="rounded-xl w-full md:w-40 h-60 object-cover"
						width={200}
						height={200}
					/>
					<Image
						src="/images/image1.png"
						alt="Trip"
						className="rounded-xl w-full md:w-40 h-60 object-cover"
						width={200}
						height={200}
					/>
					<Image
						src="/images/image3.png"
						alt="Trip"
						className="rounded-xl w-full h-96 object-cover"
						width={200}
						height={200}
					/>
				</div>

				{/* Left - Text Content */}
				<div className="flex-1 text-center lg:text-left">
					<div>
						<h1 className="text-2xl md:text-2xl font-semibold leading-tight font-grotesk">
							Tommy Murphy
						</h1>
						<p className="sm md:text-base text-gray-500 mb-2 font-mulish">
							Global Directives Architect
						</p>

						<p
							style={{ color: "rgba(108, 108, 108, 1)" }}
							className="pt-5 font-mulish"
						>
							Donec adipiscing tristique risus nec feugiat in. Ullamcorper
							morbi <br></br>tincidunt ornare massa eget egestas purus
							viverra. Pharetra sit amet aliquam id diam maecenas ultricies
							mi eget. Aenean euismod elementum nisi quis eleifend. Sit amet
							facilisis magna etiam tempor orci. Vitae et leo duis ut. Arcu
							cursus vitae congue mauris.
						</p>
					</div>
					<div className="flex items-center justify-center lg:justify-start mt-6">
						<div className="flex items-center justify-center lg:justify-start mt-6 bg-teal-800 w-fit rounded-full p-4 text-white font-semibold">
							<ArrowRight />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
