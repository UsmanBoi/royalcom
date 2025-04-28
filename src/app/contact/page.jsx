import React from "react";
import SecHero from "../components/SecHero";
import FormComp from "../components/FormComp";

const contactPage = () => {
	return (
		<div>
			<SecHero heading="it's time to connect" subheading="" description="" />
			<FormComp
				label1="full name"
				label2="company / organization"
				label3="your goal"
			/>
		</div>
	);
};

export default contactPage;
