import React from "react";
import Faqs from "../components/Faqs";
import About from "../components/About";
import SecHero from "../components/SecHero";

const AboutPage = () => {
	return (
		<section className="">
			<SecHero
				heading="About RoyalCom"
				subheading="Royal Com Solutions is a leading organization that offers custom BPO strategies to enhance patient interactions, boost efficiency, and drive revenue growth."
				img1src="/building.jpg"
				img2src="/hospital.jpg"
			/>
			<About />
			<Faqs />
		</section>
	);
};

export default AboutPage;
