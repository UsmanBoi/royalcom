import React from "react";
import Bounded from "./ui/Bounded";
import Link from "next/link";
import StaticImg from "./ui/StaticImg";
import { GoArrowRight } from "react-icons/go";

const CTASection = () => {
	return (
		<Bounded
			className={`relative flex h-auto min-w-fit items-center py-10 text-mywhite-50 lg:py-20 2xl:justify-center`}
		>
			<div
				className={`flex flex-col gap-y-8 py-10 lg:py-20 z-10 w-screen max-w-full 2xl:max-w-screen-2xl 3xl:max-w-screen-2xl`}
			>
				<h1
					className={`h-fit w-96 text-3xl text-mywhite-50 sm:w-[38rem] lg:text-4xl 2xl:text-5xl 3xl:text-6xl max-sm:pr-6`}
					style={{ wordSpacing: "0.1em" }}
				>
					Let&apos;s Start A Conversation To Discuss Your Next Best Business
					Move
				</h1>

				<div className=" text-2xl transition-all duration-300 ease-in-out xl:text-3xl ">
					<Link href="/">
						<button
							type="button"
							className={`w-fit flex min-w-96 items-center`}
						>
							{/* Button text */}
							<span className="text-lg">Get Started</span>
							<GoArrowRight
								className={`w-12 transition-all duration-300 ease-in-out`}
							/>
						</button>
					</Link>
				</div>
			</div>
			<div className="absolute left-0 top-0  h-full w-full">
				<div className="absolute inset-0 -z-0 bg-gradient-to-l from-transparent/30 via-transparent/50 to-transparent/30 bg-blend-screen"></div>

				<StaticImg
					fill
					src="/HomeCTA.jpg"
					alt=""
					className="h-full w-full -z-10 object-cover object-top"
				/>
			</div>
		</Bounded>
	);
};

export default CTASection;
