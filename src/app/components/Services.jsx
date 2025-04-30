import { secHeading, serviceData } from "../constants";
import ServiceCard from "../components/ui/ServiceCard";
import Bounded from "../components/ui/Bounded";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const Services = ({ variation, containerClass = "" }) => {
	return variation === "homeService" ? (
		<Bounded className={`${containerClass}`}>
			<div className="flex relative max-sm:flex-col h-full gap-y-6 w-screen sm:justify-between max-w-full 2xl:max-w-screen-2xl 3xl:max-w-screen-2xl">
				<h1
					className={`${secHeading} h-fit max-sm:max-w-[28rem]`}
					style={{ wordSpacing: "0.1em" }}
				>
					Our Services
				</h1>
				<div className="flex justify-between items-center max-w-32 sm:max-w-40 w-full max-h-32">
					<GoArrowLeft className="text-4xl sm:text-5xl w-12" />
					<GoArrowRight className="text-4xl sm:text-5xl w-12" />
				</div>
				<ServiceCard
					pagetype="services"
					cardData={serviceData}
					gridClass="absolute w-screen bottom-0 left-0 max-w-[130em] w-full"
					cardClass="flex h-full min-h-[25rem] w-full max-w-[355px] flex-shrink-0 snap-start flex-col items-center justify-between gap-y-2 border border-myblack-150/30 transition-all duration-300 ease-in-out sm:max-w-sm xl:max-w-[400px] 2xl:max-w-md 3xl:max-w-lg"
				/>
			</div>
		</Bounded>
	) : variation === "default" ? (
		<Bounded className={`${containerClass}`}>
			<div className="flex relative max-sm:flex-col h-full gap-y-6 w-screen sm:justify-between max-w-full 2xl:max-w-screen-2xl 3xl:max-w-screen-2xl">
				<h1
					className={`${secHeading} h-fit max-sm:max-w-[28rem]`}
					style={{ wordSpacing: "0.1em" }}
				>
					Discover Our Services
				</h1>
				<div className="flex justify-between items-center max-w-32 sm:max-w-40 w-full max-h-32">
					<GoArrowLeft className="text-4xl sm:text-5xl w-12" />
					<GoArrowRight className="text-4xl sm:text-5xl w-12" />
				</div>
				<ServiceCard
					pagetype="services"
					cardData={serviceData}
					gridClass="absolute w-screen bottom-0 left-0 max-w-[130em] w-full"
					cardClass="flex h-full min-h-[25rem] w-full max-w-[355px] flex-shrink-0 snap-start flex-col items-center justify-between gap-y-2 border border-myblack-150/30 transition-all duration-300 ease-in-out sm:max-w-sm xl:max-w-[400px] 2xl:max-w-md 3xl:max-w-lg"
				/>
			</div>
		</Bounded>
	) : (
		""
	);
};

export default Services;
