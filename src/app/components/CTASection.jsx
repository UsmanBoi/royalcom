import React from "react";
import Bounded from "./ui/Bounded";
import Link from "next/link";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";

const CTASection = () => {
	return (
		<Bounded
			className={`relative flex h-auto min-w-fit items-center py-10 text-mywhite-50 lg:py-20`}
		>
			<div className={`flex flex-col gap-y-8 py-10 lg:py-20 z-10`}>
				<h1
					className={`h-fit w-96 text-3xl sm:w-[38rem] lg:text-4xl 2xl:text-5xl 3xl:text-6xl max-sm:pr-6`}
					style={{ wordSpacing: "0.1em" }}
				>
					Let&apos;s Start A Conversation To Discuss Your Next Best Business
					Move
				</h1>

				<div className="flex min-w-96 items-center text-2xl transition-all duration-300 ease-in-out xl:text-3xl">
					<button type="button" className={`w-fit`}>
						<Link href="/">
							{/* Button text */}
							<span className="text-lg">Get Started</span>
						</Link>
					</button>
					<GoArrowRight
						className={`w-12 transition-all duration-300 ease-in-out`}
					/>
				</div>
			</div>
			<div className="absolute left-0 top-0  h-full w-full">
				<div className="absolute inset-0 -z-0 bg-gradient-to-l from-transparent/30 via-transparent/50 to-transparent/30 bg-blend-screen"></div>

				<Image
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
