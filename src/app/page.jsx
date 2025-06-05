import AboutPage from "@/component/about-page";
import Blogs from "@/component/blogs";
import Booking from "@/component/bookings";
import Destinations from "@/component/destination";
import Footer from "@/component/footer";
import HomePage from "@/component/home-page";
import Navbar from "@/component/navbar";
import Packages from "@/component/packages";
import Testimonial from "@/component/testimonial";
import Users from "@/component/users";

export default function Home() {
	return (
		<div>
			<main>
				<div>
					<Navbar />
				</div>
				<div>
					<HomePage />
				</div>

				<div className="pt-10">
					<AboutPage />
				</div>

				<div className="pt-12">
					<Packages />
				</div>

				<div className="pt-12">
					<Users />
				</div>

				<div className="pt-12">
					<Destinations />
				</div>

				<div className="pt-12">
					<Testimonial />
				</div>

				<div className="pt-12">
					<Booking />
				</div>

				<div className="pt-12">
					<Blogs />
				</div>

				<div className="pt-12">
					<Footer />
				</div>
			</main>
		</div>
	);
}
