"use client";
import React from "react";
import CTAButton from "./ui/CTAButton";
import {
	GraphIcon,
	WebIcon,
	MicIcon,
	MagnifyIcon,
	ChatIcon,
	LogoIcon,
} from "./ui/SvgIcons";

const SecHero = ({
	heading = "website development",
	subheading = "",
	description = "",
	// breakWord = null, // optional custom word to break the heading at
	HeroSvg,
	// buttonOnClick = () => {},
	CTA,
	CTAtext = "Let's talk",
}) => {
	const splitHeading = () => {
		// Split heading into words
		const words = heading.split(" ");

		// Determine break point based on word count
		let breakIndex;
		if (words.length <= 2) {
			breakIndex = 1; // Break after the first word if only 2 words
		} else {
			breakIndex = 3; // Break after the third word for 3+ words
		}

		// Join words before and after the break index
		const firstPart = words.slice(0, breakIndex).join(" ");
		const secondPart = words.slice(breakIndex).join(" ");

		return (
			<>
				<span
					className={`${
						HeroSvg === "magnify" ? "xl:text-[120px]" : ""
					} font-thin`}
				>
					{firstPart}
				</span>
				<br />
				<span className={`${HeroSvg === "magnify" ? "2xl:text-[10rem]" : ""}`}>
					{secondPart}
				</span>
			</>
		);
	};

	return (
		<section className="max-sm:py-6 py-8 lg:py-10 space-y-8 ">
			<div className="grid sm:grid-cols-[2fr_1fr] space-y-4  max-sm:gap-y-8">
				{/* need improvement on text-size */}
				{/* <div className=""> */}
				<h1 className="max-sm:order-2 text-5xl sm:self-center sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[11rem] font-bold tracking-tight ">
					{splitHeading()}
				</h1>
				{/* </div> */}
				<div className="relative flex min-w-60 items-center sm:self-center justify-center max-sm:justify-end max-sm:order-1">
					{/* <div className="relative flex min-w-28 min-h-28 md:min-w-40 md:min-h-40 lg:min-w-52 lg:min-h-52 2xl:min-w-80 2xl:min-h-80"> */}
					{HeroSvg === "web" ? (
						<WebIcon />
					) : HeroSvg === "mic" ? (
						<MicIcon />
					) : HeroSvg === "graph" ? (
						<GraphIcon />
					) : HeroSvg === "magnify" ? (
						<MagnifyIcon />
					) : HeroSvg === "chat" ? (
						<ChatIcon />
					) : HeroSvg === "logo" ? (
						<LogoIcon />
					) : (
						""
					)}
				</div>
			</div>
			<p className="text-2xl lg:text-4xl   max-w-xl lg:max-w-3xl xl:max-w-5xl">
				{subheading}
			</p>
			<p className="max-md:line-clamp-6 tracking-wide xl:max-w-4xl 2xl:max-w-screen-xl font-thin lg:text-xl leading-relaxed ">
				{description}
			</p>
			<div className="mt-10">
				{CTA === "button" ? <CTAButton text={CTAtext} /> : ""}
			</div>
		</section>
	);
};

export default SecHero;
