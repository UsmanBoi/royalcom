import { secHeading, serviceData } from "../constants";
import ServiceCard from "../components/ui/ServiceCard";
import Bounded from "../components/ui/Bounded";

const Services = ({ variation, containerClass = "" }) => {
	return variation === "homeService" ? (
		<Bounded className={`${containerClass} max-sm:mb-16`}>
			<div className="flex max-sm:flex-col relative max-sm:h-[33rem] h-full gap-y-5 w-screen sm:justify-between max-w-full 2xl:max-w-screen-2xl 3xl:max-w-screen-2xl">
				<h1
					className={`${secHeading} slide-in-left h-fit max-sm:max-w-[28rem]`}
					style={{ wordSpacing: "0.1em" }}
				>
					Our Services
				</h1>
				<ServiceCard
					pagetype="services"
					cardData={serviceData}
					gridClass="absolute w-screen bottom-0 left-0 2xl:min-w-[130em] w-full"
					cardClass="flex h-full min-h-[25rem] w-full max-w-[355px] flex-shrink-0 snap-start flex-col items-center justify-between gap-y-2 border border-myblack-150/30 transition-all duration-300 ease-in-out sm:max-w-sm xl:max-w-[400px] 2xl:max-w-md 3xl:max-w-lg"
				/>
			</div>
		</Bounded>
	) : variation === "default" ? (
		<Bounded className={`${containerClass}`}>
			<div className="flex relative max-sm:flex-col h-full gap-y-6 w-screen sm:justify-between max-w-full 2xl:max-w-screen-2xl 3xl:max-w-screen-2xl">
				<h1
					className={`${secHeading} fade-up h-fit max-sm:max-w-[28rem]`}
					style={{ wordSpacing: "0.1em" }}
				>
					Discover Our Services
				</h1>

				<ServiceCard
					pagetype="services"
					cardData={serviceData}
					gridClass="absolute w-screen bottom-0 left-0 2xl:min-w-[130em] w-full"
					cardClass="flex h-full min-h-[25rem] w-full max-w-[355px] flex-shrink-0 snap-start flex-col items-center justify-between gap-y-2 border border-myblack-150/30 transition-all duration-300 ease-in-out sm:max-w-sm xl:max-w-[400px] 2xl:max-w-md 3xl:max-w-lg"
				/>
			</div>
		</Bounded>
	) : (
		""
	);
};

export default Services;
