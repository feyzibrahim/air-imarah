import AboutPage from "../components/about-page";
import Blogs from "../components/blogs";
import Booking from "../components/bookings";
import Contact from "../components/contact";
import Destinations from "../components/destination";
import Footer from "../components/footer";
import HomePage from "../components/home-page";
import Navbar from "../components/navbar";
import Packages from "../components/packages";
import Testimonial from "../components/testimonial";
import Users from "../components/users";

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
					<Contact />
				</div>

				<div className="pt-12">
					<Footer />
				</div>
			</main>
		</div>
	);
}
