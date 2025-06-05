import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/component/ui/carousel";
import Image from "next/image";

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
		image: "/images/image7.png",
		title: "Some Amazing Title Here",
		desc: "Lorem ipsum dolor sit amet, alina adipisci elite. Egestas elementum enim netus amet turpis lectus.",
	},
];

function Packages() {
	return (
		<div className="text-center py-10 bg-gradient-to-b from-blue-50 to-white">
			<p className="text-teal-500 italic mb-2 font-brush text-3xl">
				Top Destinations
			</p>
			<h2 className="text-3xl font-bold mb-10 font-grotesk">
				Popular Destination For Vacations
			</h2>
			<Carousel className="w-full max-w-6xl mx-auto">
				<CarouselContent>
					{Array.from({ length: 5 }).map((_, index) => (
						<CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
							<div className="p-1 bg-white rounded-lg border shadow-md mb-10">
								<div className="p-1">
									<Image
										src={
											destinations[index % destinations.length]
												.image
										}
										alt="Destination"
										className="w-full h-64 object-cover rounded-sm"
										width={500}
										height={300}
									/>
									<div className="p-2 text-left tex">
										<h3 className="text-lg font-semibold font-grotesk">
											{
												destinations[index % destinations.length]
													.title
											}
										</h3>
										<p className="text-sm text-gray-500 font-mulish">
											{
												destinations[index % destinations.length]
													.desc
											}
										</p>
									</div>
								</div>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				{/* <CarouselPrevious />
				<CarouselNext /> */}
			</Carousel>
		</div>
	);
}

export default Packages;
