"use client";

import react, { useEffect, useRef, useState } from "react";
import { getCurrentScreenSize } from "../../constants.js";
import { GoArrowRight } from "react-icons/go";
import Link from "next/link.js";
import Image from "next/image.js";

const ServiceCard = ({
	cardData,
	gridClass = "",
	cardClass = "",
	pagetype = "",
}) => {
	const [screenSize, setScreenSize] = useState(null);
	const scrollContainerRef = useRef(null);
	const [hoveredIndex, setHoveredIndex] = useState(0);

	const visibleCards =
		screenSize === "xxs" ||
		screenSize === "xs" ||
		screenSize === "sm" ||
		screenSize === "md" ||
		screenSize === "lg"
			? cardData.slice(0, 5)
			: screenSize === "xl"
				? cardData.slice(0, 6)
				: screenSize === "2xl" || screenSize === "3xl"
					? cardData.slice(0, 7)
					: cardData.slice(0, 4);

	useEffect(() => {
		const handleResize = () => setScreenSize(getCurrentScreenSize());
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		const el = scrollContainerRef.current;
		if (!el) return;

		const handleWheel = (e) => {
			if (e.deltaY === 0) return;
			e.preventDefault();
			el.scrollTo({
				left: el.scrollLeft + e.deltaY * 4,
				behavior: "smooth",
			});
		};

		el.addEventListener("wheel", handleWheel, { passive: false });
		return () => el.removeEventListener("wheel", handleWheel);
	}, []);

	return pagetype === "homePage" || pagetype === "services" ? (
		<>
			{/* SCROLLABLE CONTAINER */}
			<div
				className={`${gridClass} scroll-snap-x mandatory no-scrollbar flex  max-w-full snap-start place-items-center justify-self-center overflow-x-auto overflow-y-hidden scroll-smooth`}
				ref={scrollContainerRef}
			>
				{visibleCards.map((service, index) => {
					const isHovered = hoveredIndex === index;
					return (
						<div
							className={`${isHovered ? "bg-opacity-0" : "bg-lilac-100"} ${cardClass} `}
							key={index}
							onMouseEnter={() => setHoveredIndex(index)}
							onMouseLeave={() => setHoveredIndex(0)}
						>
							{/*  */}
							<div className="relative flex min-h-[25rem] w-full items-end">
								<div
									className={`flex flex-col gap-2.5 px-4 transition-all duration-300 ease-in-out sm:px-5 ${
										isHovered
											? "-translate-y-3"
											: "translate-y-5 text-myblack-150"
									}`}
								>
									{/* Heading with arrow */}
									<div
										className={`flex items-center justify-between transition-all duration-300 ease-in-out`}
									>
										<h1
											className={`${
												isHovered ? "font-normal text-mywhite-50" : ""
											} pointer-events-none text-xl capitalize xl:text-xl 2xl:text-2xl`}
											style={{
												scale: isHovered ? "1.105" : "1",
												transformOrigin: "left",
												transition: "scale 0.3s ease, text-shadow 0.1s ease",
											}}
										>
											{service.title}
										</h1>
										<GoArrowRight
											className={`w-12 text-2xl transition-all duration-300 ease-in-out ${
												isHovered ? "text-mywhite-50" : "text-blue-500"
											}`}
											style={
												isHovered
													? {
															transform: "scale(1.3)",
															transformOrigin: "left",
															transition: "transform 0.3s ease",
														}
													: {
															transform: "scale(1)",
															transformOrigin: "left",
															transition: "transform 0.3s ease",
														}
											}
										/>
									</div>
									<div
										className={`h-[1.3px] w-80 outline-0 sm:w-full ${
											isHovered ? "bg-mywhite-100" : "bg-myblack-100"
										}`}
									/>
									<p
										className={`${
											isHovered ? "text-mywhite-50" : ""
										} min-h-[4.65rem] text-sm 2xl:text-base`}
									>
										{service.headline}
									</p>
									<button
										className={`w-fit text-mywhite-50 transition-all duration-300 ease-in-out hover:text-blue-500 ${
											isHovered
												? "-translate-y-3 opacity-100"
												: "translate-y-10 opacity-0"
										} rounded-full bg-myblack-150 px-4 py-0.5`}
									>
										<Link href={service.service_link} className="text-sm">
											Read More
										</Link>
									</button>
								</div>
								<Image
									fill
									alt="alt text"
									src={service.imgPath}
									className={`absolute left-0 top-0 -z-10 transition-all duration-200 ease-linear ${
										!isHovered
											? "pointer-events-none translate-y-5 opacity-0"
											: "translate-y-0 opacity-100"
									} h-[25rem] w-full object-cover object-center`}
								/>
							</div>
						</div>
					);
				})}

				<div className="flex min-w-[14em] w-full items-center justify-center text-2xl transition-all duration-300 ease-in-out hover:scale-105 xl:text-3xl">
					<button type="button" className={`w-fit rounded`}>
						<Link href="/services">
							<span className="">View All Services</span>
						</Link>
					</button>
					<GoArrowRight
						className={`w-12 transition-all duration-300 ease-in-out`}
					/>
				</div>
			</div>
		</>
	) : (
		""
	);
};

export default ServiceCard;
