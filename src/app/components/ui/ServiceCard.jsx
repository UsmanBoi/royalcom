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
	const [isScrolling, setIsScrolling] = useState(false);
	const [hoveredIndex, setHoveredIndex] = useState(null);
	const cardRefs = useRef([]);
	const scrollTimeoutRef = useRef(null);
	// Remove the isNavigatingWithButtons state - this is causing the issue

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
				// Only update activeIndex when not in a programmatic scroll
				if (!isScrolling) {
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
						const cardCenter = cardLeft + cardWidth / 2;

						const distance = Math.abs(containerCenter - cardCenter);
						if (distance < closestDistance) {
							closestDistance = distance;
							closestCardIndex = index;
						}
					});

					setActiveIndex(closestCardIndex);
				}
			};

			scrollContainer.addEventListener("scroll", handleScroll);
			return () => {
				scrollContainer.removeEventListener("scroll", handleScroll);
				window.removeEventListener("resize", handleResize);
				if (scrollTimeoutRef.current) {
					clearTimeout(scrollTimeoutRef.current);
				}
			};
		}
	}, [isScrolling]);

	const scrollToCard = (index) => {
		const cardRef = cardRefs.current[index];
		if (!cardRef || !scrollContainerRef.current) return;

		// Mark that we're in a programmatic scroll
		setIsScrolling(true);
		
		// Calculate position to center the card in the container
		const container = scrollContainerRef.current;
		const containerWidth = container.clientWidth;
		const cardLeft = cardRef.offsetLeft;
		const cardWidth = cardRef.offsetWidth;

		// Center the card in the view
		const scrollPosition = cardLeft - containerWidth / 2 + cardWidth / 2;

		// Set active index first
		setActiveIndex(index);
		
		// Then perform the scroll
		container.scrollTo({
			left: scrollPosition,
			behavior: "smooth",
		});

		// Clear any existing timeout
		if (scrollTimeoutRef.current) {
			clearTimeout(scrollTimeoutRef.current);
		}

		// Reset the scrolling flag after animation completes
		scrollTimeoutRef.current = setTimeout(() => {
			setIsScrolling(false);
		}, 500); // Approximate duration of smooth scroll
	};

	const handleNext = () => {
		const newIndex = (activeIndex + 1) % dataToMap.length;
		scrollToCard(newIndex);
	};

	const handlePrev = () => {
		const newIndex = (activeIndex - 1 + dataToMap.length) % dataToMap.length;
		scrollToCard(newIndex);
	};

	const handleCardHover = (index) => {

		// Always update hoveredIndex for visual feedback
		setHoveredIndex(index);
	};

	if (pagetype !== "homePage" && pagetype !== "services") return null;

	return (
		<div className="">
			<div className="flex justify-between lg:h-20 xl:h-24 items-center max-w-32 sm:gap-x-6 w-full max-h-32">
				<button 
					onClick={handlePrev}
					className="transition-transform hover:scale-110 focus:outline-none"
				>
					<GoArrowLeft className="fade-up text-4xl sm:text-5xl w-12" />
				</button>
				<button 
					onClick={handleNext}
					className="transition-transform hover:scale-110 focus:outline-none"
				>
					<GoArrowRight className="fade-up text-4xl sm:text-5xl w-12" />
				</button>
			</div>

			<div
				ref={scrollContainerRef}
				className={`${gridClass} flex max-w-full place-items-center justify-self-center overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory no-scrollbar`}
			>
				{dataToMap.map((service, index) => {
					// Simpler active/hover logic: A card is interactive if it's active OR hovered
					const isActive = index === activeIndex;
					const isHovered = index === hoveredIndex;
					const isActiveOrHovered = isActive || isHovered;

					return (
						<div
							style={{
								scale: isActiveOrHovered ? "1" : "1",
								transformOrigin: "right",
								transition: "scale 0.3s ease, translate 0.3s ease",
							}}
							key={index}
							ref={(el) => (cardRefs.current[index] = el)}
							className={`group ${cardClass} snap-center z-0 max-w-[370px] transition-all duration-300 ease-in-out ${
								isActiveOrHovered ? "" : "bg-lilac-100/10"
							}`}
							onMouseEnter={() => {handleCardHover(index)
								setActiveIndex(index)
							}}
							onMouseLeave={() => {
								setHoveredIndex(null);
							}}
							// Add touch support for mobile
							// onTouchStart={() => {handleCardHover(index)}}
						>
							<div
								className={`absolute bottom-0 min-h-full w-full z-0 transition-all duration-300 ease-in-out ${
									isActiveOrHovered
										? "bg-gradient-to-t from-blue-500/40 via-blue-500/30 to-transparent/30"
										: ""
								} `}
							/>
							<div className="relative flex min-h-[25rem] w-full items-end">
								<div className="flex flex-col gap-2.5 px-4 sm:px-5 pb-6 text-myblack-150">
									<div
										className={`${
											isActiveOrHovered ? "translate-y-2" : ""
										}  flex items-center justify-between transition-all duration-300 ease-in-out`}
									>
										<h1
											className={`${
												isActiveOrHovered
													? "font-normal text-mywhite-50"
													: ""
											} pointer-events-none text-xl capitalize xl:text-xl 2xl:text-2xl`}
											style={{
												scale: isActiveOrHovered ? "1.15" : "1",
												transformOrigin: "left",
												transition: "scale 0.3s ease, text-shadow 0.1s ease",
											}}
										>
											{service.title}
										</h1>
										<GoArrowRight
											className={`w-12 text-2xl transition-all duration-300 ease-in-out ${
												isActiveOrHovered
													? "text-mywhite-50"
													: "text-myblue-50"
											}`}
											style={
												isActiveOrHovered
													? {
															transform: "scale(1.3)",
															transformOrigin: "left",
															transition: "transform 0.3s ease",
														}
													: {
															transform: "scale(1)",
															transformOrigin: "top",
															transition: "transform 0.3s ease",
														}
											}
										/>
									</div>
									{/* divider */}
									<div
										className={`h-[1px] w-80 outline-0 sm:w-full transition-all duration-300 ease-in-out ${
											isActiveOrHovered
												? "bg-mywhite-100 translate-y-2"
												: "bg-myblack-100"
										}`}
									/>
									<p
										className={`${
											isActiveOrHovered
												? "text-mywhite-50 translate-y-4 opacity-0"
												: ""
										} min-h-16 pointer-events-none text-sm 2xl:text-base transition-all duration-300 ease-in-out`}
									>
										{service.headline}
									</p>
									<Link href={`/services/${service.slug}`} className={`absolute bottom-0 max-w-fit transition-all duration-300 ease-in-out ${
												isActiveOrHovered
													? "-translate-y-12 opacity-100"
													: "translate-y-10 opacity-0"
											}`}>
										<button
											type="button"
											className={`w-fit flex min-w-32 pl-1 text-mywhite-50  transition-all duration-300 ease-in-out items-center`}
											
										>
											{/* Button text */}
											<span className="">Read More</span>
											<GoArrowRight
												className={`w-12 transition-all duration-300 ease-in-out`}
											/>
										</button>
									</Link>
								</div>

								<StaticImg
									alt={`${service.title} image`}
									src={service.imgPath}
									className={`absolute left-0 top-0 -z-50 transition-all duration-300 ease-in-out ${
										isActiveOrHovered
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