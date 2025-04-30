"use client";

import { useEffect, useRef, useState } from "react";
import { getCurrentScreenSize } from "../../constants.js";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import Link from "next/link.js";
import StaticImg from "./StaticImg.jsx";

const ServiceCard = ({
	cardData,
	gridClass = "",
	cardClass = "",
	pagetype = "",
}) => {
	const [screenSize, setScreenSize] = useState(null);
	const scrollContainerRef = useRef(null);
	const [activeIndex, setActiveIndex] = useState(0);
	const [hoveredIndex, setHoveredIndex] = useState(null);

	const visibleCards =
		screenSize === "xxs" ||
		screenSize === "xs" ||
		screenSize === "sm" ||
		screenSize === "md" ||
		screenSize === "lg" ||
		screenSize === "xl"
			? cardData.slice(0, 5)
			: screenSize === "2xl" || screenSize === "3xl"
				? cardData.slice(0, 6)
				: cardData.slice(0, 4);

	const dataToMap = pagetype === "homepage" ? visibleCards : cardData;

	const scrollAmount =
		screenSize === "xxs" ||
		screenSize === "xs" ||
		screenSize === "sm" ||
		screenSize === "md"
			? 380
			: 500; // You can adjust this value based on card width

	useEffect(() => {
		const handleResize = () => setScreenSize(getCurrentScreenSize());
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		const el = scrollContainerRef.current;
		if (!el) return;

		// Only add scroll hijack if it's a touch device and screen is small
		const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
		const isSmallScreen = window.innerWidth <= 768;

		if (!(isTouchDevice && isSmallScreen)) return;

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

	const handlenext = () => {
		setActiveIndex((prev) => (prev + 1) % cardData.length);

		if (scrollContainerRef.current) {
			scrollContainerRef.current.scrollBy({
				left: scrollAmount,
				behavior: "smooth",
			});
		}
	};

	const handleprev = () => {
		setActiveIndex((prev) => (prev - 1 + cardData.length) % cardData.length);
		if (scrollContainerRef.current) {
			scrollContainerRef.current.scrollBy({
				left: -scrollAmount,
				behavior: "smooth",
			});
		}
	};

	if (pagetype !== "homePage" && pagetype !== "services") return null;

	return (
		<div className="">
			<div className="flex justify-between lg:h-20 xl:h-24 items-center max-w-32 sm:gap-x-6 w-full max-h-32">
				<button onClick={handleprev}>
					<GoArrowLeft className="text-4xl sm:text-5xl w-12" />
				</button>
				<button onClick={handlenext}>
					<GoArrowRight className="text-4xl sm:text-5xl w-12" />
				</button>
			</div>

			<div
				ref={scrollContainerRef}
				className={`${gridClass} scroll-snap-x mandatory no-scrollbar flex max-w-full snap-start place-items-center justify-self-center overflow-x-auto overflow-y-hidden scroll-smooth`}
			>
				{dataToMap.map((service, index) => {
					const isActive = index === activeIndex;
					const isHovered = index === hoveredIndex;

					return (
						<div
							key={index}
							className={`group ${cardClass} min-w-[20rem] max-w-sm transition-all duration-300 ease-in-out ${
								isActive
									? "bg-gradient-to-t from-blue-400/30 via-blue-400/20 to-transparent "
									: "bg-lilac-100/80 "
							}`}
							onMouseEnter={() => {
								setHoveredIndex(index);
								setActiveIndex(index);
							}}
							onMouseLeave={() => {
								setHoveredIndex(null);
							}}
						>
							<div className="relative flex min-h-[25rem] w-full items-end">
								<div className="flex flex-col gap-2.5 px-4 sm:px-5 pb-6 text-myblack-150">
									<div
										className={`${
											isActive || isHovered ? "-translate-y-2" : ""
										}  flex items-center justify-between transition-all duration-300 ease-in-out`}
									>
										<h1
											className={`${
												isActive || isHovered
													? "font-normal text-mywhite-50"
													: ""
											} pointer-events-none text-xl capitalize xl:text-xl 2xl:text-2xl`}
											style={{
												scale: isActive || isHovered ? "1.105" : "1",
												transformOrigin: "left",
												transition: "scale 0.3s ease, text-shadow 0.1s ease",
											}}
										>
											{service.title}
										</h1>
										<GoArrowRight
											className={`w-12 text-2xl transition-all duration-300 ease-in-out ${
												isActive || isHovered
													? "text-mywhite-50"
													: "text-blue-500"
											}`}
											style={
												isActive || isHovered
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
										className={`h-[1.3px] w-80 outline-0 sm:w-full transition-all duration-300 ease-in-out ${
											isActive || isHovered
												? "bg-mywhite-100 -translate-y-2"
												: "bg-myblack-100"
										}`}
									/>
									<p
										className={`${
											isActive || isHovered
												? "text-mywhite-50 -translate-y-2"
												: ""
										}  text-sm 2xl:text-base transition-all duration-300 ease-in-out`}
									>
										{service.headline}
									</p>
									<Link
										href={`/services/${service.slug}`}
										className={`w-fit text-mywhite-50 transition-all duration-300 ease-in-out hover:text-blue-500 ${
											isActive || isHovered
												? "translate-y-0.5 opacity-100"
												: "translate-y-10 opacity-0"
										} rounded-full bg-myblack-150 px-4 py-0.5 text-sm xl:text-base`}
									>
										Read More
									</Link>
								</div>

								<StaticImg
									fill
									alt="alt text"
									src={service.imgPath}
									className={`absolute left-0 top-0 -z-10 transition-all duration-200 ease-linear ${
										isActive || isActive
											? "translate-y-0 opacity-100"
											: "pointer-events-none translate-y-5 opacity-0"
									} h-[25rem] w-full object-cover object-center`}
								/>
							</div>
						</div>
					);
				})}

				<div className="flex min-w-[14em] w-full items-center justify-center text-2xl transition-all duration-300 ease-in-out hover:scale-105 xl:text-3xl">
					<Link href="/services">
						<span>View All Services</span>
					</Link>
					<GoArrowRight className="ml-2 w-8" />
				</div>
			</div>
		</div>
	);
};

export default ServiceCard;
