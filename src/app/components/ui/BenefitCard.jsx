"use client";

import StaticImg from "./StaticImg";
import React, { useState } from "react";
import { getCurrentScreenSize } from "../../constants";

const BenefitCard = ({ cardData }) => {
	const [screenSize, setScreenSize] = useState(null);

	const visibleCards = screenSize === "lg" ? cardData : cardData.slice(0, 3);

	return (
		<div className="grid max-w-full gap-x-4 gap-y-4 md:grid-cols-2 lg:gap-y-10 xl:grid-cols-3 xl:justify-items-center xl:place-self-center 2xl:max-w-screen-2xl 3xl:max-w-screen-2xl">
			{visibleCards.map((benefit, id) => (
				<div
					key={id}
					className="bg-lilac-100 grid min-h-40 max-w-full grid-cols-[1fr_1fr] gap-4 rounded px-3 py-2 sm:p-4 max-sm:max-w-sm 2xl:max-w-xl 2xl:py-5"
				>
					<div className="flex flex-col justify-center gap-2">
						<h1 className="text-lg font-medium xl:text-xl">{benefit.title}</h1>
						<span className="min-h-20 w-full text-sm sm:w-60 2xl:text-base">
							{benefit.headline}
						</span>
					</div>
					<div className="relative h-[8rem] max-sm:w-32 place-self-end  self-center rounded lg:h-[13rem] 2xl:h-[15rem]">
						<StaticImg
							fill
							alt="alt text"
							src={benefit.imgPath}
							className="h-full w-full rounded object-contain object-center"
						/>
					</div>
				</div>
			))}
		</div>
	);
};

export default BenefitCard;
