"use client";
import React from "react";
import Hero from "./components/Hero";
import Faqs from "./components/Faqs";
import CTASection from "./components/CTASection";
import About from "./components/About";
import Services from "./components/Services";


export default function Home() {
	return (
		<section className="flex flex-col h-full">
			<Hero />
			<About/>
			
			<Services variation="homeService"/>
			<Faqs/>
			<CTASection/>
		</section>
	);
}
