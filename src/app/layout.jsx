import { Inter } from "next/font/google";
import localfont from "next/font/local";
import HeaderShell from "./components/ui/HeaderShell";
import HeaderContent from "./components/ui/HeaderContent";
import Footer from "./components/Footer";
import "./globals.css";
import CTASection from "./components/CTASection";
import InViewObserver from "./components/ui/InViewObserver";

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
				<HeaderShell>
  <HeaderContent />
</HeaderShell>
					<div className="flex mt-20 h-full mb-12">
						<InViewObserver/>
						{children}
						</div>
					<CTASection />
					<Footer extraClass="text-mywhite-50 bg-myblack-50" />
				</main>
			</body>
		</html>
	);
}
