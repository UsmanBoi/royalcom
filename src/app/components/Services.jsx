import { secHeading, serviceData} from "../constants";
import ServiceCard from "../components/ui/ServiceCard";
import Bounded from "../components/ui/Bounded";

const Services = ({ variation }) => {
  return variation === "homeService" ? (
    <Bounded
      className={`relative flex h-[36rem] w-screen items-start gap-y-16 py-14 sm:h-[40rem] sm:gap-y-20 lg:py-20 2xl:justify-center`}
    >
      <div className="flex w-screen max-w-full 2xl:max-w-screen-xl 3xl:max-w-screen-2xl">
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
        gridClass="absolute w-screen bottom-4 left-[4.5%] 2xl:left-[10%] 3xl:left-[17%] w-full"
        cardClass=""
      />
    </Bounded>
  ) : variation === "default" ? (
    <Bounded className="flex flex-col gap-5 pb-20">
      <h1 className={`${secHeading} pt-5`}>Our Services</h1>
        <ServiceCard
          pagetype="services"
          cardData={serviceData}
          gridClass="grid h-full place-items-center gap-x-4 gap-y-6 justify-self-center md:gap-x-6 lg:gap-y-12  xl:gap-x-12 2xl:gap-y-[4.25rem]"
          cardClass=""
        />
    </Bounded>
  ) : (
    ""
  );
};

export default Services;