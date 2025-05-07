"use client";
import React, { useEffect, useState } from "react";
import { getCurrentScreenSize } from "../../constants";
import Link from "next/link.js";
import { GoArrowRight } from "react-icons/go";

export default function NewMenu({ links }) {
	const [open, setOpen] = useState(false);
	const [screenSize, setScreenSize] = useState(null);

	const toggleMenu = () => setOpen(!open);

	useEffect(() => {
		const handleResize = () => setScreenSize(getCurrentScreenSize());
		handleResize(); // Initial size
		window.addEventListener("resize", handleResize);
	
		// Lock scroll when menu is open
		if (open) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
	
		return () => {
			window.removeEventListener("resize", handleResize);
			document.body.style.overflow = ""; // Clean up
		};
	}, [open]);
	

	return (
		<>
			{/* Mobile Menu Overlay */}
			<div
				className={`fixed inset-0 z-50 min-h-screen bg-mywhite-50 backdrop-blur-lg transition-all duration-300 ease-in-out ${
					open
						? "translate-x-0 delay-150 "
						: "translate-x-full delay-500 w-screen"
				}`}
			>
				<div className="flex flex-col h-full w-full justify-center gap-8 ">
					<div className="flex flex-col gap-14 px-6">
						{links.map((item, index) => (
							<Link href={item.link_url} key={index}>
								<button
									className={`h-10 flex justify-between items-center w-full max-w-full border-b border-myblack-200  transition-all duration-500 ease-in-out ${
										open ? "translate-x-0" : "translate-x-[200%]"
									}`}
									key={index}
									onClick={toggleMenu}
									style={{
										transitionDelay: `${200 + index * 100}ms`,
									}}
								>
									<span className="uppercase text-3xl tracking-tighter">
										{item.link_title}
									</span>
									<GoArrowRight
										className={`w-12 text-3xl transition-all duration-300 ease-in-out`}
									/>
								</button>
							</Link>
						))}
					</div>
				</div>
			</div>

			{/* Desktop Menu */}
			{["md", "lg", "xl", "2xl", "3xl"].includes(screenSize || "") && (
				<div className="flex gap-2 lg:gap-4">
					{links.map((item, index) => (
						<button
							className={`h-10 group hover:scale-[1.025] hover:font-medium w-fit min-w-24 lg:min-w-32 transition-all duration-300 ease-in-out`}
							key={index}
							// style={{
							// 	transitionDelay: `${
							// 		open ? 100 + index * 100 : 600 + index * 100
							// 	}ms`,
							// }}
						>
							<Link href={item.link_url}>
								<span className="2xl:text-lg">{item.link_title}</span>
							</Link>
						</button>
					))}
				</div>
			)}

			{/* Menu Toggle Button */}
			<button
				title="Menu"
				type="button"
				onClick={toggleMenu}
				className="group z-50 h-10 w-10 cursor-pointer outline-none transition-all duration-300 ease-in-out md:hidden max-sm:h-8 max-sm:w-8"
			>
				<div
					className={`group flex scale-x-110 items-center justify-center transition-all duration-300 ease-in-out ${
						open ? "scale-x-150" : "hover:scale-125"
					}`}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width="32"
						height="32"
						className={`transition-all duration-200 ease-linear ${
							open ? "-rotate-180" : ""
						}`}
					>
						{[6, 12, 18].map((y, idx) => (
							<line
								key={idx}
								x1="4"
								y1={y}
								x2="20"
								y2={y}
								className={`stroke-blue-500 stroke-1 transition-all duration-200 ease-linear ${
									open ? "rotate-[40deg]" : ""
								}`}
							/>
						))}
					</svg>
				</div>
			</button>
		</>
	);
}
