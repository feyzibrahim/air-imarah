import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

export default function SocialMedia() {
	return (
		<div className="flex items-center gap-3 py-2 text-white">
			<a
				href="https://facebook.com/airimarah"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Facebook"
			>
				<FaFacebookF
					size={25}
					className="bg-teal-700 hover:bg-teal-800 rounded-full p-[5px]"
				/>
			</a>
			<a
				href="https://twitter.com/airimarah"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Twitter"
			>
				<FaTwitter
					size={25}
					className="bg-teal-700 hover:bg-teal-800 rounded-full p-[5px]"
				/>
			</a>
			<a
				href="https://youtube.com/@airimarah"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="YouTube"
			>
				<FaYoutube
					size={25}
					className="bg-teal-700 hover:bg-teal-800 rounded-full p-[5px]"
				/>
			</a>
			<a
				href="https://instagram.com/airimarah"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Instagram"
			>
				<AiFillInstagram
					size={25}
					className="bg-teal-700 hover:bg-teal-800 rounded-full p-[4px]"
				/>
			</a>
		</div>
	);
}
