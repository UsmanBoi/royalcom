import Link from "next/link";
import React from "react";

const CTAButton = ({ text, url = "/contact", buttonType = "button" }) => {
	return (
		<div className="my-3">
			<button
				type={buttonType}
				className="cta-button relative inline-block overflow-hidden border-2 border-blue-200 bg-black px-8 py-3 sm:px-10 sm:py-4 2xl:px-14 2xl:py-5 text-white font-bold text-base sm:text-lg lg:text-xl cursor-pointer group"
			>
				<Link href={url}>
					{/* Button text */}
					<span className="relative z-10 transition-all duration-300 ease-[cubic-bezier(0.3,1,0.3,1)]  group-hover:text-black">
						{text}
					</span>
					{/* Background effect yes*/}
					<span className="absolute inset-0 bg-blue-200 translate-y-full transition-all duration-500 ease-[cubic-bezier(0.3,1,0.3,1)] group-hover:translate-y-0" />
				</Link>
			</button>
		</div>
	);
};

export default CTAButton;
