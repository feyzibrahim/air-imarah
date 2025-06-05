import { Geist, Geist_Mono, Mulish, Space_Grotesk, Alex_Brush } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const mulish = Mulish({
	variable: "--font-mulish",
	subsets: ["latin"],
	weight: ["400", "700"], // adjust weights as needed
});

const spaceGrotesk = Space_Grotesk({
	variable: "--font-space-grotesk",
	subsets: ["latin"],
	weight: ["400", "700"], // adjust weights as needed
});

const alexBrush = Alex_Brush({
	variable: "--font-alex-brush",
	subsets: ["latin"],
	weight: ["400"], // Alex Brush only has 400
});

export const metadata = {
	title: "Air Imarah",
	description: "Fly Beyond Your Limits",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          ${mulish.variable}
          ${spaceGrotesk.variable}
          ${alexBrush.variable}
          antialiased
		  font-mulish
        `}
			>
				{children}
			</body>
		</html>
	);
}
