import React from "react";
import Services from "../components/Services";
import SecHero from "../components/SecHero";
import Bounded from "../components/ui/Bounded";

const ServicePage = () => {
	return (
		<>
			<section className="mb-10">
				<SecHero heading="Our Services" subheading="A new deep end of relationship. Pinned on an all too rare privilege: the people we introduce you to are the ones who actually conduct your search." img1src="/efficiency.png" img2src="/efficiency.png"/>
				<Services pagetype="services" variation="default"/>
			</section>
		</>
	);
};

export default ServicePage;
