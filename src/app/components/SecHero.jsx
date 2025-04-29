"use client";
import React from "react";
import Image from "next/image";
import Bounded from "./ui/Bounded";
import { secHeading } from "../constants";

const SecHero = ({
	heading = "",
	subheading = "",
	img1src,
	img2src,
	// CTA,
	// CTAtext = "Let's talk",
}) => {
	return (
		<Bounded className="flex w-screen flex-col justify-center pb-16 pt-10 text-myblack-150 md:min-h-80 md:flex-row xl:items-center max-sm:gap-y-14 max-md:gap-20">
			<div className="relative grid h-full w-full gap-y-16 md:min-h-80 md:grid-cols-[2fr_1fr] lg:grid-cols-[2fr_1fr] xl:justify-items-center xl:place-self-center 2xl:max-w-screen-2xl 2xl:py-20 3xl:max-w-screen-2xl max-md:grid-rows-[1fr_1fr]">
				{/* Content */}
				{/* className={`absolute left-2 top-1/3 -z-10 mr-20 flex h-auto w-fit max-w-[30rem] -translate-y-1/2 flex-col justify-center gap-2 rounded-lg bg-gradient-to-br from-blue-100/50 via-blue-300/10 to-blue-300/10 p-6 shadow-lg backdrop-blur-[6px] sm:gap-4 lg:left-16 lg:mr-0 lg:max-w-[36rem] xl:max-w-[45rem] 2xl:max-w-[52rem]`} */}
				<div
					className={`flex h-auto w-fit flex-col justify-center place-self-start gap-6 rounded-lg sm:gap-y-10 max-sm:w-96`}
				>
					<div className="flex flex-col gap-44">
						<h1 className={`${secHeading}`}>{heading}</h1>
						<h2 className="w-full text-sm font-normal sm:max-w-md lg:max-w-xl lg:text-base 2xl:text-lg max-sm:max-w-80">
							{subheading}
						</h2>
					</div>
				</div>

				{/* Hero Images  */}
				<div className="relative flex min-h-80 w-full justify-end max-sm:min-h-[24rem] max-sm:items-end">
					{/* <div className="absolute inset-0 z-0 bg-gradient-to-l from-mywhite-200/5 via-mywhite-200/10 to-mywhite-200/20 bg-blend-screen"></div> */}

					<div className="relative max-lg:min-h-full lg:max-h-[27rem] 2xl:max-h-[30rem] w-full max-w-sm 2xl:max-w-md">
						<Image
							alt="hero Image describing business environment"
							width={300}
							height={300}
							priority
							src="/auth.jpg"
							className="absolute right-0 top-2 lg:top-3 h-[19rem] w-[14.25rem] rounded object-cover object-center lg:w-[14.25rem] 2xl:h-[23.5rem] 2xl:w-[17.5rem]"
						/>

						<Image
							alt="hero Image describing telesupport services"
							width={300}
							height={300}
							priority
							src="/auth1.jpg"
							className="absolute bottom-0 left-2 sm:left-0 lg:left-2 h-[14.25rem] w-[13rem] lg:w-[14.25rem] 2xl:w-[17.5rem] 2xl:h-[17.5rem] rounded object-cover object-center"
						/>
					</div>
				</div>
			</div>
		</Bounded>
	);
};

export default SecHero;
