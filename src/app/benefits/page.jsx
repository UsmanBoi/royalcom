import React from "react";
import SecHero from "../components/SecHero";
import Benefits from "../components/Benefits";

const BenefitsPage = () => {
	return (
		<section className="flex flex-col">
			<SecHero
				heading="Our Benefits"
				subheading="RoyalCom provides many benefits that includes cost efficiency, scalable infrastructures, clean billing and improved patient satisfaction"
				img1src="/group.jpg"
				img2src="/group.jpg"
			/>

			<Benefits
				variation="default"
				containerClass="h-[50rem] lg:h-[40rem] w-full flex w-screen my-20 justify-center h-full xl:items-center py-5 2xl:justify-center"
			/>
		</section>
	);
};

export default BenefitsPage;
