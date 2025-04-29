import { secHeading, serviceData} from "../constants";
import ServiceCard from "../components/ui/ServiceCard";
import Bounded from "../components/ui/Bounded";

const Services = ({ variation }) => {
  return variation === "homeService" ? (
    <Bounded
      className={`relative flex h-[36rem] w-screen items-start py-14 sm:h-[40rem] lg:py-20 2xl:justify-center`}
    >
      <div className="flex w-screen max-w-full 2xl:max-w-screen-2xl 3xl:max-w-screen-2xl">
        <h1
          className={`${secHeading} h-fit`}
          style={{ wordSpacing: "0.1em" }}
        >
          Our Services
        </h1>
      </div>
      <ServiceCard
        pagetype="homePage"
        cardData={serviceData}
        gridClass="absolute w-screen left-0 bottom-8 w-full"
        cardClass="flex h-full min-h-[25rem] w-full max-w-[355px] flex-shrink-0 snap-start flex-col items-center justify-between gap-y-2 border border-myblack-150/30 transition-all duration-300 ease-in-out sm:max-w-sm xl:max-w-[400px] 2xl:max-w-md 3xl:max-w-lg"
      />
    </Bounded>
  ) : variation === "default" ? (
     <Bounded className="relative flex h-[36rem] w-screen items-start gap-y-12 py-14 sm:h-[40rem] sm:gap-y-20 lg:py-20 2xl:justify-center">
            <div className="flex w-screen max-w-full 2xl:max-w-screen-2xl 3xl:max-w-screen-2xl">

      <h1
          className={`${secHeading} h-fit max-w-[28rem]`}
          style={{ wordSpacing: "0.1em" }}
        >
          Discover Our Services
        </h1>
        </div>
        <ServiceCard
          pagetype="services"
          cardData={serviceData}
          gridClass="absolute w-screen bottom-0 w-full"
          cardClass="flex h-full min-h-[25rem] w-full max-w-[355px] flex-shrink-0 snap-start flex-col items-center justify-between gap-y-2 border border-myblack-150/30 transition-all duration-300 ease-in-out sm:max-w-sm xl:max-w-[400px] 2xl:max-w-md 3xl:max-w-lg"
        />

    </Bounded>
  ) : (
    ""
  );
};

export default Services;