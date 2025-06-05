import React from "react";

const destinations = [
	{
		image: "/images/image5.png",
		title: "Some Amazing Title Here",
		desc: "Lorem ipsum dolor sit amet, alina adipisci elite. Egestas elementum enim netus amet turpis lectus.",
	},
	{
		image: "/images/image3.png",
		title: "Some Amazing Title Here",
		desc: "Lorem ipsum dolor sit amet, alina adipisci elite. Egestas elementum enim netus amet turpis lectus.",
	},
	{
		image: "/images/image2.png",
		title: "Some Amazing Title Here",
		desc: "Lorem ipsum dolor sit amet, alina adipisci elite. Egestas elementum enim netus amet turpis lectus.",
	},
];

function Blogs() {
	return (
		<div className="text-center py-10 bg-gradient-to-b from-white to-blue-50 pb-40">
			<p className="text-teal-500 italic mb-2 font-brush text-2xl">
				Best Places For Your Party
			</p>
			<h2 className="text-3xl font-bold mb-10 font-grotesk">
				Place That Accommodates Your Guest
			</h2>

			<div className="flex flex-wrap justify-center gap-6">
				{destinations.map((d, i) => (
					<div
						key={i}
						className="bg-white shadow-lg rounded-xl overflow-hidden w-[275px] transition hover:scale-105"
					>
						<img
							src={d.image}
							alt="room"
							className="w-full h-48 object-cover"
						/>
						<div className="p-5 text-left">
							<h1 className="text-gray-500 text-lg mb-4 font-bold font-grotesk">
								{d.title}
							</h1>
							<p className="text-gray-500 text-sm mb-4">{d.desc}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Blogs;
