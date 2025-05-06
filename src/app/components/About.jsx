import React from "react";
import StaticImg from "./ui/StaticImg";

const About = () => {
	return (
		<div className="flex 2xl:min-h-[50rem] h-auto w-full items-center xs:justify-center bg-myblack-150 px-4 py-8 text-mywhite-50 sm:py-16 md:px-6 lg:px-12 xl:px-16 2xl:py-[4.5rem]">
			<div className="relative grid h-full w-full max-xs:max-w-[22em] gap-x-32 2xl:gap-x-44 gap-y-10 lg:grid-cols-[1fr_1fr] xl:justify-items-center xl:place-self-center 2xl:max-w-screen-2xl 3xl:max-w-screen-2xl">
				<div className="flex h-full w-full flex-col justify-between gap-8">
					<h1
						className={`fade-up w-fit text-start text-3xl font-light text-mywhite-50/50 lg:text-4xl 2xl:text-5xl`}
						style={{ wordSpacing: "0.1em" }}
					>
						About Us
					</h1>
					<StaticImg
						// fill
						src="/about.jpg"
						alt=""
						className="h-[25rem] expand-width max-xs:w-fit xs:max-w-[24em] lg:max-w-full rounded object-cover object-center lg:h-[83%]"
					/>
				</div>

				{/* DIVIDER */}
				<div className="absolute left-1/2 top-0 h-full w-1 bg-gray-500 max-lg:hidden"></div>

				<div className="flex h-full w-full xs:max-w-md flex-col gap-4 text-sm font-light xs:pr-16 sm:pr-0 sm:place-self-end md:text-base lg:max-w-3xl lg:place-self-start max-sm:py-6">
					<h2 className="text-4xl slide-in-left text-mywhite-50 font-light tracking-[-0.025em] xl:text-6xl 2xl:text-7xl pb-2">
						Our Story
					</h2>

					<p className="fade-up text-sm leading-relaxed lg:text-base 2xl:text-lg">
						RoyalComSol provides end-to-end revenue cycle solutions—from front
						desk support to clean back-end billing. Our services include patient
						scheduling, insurance verification, credentialing, claims
						processing, and denial management. We help healthcare firms and
						providers enhance their operational efficiency, reduce the risk of
						errors, and secure accurate reimbursements with full confidence.
					</p>

					<ul className="fade-up list-disc pl-8 py-1 text-sm  md:text-base 2xl:text-lg">
						<li className="my-1.5">Worldwide Clients</li>
						<li className="my-1.5">24/7 Support</li>
						<li className="my-1.5">Dedicated Team Members</li>
					</ul>
					<p className="fade-up text-sm leading-relaxed md:text-base 2xl:text-lg">
						We are a team of experienced professionals committed to simplifying
						your revenue cycle management. With vast expertise, we are dedicated
						to helping healthcare providers enhance efficiency, reduce claim
						denials, and achieve financial stability. Our team focuses on
						accurate claim submissions. We manage the system of your revenue
						cycle—from credentialing to payments—allowing you to focus on
						delivering quality care while we handle the financial aspects.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
