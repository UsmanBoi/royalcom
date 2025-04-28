"use client";
import React from "react";
import Image from "next/image";
import CTAButton from "./CTAButton";

const projectData = [
	{ title: "happy clients", amount: "500+" },
	{ title: "projects delievered", amount: "750+" },
	{ title: "workforce", amount: "50+" },
];

const ContentImage = ({
	type = "", //used on which page
	ContentHeading,
	paraClass,
	headingClass,
	reverse,
	containerClass = "",
	extraContent = "",
	imgurl,
	imgClass,
	imgSizes,
	imgContainer,
	imgStyles,
	additional,
}) => {
	return (
		<section className={`my-8 lg:my-16 2xl:my-20 2xl:mb-40 ${containerClass}`}>
			<div
				className={`grid ${
					type === "notoverlap"
						? "gap-4 lg:gap-8 grid-cols-[1fr_1fr] lg:grid-cols-[2fr_1fr]"
						: type === "overlap"
						? "gap-4 lg:gap-8 max-sm:grid-rows-[1fr_full]  lg:grid-cols-[1fr_1fr]"
						: type === "dataAnalytics"
						? "gap-4 lg:grid-cols-[1fr_1fr]"
						: ""
				}  `}
			>
				{/* Content Section */}
				<div
					className={`${
						reverse === "true" ? "lg:order-2" : "lg:order-1"
					} flex flex-col h-full max-sm:gap-4 gap-6 max-sm:justify-center pt-4 xl:py-8 pr-6`}
				>
					<h2 className={`${headingClass}  font-bold`}>
						{ContentHeading}
					</h2>
					{extraContent === "a" ? (
						<>
							<p className={paraClass}>
								we eagerly anticipate weaving vibrant connections with small and
								local enterprises, crafting partnerships that resonate with
								significance, and witnessing our clients&apos; triumphs soar to
								new heights. <br /> <br /> In our journey ahead, we yearn to
								cross paths with kindred spirits visionary, motivated, and
								fervent business owners who mirror the enthusiasm we&apos;ve
								relished in our collaborative endeavors.
							</p>
							<div className="flex max-sm:flex-col max-sm:gap-6 items-start gap-10 xl:gap-6 w-full justify-between pt-4 xl:py-12">
								{projectData.map((item) => (
									<div key={item.title} className="flex flex-col gap-1 ">
										<span className=" text-3xl lg:text-5xl xl:text-7xl 2xl:text-[5.125rem] font-bold text-blue-200 max-w-fit">
											{item.amount}
										</span>
										<span className=" text-xl xl:text-2xl 2xl:text-[1.75rem] font-medium tracking-wide ">
											{item.title}
										</span>
									</div>
								))}
							</div>
						</>
					) : extraContent === "b" ? (
						<>
							<p className="text-xl lg:text-2xl 2xl:text-[1.75rem]  tracking-wide">
								Our journey with clients is more than just a transaction; it's a
								seamless integration of creativity, expertise, and a shared
								commitment to excellence. We pride ourselves on being the
								catalysts that propel your brand to new heights.
							</p>
							<CTAButton text="Let's talk" />
						</>
					) : extraContent === "c" ? (
						<>
							<p className="text-lg lg:text-xl 2xl:text-2xl  tracking-wide max-sm:pr-14 max-sm:w-96">
								Going beyond mere insights, we breathe life into your data with
								interactive data visualization tools, making complex information
								easily digestible and fostering a deeper understanding of your
								business landscape. Our analytics services are scalable to meet
								the evolving needs of startups and enterprises alike, offering a
								robust infrastructure from data collection and processing to
								advanced analytics. <br />
								<br />
								What sets us apart is our commitment to delivering actionable
								outcomes. Our analytics isn't just about numbers; it's about
								providing clear, concise recommendations derived from data
								insights. This empowers you to make informed decisions that
								directly impact your bottom line. Trust is paramount in handling
								data, and we prioritize the security and confidentiality of your
								information, adhering to industry best practices and compliance
								standards to ensure the integrity of your data.
							</p>
							<CTAButton text="Let's talk" />
						</>
					) : (
						""
					)}
				</div>

				{/* Image Section */}
				<div
					className={`${imgContainer} relative ${
						reverse === "true" ? "lg:order-1" : "lg:order-2"
					}`}
				>
					<div
						className={`${
							type === "overlap" && reverse !== "true"
								? "lg:absolute relative top-0 lg:-right-20 xl:-right-32 lg:left-auto"
								: type === "overlap" && reverse === "true"
								? "lg:absolute relative top-0 lg:-left-20 xl:-left-40 lg:right-auto"
								: "relative"
						} ${additional}`}
						style={imgStyles}
					>
						<Image
							src={imgurl}
							alt="designer img"
							fill
							priority
							sizes={imgSizes}
							className={imgClass}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContentImage;
