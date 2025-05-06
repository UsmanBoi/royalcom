import StaticImg from "../../components/ui/StaticImg";
import { paddingClass, serviceData } from "../../constants";
import SecHero from "../../components/SecHero";

export async function generateStaticParams() {
	// Generate dynamic paths from serviceData
	return serviceData.map((service) => ({
		slug: service.slug,
	}));
}

const serviceDetailPage = ({ params }) => {
	const { slug } = params;

	// Find the specific service by its slug
	const service = serviceData.find((item) => item.slug === slug);

	if (!service) {
		// Fallback for unmatched slugs
		return <div className="text-center mt-20">service not found!</div>;
	}

	return (
		<div
			className={`flex flex-col w-full h-full gap-5 mb-5 items-center justify-center ${paddingClass}`}
		>
			<SecHero
				containerClass="max-sm:gap-0 py-10 max-sm:h-[17em]"
				HeroContentClass="max-sm:gap-y-8"
				headingClass="max-xs:text-4xl xs:text-[36px] leading-[120%] max-sm:max-w-72"
				heading={service.title}
				withImage={false}
				subheading={service.headline}
			/>
			<div className="flex h-auto min-w-fit items-center py-5 2xl:justify-center">
				<div className="grid sm:grid-cols-[1fr_1fr] max-sm:grid-rows-3 sm:grid-rows-[12rem_1fr_12rem] max-sm:gap-x-0 gap-6 relative max-sm:w-[90vw] h-full xl:justify-items-center xl:place-self-center 2xl:max-w-screen-2xl 3xl:max-w-screen-2xl">
					{service.content.map((content, i) => (
						<div
							className={`flex flex-col gap-3 py-2 ${
								i === 0
									? "sm:col-start-1 sm:row-start-1 lg:pr-20"
									: i === 1
										? "sm:col-start-2 sm:row-start-2 items-end lg:pl-20"
										: i === 2
											? "sm:col-start-1 sm:row-start-3 lg:pr-20 justify-end"
											: ""
							} ${i % 2 === 1 ? "slide-in-right" : "slide-in-left"}`}
							key={i}
							style={{
								transitionDelay: `${
								 150 + i * 120
								}ms`,
							}}
						>
							<p className={`sm:text-lg max-sm:w-80`}>{content}</p>
						</div>
					))}
					<div className="w-full h-60 lg:h-80 relative max-sm:hidden sm:col-start-1 sm:row-start-2">
						<StaticImg
							// fill
							src={service.imgPath}
							alt={service.title}
							className="w-full expand-height h-full rounded-lg object-cover object-center "
						/>
					</div>
				</div>
			</div>
			<div className="flex max-sm:text-sm  tracking-tight justify-between w-full font-medium text-white-200"></div>
		</div>
	);
};

export default serviceDetailPage;
