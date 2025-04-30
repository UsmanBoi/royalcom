import React from "react";
import Faqs from "../components/Faqs";
import About from "../components/About";
import SecHero from "../components/SecHero";

const AboutPage = () => {
	return (
		<section className="my-8 flex flex-col 2xl:my-16">
			<SecHero
				heading="About RoyalCom"
				subheading="Royal Com Solutions is a leading organization that offers custom BPO strategies to enhance patient interactions, boost efficiency, and drive revenue growth."
				img1src="/group.jpg"
				img2src="/group.jpg"
			/>
			<About />
			<Faqs />
		</section>
	);
};

export default AboutPage;
