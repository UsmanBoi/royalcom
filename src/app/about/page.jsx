import React from "react";
import Faqs from "../components/Faqs";
import About from "../components/About";
import SecHero from "../components/SecHero";

const AboutPage = () => {
	return (
			<section className="my-8 flex flex-col 2xl:my-16">
				<SecHero heading="About RoyalCom" subheading="" img1src="/group.jpg" img2src="/group.jpg"/>
				<About/>
				<Faqs />
			</section>

	);
};

export default AboutPage;
