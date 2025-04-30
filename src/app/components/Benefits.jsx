"use client";

import React, { useState } from "react";
import { GoArrowLeft, GoArrowRight, GoDotFill } from "react-icons/go";
import BenefitCard from "../components/ui/BenefitCard";
import Bounded from "../components/ui/Bounded";
import Link from "next/link";
import { benefitData, secHeading } from "../constants";
import Image from "next/image";

const Benefits = ({ variation, containerClass }) => {
	const [currentBenefit, setCurrentBenefit] = useState(0);
	const toggleContent = (id) => setCurrentBenefit(id);

	return variation === "homeBenefits" ? (
		<Bounded
			className={`flex h-auto min-w-fit items-center py-5 2xl:justify-center`}
		>
			<div className={`flex flex-col gap-y-6 max-lg:py-8 sm:gap-y-12 `}>
				<h1
					className={`h-fit sm:w-[30rem] 3xl:leading-[1.3] max-3xl:leading-[1.275em] ${secHeading}`}
					style={{ wordSpacing: "0.1em" }}
				>
					Our Benefits
				</h1>

				<BenefitCard cardData={benefitData} />
				<div className="flex min-w-96 items-center text-2xl transition-all duration-300 ease-in-out xl:text-3xl">
					<Link href="/benefits">
						<button
							type="button"
							className={`w-fit flex min-w-96 items-center`}
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
			<div className="grid relative w-full h-full xl:justify-items-center xl:place-self-center 2xl:max-w-screen-2xl 3xl:max-w-screen-2xl">
				<div className="flex max-sm:flex-col gap-2 self-start absolute left-0 -top-36">
					<h1
						className={`${secHeading} h-fit max-sm:max-w-[28rem]`}
						style={{ wordSpacing: "0.1em" }}
					>
						Discover Our Benefits
					</h1>
					<div className="flex justify-between items-center max-w-32 sm:max-w-40 w-full max-h-32">
						<GoArrowLeft className="text-4xl sm:text-5xl w-12" />
						<GoArrowRight className="text-4xl sm:text-5xl w-12" />
					</div>
				</div>
				{/* BENEFIIT CONTENT AND IMAGE */}
				{benefitData.map((benefit, id) => (
					<div
						className={`absolute grid w-full my-8 2xl:max-w-screen-2xl 3xl:max-w-screen-2xl md:grid-cols-[1fr_1fr] max-sm:grid-rows-2 gap-y-12  ${
							currentBenefit === id ? "" : "-translate-y-80 scale-0 opacity-0"
						} transition-all duration-200 ease-linear`}
						key={id}
					>
						<div className={`flex flex-col gap-5`}>
							<h1 className="text-4xl lg:text-4xl xl:text-3xl 2xl:text-4xl -ml-1">
								{currentBenefit === id ? benefit.title : ""}
							</h1>
							<div className="flex flex-col gap-2.5 text-sm sm:text-base 2xl:text-lg">
								{benefit.content.map((content, index) => (
									<p
										key={index}
										className="flex h-full max-w-sm sm:max-w-lg flex-col justify-center gap-2 pr-6 xl:max-w-lg 2xl:max-w-xl"
									>
										{content}
									</p>
								))}
								<div className="flex flex-col gap-2 pl-6 py-2">
									{benefit.points.map((point, pointid) => (
										<div key={pointid} className="max-w-md 2xl:text-base">
											<li>{point}</li>
										</div>
									))}
								</div>
							</div>
						</div>
						<div className="relative lg:justify-self-end h-[14rem] w-80 lg:h-[18rem] 2xl:h-[22rem]">
							<Image
								fill
								src={benefit.imgPath}
								alt=""
								className="h-full w-full  object-cover object-center"
							/>
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
