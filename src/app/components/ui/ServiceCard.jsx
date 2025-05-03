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
	const cardRefs = useRef([]);

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

	// Reset card refs whenever dataToMap changes
	useEffect(() => {
		cardRefs.current = cardRefs.current.slice(0, dataToMap.length);
	}, [dataToMap]);

	useEffect(() => {
		const handleResize = () => setScreenSize(getCurrentScreenSize());
		handleResize();
		window.addEventListener("resize", handleResize);

		// Set up scroll snap detection
		const scrollContainer = scrollContainerRef.current;
		if (scrollContainer) {
			const handleScroll = () => {
				// Debounce for performance
				if (scrollContainer.scrollLeft === 0) {
					setActiveIndex(0);
					return;
				}

				// Find which card is most visible in the viewport
				const containerLeft = scrollContainer.scrollLeft;
				const containerWidth = scrollContainer.clientWidth;
				const containerCenter = containerLeft + containerWidth / 2;

				let closestCardIndex = 0;
				let closestDistance = Infinity;

				cardRefs.current.forEach((cardRef, index) => {
					if (!cardRef) return;

					const cardLeft = cardRef.offsetLeft;
					const cardWidth = cardRef.offsetWidth;
					const cardCenter = cardLeft + cardWidth / 6;

					const distance = Math.abs(containerCenter - cardCenter);
					if (distance < closestDistance) {
						closestDistance = distance;
						closestCardIndex = index;
					}
				});

				setActiveIndex(closestCardIndex);
			};

			scrollContainer.addEventListener("scroll", handleScroll);
			return () => {
				scrollContainer.removeEventListener("scroll", handleScroll);
				window.removeEventListener("resize", handleResize);
			};
		}
	}, []);

	const scrollToCard = (index) => {
		const cardRef = cardRefs.current[index];
		if (!cardRef || !scrollContainerRef.current) return;

		// Calculate position to center the card in the container
		const container = scrollContainerRef.current;
		const containerWidth = container.clientWidth;
		const cardLeft = cardRef.offsetLeft;
		const cardWidth = cardRef.offsetWidth;

		// Center the card in the view
		const scrollPosition = cardLeft - containerWidth / 2 + cardWidth / 2;

		container.scrollTo({
			left: scrollPosition,
			behavior: "smooth",
		});

		setActiveIndex(index);
	};

	const handleNext = () => {
		const newIndex = (activeIndex + 1) % dataToMap.length;
		scrollToCard(newIndex);
	};

	const handlePrev = () => {
		const newIndex = (activeIndex - 1 + dataToMap.length) % dataToMap.length;
		scrollToCard(newIndex);
	};

	if (pagetype !== "homePage" && pagetype !== "services") return null;

	return (
		<div className="">
			<div className="flex justify-between lg:h-20 xl:h-24 items-center max-w-32 sm:gap-x-6 w-full max-h-32">
				<button onClick={handlePrev}>
					<GoArrowLeft className="text-4xl sm:text-5xl w-12" />
				</button>
				<button onClick={handleNext}>
					<GoArrowRight className="text-4xl sm:text-5xl w-12" />
				</button>
			</div>

			<div
				ref={scrollContainerRef}
				className={`${gridClass} flex max-w-full place-items-center justify-self-center overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory no-scrollbar`}
			>
				{dataToMap.map((service, index) => {
					const isActive = index === activeIndex;
					const isHovered = index === hoveredIndex;

					return (
						<div
							key={index}
							ref={(el) => (cardRefs.current[index] = el)}
							className={`group ${cardClass} snap-center max-w-[370px] transition-all duration-300 ease-in-out ${
								isActive
									? "bg-gradient-to-t from-blue-400/30 via-blue-400/20 to-transparent"
									: "bg-lilac-100/80"
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
													: "text-myblue-50"
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
										className={`w-fit text-mywhite-50 transition-all duration-300 ease-in-out hover:text-myblue-50 ${
											isActive || isHovered
												? "translate-y-0.5 opacity-100"
												: "translate-y-10 opacity-0"
										} rounded-full bg-myblack-150 px-4 py-0.5 text-sm xl:text-base`}
									>
										Read More
									</Link>
								</div>

								<StaticImg
									alt="alt text"
									src={service.imgPath}
									className={`absolute left-0 top-0 -z-10 transition-all duration-200 ease-linear ${
										isActive || isHovered
											? "translate-y-0 opacity-100"
											: "pointer-events-none translate-y-5 opacity-0"
									} h-[25rem] w-full object-cover object-center`}
								/>
							</div>
						</div>
					);
				})}

				<div className="flex min-w-[14em] w-full items-center justify-center text-2xl transition-all duration-300 ease-in-out hover:scale-105 xl:text-3xl snap-end">
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
