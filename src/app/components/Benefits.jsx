"use client";

import React, { useState } from "react";
import { GoArrowLeft, GoArrowRight, GoDotFill } from "react-icons/go";
import BenefitCard from "../components/ui/BenefitCard";
import Bounded from "../components/ui/Bounded";
import Link from "next/link";
import { benefitData, secHeading } from "../constants";
import StaticImg from "./ui/StaticImg";

const Benefits = ({ variation, containerClass }) => {
	const [activeIndex, setActiveIndex] = useState(0);

	const handlenext = () => {
		setActiveIndex((prev) => (prev + 1) % benefitData.length);
	};

	const handleprev = () => {
		setActiveIndex(
			(prev) => (prev - 1 + benefitData.length) % benefitData.length
		);
	};

	return variation === "homeBenefits" ? (
		<Bounded
			className={`flex h-auto min-w-fit items-center py-5 2xl:justify-center`}
		>
			<div className={`flex flex-col gap-y-6 max-lg:py-8 sm:gap-y-12 `}>
				<h1
					className={`h-fit sm:w-[30rem] fade-up 3xl:leading-[1.3] max-3xl:leading-[1.275em] ${secHeading}`}
					style={{ wordSpacing: "0.1em" }}
				>
					Our Benefits
				</h1>

				<BenefitCard cardData={benefitData} />
				<div className="flex max-w-fit items-center text-2xl transition-all duration-300 ease-in-out xl:text-3xl">
					<Link href="/benefits">
						<button
							type="button"
							className={`w-fit slide-in-left flex min-w-80 pl-1 items-center`}
						>
							{/* Button text */}
							<span className="text-lg">View All</span>
							<GoArrowRight
								className={`w-12 transition-all duration-300 ease-in-out`}
							/>
						</button>
					</Link>
				</div>
			</div>
		</Bounded>
	) : variation === "default" ? (
		<Bounded className={`${containerClass} relative`}>
			<div className="grid relative w-full min-h-[45em] xl:justify-items-center xl:place-self-center 2xl:max-w-screen-2xl 3xl:max-w-screen-2xl">
				<div className="flex max-sm:flex-col max-sm:gap-y-5 justify-between self-start absolute -left-2 w-full -top-24 lg:-top-10 2xl:max-w-screen-2xl 3xl:max-w-screen-2xl">
					<h1
						className={`${secHeading} h-fit max-sm:max-w-[28rem]`}
						style={{ wordSpacing: "0.1em" }}
					>
						Discover Our Benefits
					</h1>
					<div className="flex justify-between lg:h-20 xl:h-24 items-center max-w-32 sm:gap-x-6 w-full max-h-32">
						<button onClick={handleprev}>
							<GoArrowLeft className="text-4xl sm:text-5xl w-12" />
						</button>
						<button onClick={handlenext}>
							<GoArrowRight className="text-4xl sm:text-5xl w-12" />
						</button>
					</div>
				</div>
				{/* BENEFIIT CONTENT AND IMAGE */}
				{benefitData.map((benefit, id) => (
					<div
						className={`flex absolute top-12 md:top-6 w-full my-8 2xl:max-w-screen-2xl 3xl:max-w-screen-2xl gap-y-12 ${
							activeIndex === id ? "" : "translate-x-80 scale-x-0 opacity-0"
						} transition-all duration-300 ease-in-out`}
						key={id}
					>
						<div className={`flex flex-col gap-5 max-w-2xl`}>
							<h1 className="text-4xl lg:text-4xl xl:text-3xl 2xl:text-4xl -ml-1 font-normal">
								{activeIndex === id ? benefit.title : ""}
							</h1>
							<div className="flex flex-col gap-2.5  2xl:text-lg">
								{benefit.content.map((content, index) => (
									<p
										key={index}
										className="flex h-full max-w-sm sm:max-w-md flex-col justify-center gap-2 pr-6 xl:max-w-lg 2xl:max-w-xl"
									>
										{content}
									</p>
								))}
								<div className="flex flex-col gap-2 pl-6 py-2">
									{benefit.points.map((point, pointid) => (
										<div key={pointid} className="max-w-lg 2xl:text-base">
											<li>{point}</li>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</Bounded>
	) : (
		""
	);
};

export default Benefits;
