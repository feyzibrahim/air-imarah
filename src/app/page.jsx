"use client";
import AboutPage from "@/component/about-page";
import Blogs from "@/component/blogs";
import Booking from "@/component/bookings";
import Destinations from "@/component/destination";
import Footer from "@/component/footer";
import HomePage from "@/component/home-page";
import Navbar from "@/component/navbar";
import Packages from "@/component/packages";
import SplashScreen from "@/component/splash-screen";
import Testimonial from "@/component/testimonial";
import Users from "@/component/users";
import { useEffect, useState } from "react";

export default function Home() {
	const [showSplash, setShowSplash] = useState(true);
	useEffect(() => {
		const timeout = setTimeout(() => {
			setShowSplash(false);
		}, 3500); // Show splash for 2 seconds

		return () => clearTimeout(timeout);
	}, []);

	if (showSplash) {
		return <SplashScreen />;
	}

	return (
		<div>
			<main>
				<div>
					<Navbar />
				</div>
				<div>
					<HomePage />
				</div>

				<div className="pt-10" id="about-us">
					<AboutPage />
				</div>

				<div className="pt-12" id="popular">
					<Packages />
				</div>

				<div className="pt-12" id="services">
					<Users />
				</div>

				<div className="">
					<Destinations />
				</div>

				<div className="pt-12">
					<Testimonial />
				</div>

				<div className="pt-12">
					<Booking />
				</div>

				<div className="pt-12" id="testimonials">
					<Blogs />
				</div>

				<div className="pt-12">
					<Footer />
				</div>
				<div className="flex items-center justify-center w-full py-3 text-xs text-white font-bold font-mulish bg-teal-800">
					<p>© 2025 All rights reserved</p>
				</div>
			</main>
		</div>
	);
}
