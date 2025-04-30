import { Inter } from "next/font/google";
import localfont from "next/font/local";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";
import CTASection from "./components/CTASection";

// const inter = Inter({ subsets: ["latin"] });

const interFont = Inter({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-inter", // Custom variable for the font
});

export const metadata = {
	title: "RoyalCom Solutions",
	description: "Best Social Media Agency",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={`${interFont.variable} no-scrollbar`}>
			<body>
				<main className="h-auto">
					<Header />
					<div className="flex mt-24 h-full">{children}</div>
					<CTASection />
					<Footer extraStyle="text-mywhite-50 bg-myblack-50" />
				</main>
			</body>
		</html>
	);
}
