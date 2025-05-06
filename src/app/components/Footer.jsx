import React from "react";
// import Menu from "./Menu";
import Link from "next/link";
import Menu from "./ui/Menu";
import { paddingClass } from "../constants";

const Footer = ({ extraClass = "" }) => {
	return (
		<footer
			className={`${extraClass} ${paddingClass} flex-col font-light px-4 pt-8 pb-20 sm:py-8 2xl:justify-center flex items-center min-w-fit`}
		>
			<div className="w-full max-w-full xl:justify-items-center min-h-80 lg:h-52 xl:place-self-center 2xl:max-w-screen-2xl 2xl:py-10 3xl:max-w-screen-2xl gap-x-10 md:gap-x-20 lg:justify-between grid gap-y-10 md:grid-cols-[1fr_2fr] lg:grid-cols-[2fr_3fr] ">
				{/* WEBSITE NAME WITH EXCERPT */}
				<div className="flex flex-col gap-5 place-self-start">
					<Link href="/contact">
						<h1 className="text-3xl fade-up sm:text-4xl font-semibold text-myblue-50 -tracking-[0.05em]">
							RoyalComSol
						</h1>
					</Link>
					<span className="max-w-80 fade-up text-sm xl:text-base sm:max-w-96">
						We provide comprehensive front and back office solutions tailored
						for the healthcare industry across the United States. Our team
						combines precision with efficiency to deliver exceptional results.
						We&apos;re here to support your growth and streamline your practice
						operations for long-term success.
					</span>
				</div>

				<div className="flex max-xs:flex-col w-full lg:justify-between max-xs:gap-y-10 max-lg:gap-x-6 lg:gap-x-8 max-w-4xl">
					{/* SERVICE LINKS */}
					<div className="flex-1 flex flex-col gap-5 max-w-52 lg:max-w-60">
						<h2 className="fade-up text-xl md:text-2xl 2xl:text-3xl opacity-50 font-medium">
							Services
						</h2>
						<Menu
							extraClass="flex flex-col gap-y-4 items-start"
							pageName="footer"
							menutype="servicesMenu"
						/>
					</div>
					{/* MAIN LINKS */}
					<div className="flex-1 flex flex-col gap-5 max-w-36 lg:max-w-40">
						<h2 className="text-xl fade-up md:text-2xl 2xl:text-3xl opacity-50 font-medium">
							Company
						</h2>
						<Menu
							extraClass="flex flex-col gap-y-4 items-start"
							pageName="footer"
							menutype="mainMenu"
						/>
					</div>
					<div className="flex-1 flex flex-col gap-y-5 max-w-56 lg:max-w-72 xl:min-w-60 max-md:hidden">
						<h2 className="fade-up text-xl md:text-2xl 2xl:text-3xl opacity-50 font-medium">
							Contact
						</h2>
						<div className="flex flex-col gap-4 ">
							<span className="fade-up delay-100 text-sm xl:text-base">info@royalcomsol.com</span>
							{/* <span className="text-sm xl:text-base">+92 313 8764508</span> */}
							<span className="fade-up delay-200 text-sm xl:text-base">
								Office-207, 2nd Floor, Al-Sehat Centre, Shahra-e-Faisal,
								Karachi, Pakistan.
							</span>
						</div>
					</div>
				</div>
				{/* Contact Info */}
				<div className="flex-1 flex flex-col gap-y-5 max-w-56 lg:max-w-72 md:hidden">
					<h2 className="text-xl md:text-2xl 2xl:text-3xl opacity-50 font-medium">
						Contact
					</h2>
					<div className="flex flex-col gap-4 ">
						<span className="fade-up delay-100 text-sm xl:text-base">info@royalcomsol.com</span>
						{/* <span className="text-sm xl:text-base">+92 313 8764508</span> */}
						<span className="fade-up delay-200 text-sm xl:text-base">
							Office-207, 2nd Floor, Al-Sehat Centre, Shahra-e-Faisal, Karachi,
							Pakistan.
						</span>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
