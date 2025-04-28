import { Inter } from "next/font/google";
import localfont from "next/font/local";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "RoyalCom Solutions",
	description: "Best Social Media Agency",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={``}>
			<body className={inter.className}>
				<main className="">
					<Header />
					<div className="flex mt-24">
					{children}

					</div>
					<Footer extraStyle="text-mywhite-50 bg-myblack-50" />
					</main>
			</body>
		</html>
	);
}
