import React from "react";
// import Menu from "./Menu";
import Link from "next/link";
import Menu from "./ui/Menu";
import { paddingClass } from "../constants";

const Footer = ({ extraStyle = "" }) => {
	return (
		<footer
			className={`${extraStyle} ${paddingClass} grid font-light gap-y-10 max-lg:grid-rows-[1fr_16em] lg:grid-cols-[3fr_2fr] xl:grid-cols-[1fr_1fr] gap-x-10 px-4 py-8 lg:justify-between lg:pl-10`}
		>
			<div className="flex flex-col gap-y-12">
				<div className="flex flex-col gap-5">
					<Link href="/contact">
						<h1 className="text-4xl font-semibold text-blue-500 -tracking-[0.05em]">
							RoyalComSol
						</h1>
					</Link>
					<span className="max-w-80 text-sm lg:text-base sm:max-w-96">
						Helping Healthcare firms optimize their business, for better
						efficiency and scalability.
					</span>
				</div>

				<div className="flex w-full lg:justify-between gap-x-4 lg:gap-x-8">
					<div className="flex-1 flex flex-col gap-5 max-w-56 lg:min-w-40">
						<h2 className="text-xl md:text-2xl 2xl:text-3xl opacity-50 font-light">
							Company
						</h2>
						<Menu
							extraStyle="flex flex-col gap-y-4 items-start"
							pageName="footer"
							menutype="mainMenu"
						/>
					</div>
					<div className="flex-1 flex flex-col gap-5 w-full max-w-56 lg:min-w-52 max-md:hidden">
						<h2 className="text-xl md:text-2xl 2xl:text-3xl opacity-50 font-light">
							Services
						</h2>
						<Menu
							extraStyle="flex flex-col gap-y-4 items-start"
							pageName="footer"
							menutype="servicesMenu"
						/>
					</div>
					<div className="flex-1 flex flex-col gap-y-5 max-w-64 lg:min-w-56">
						<h2 className="text-xl md:text-2xl 2xl:text-3xl opacity-50 font-light">
							Contact
						</h2>
						<div className="flex flex-col gap-4 place-self-end">
							<span className="text-sm xl:text-base">info@royalcomsol.com</span>
							<span className="text-sm xl:text-base">+92 345 2787638</span>
							<span className="text-sm xl:text-base">
								Office-207, 2nd Floor, Al-Sehat Centre, Shahra-e-Faisal,
								Karachi, Pakistan.
							</span>
						</div>
					</div>
				</div>
			</div>

			{/* News LEtter sectin */}
			<div className="w-full h-fit flex flex-col lg:place-self-end gap-5 max-w-md justify-center self-center">
				<div className="flex flex-col gap-2">

				<h2 className="text-2xl lg:text-3xl font-light">
					Subscribe to our News letter
				</h2>
				<span className="max-w-96">
					Join up our newsletter now to get weekly informative tips in your
					email.
				</span>
				</div>
				<input
					type="text"
					placeholder="Enter email"
					className="appearance-none bg-transparent border-b border-gray-600 focus:outline-none text-black"
				/>
				<button
					className={`h-10  px-5 rounded-full w-fit  text-mywhite-50 border-mywhite-50 border-2  transition-all duration-500 ease-in-out`}
					type="submit"
				>
					<span className=" lg:text-lg">Submit</span>
				</button>
			</div>
		</footer>
	);
};

export default Footer;
