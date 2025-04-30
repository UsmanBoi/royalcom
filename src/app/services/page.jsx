import React from "react";
import Services from "../components/Services";
import SecHero from "../components/SecHero";

const ServicePage = () => {
	return (
		<section className="mb-20">
			<SecHero
				heading="Our Services"
				subheading="A new deep end of relationship. Pinned on an all too rare privilege: the people we introduce you to are the ones who actually conduct your search."
				containerClass="pb-3"
				img1src="/CSR.jpg"
				img2src="/group.jpg"
			/>
			<Services
				pagetype="services"
				variation="default"
				containerClass="flex h-[39rem] w-screen items-start gap-y-12 py-0 md:h-[36rem] sm:gap-y-20 pt-12 2xl:justify-center"
			/>
		</section>
	);
};

export default ServicePage;
