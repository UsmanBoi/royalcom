"use client";
import React from "react";
import Hero from "./components/Hero";
import Faqs from "./components/Faqs";
import About from "./components/About";
import Services from "./components/Services";
import Benefits from "./components/Benefits";

export default function Home() {
	return (
		<section className="flex flex-col h-full ">
			<Hero />
			<About />
			<Services
				variation="homeService"
				containerClass="relative flex h-[35rem] w-screen items-start pt-[5rem] lg:h-[44rem] lg:pb-24 2xl:justify-center "
			/>
			<Benefits variation="homeBenefits" />
			<Faqs />
		</section>
	);
}
