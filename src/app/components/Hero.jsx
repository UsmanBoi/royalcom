import Link from "next/link";
import Bounded from "./ui/Bounded";
import { GoArrowRight } from "react-icons/go";
import Image from "next/image";


const Hero = ({ heading = "Increase your medical practice revenue by 30% in 3 months", tagline = "RoyalComSol specializes in medical billing and Revenue Cycle Management (RCM), providing services including clean billing using modern coding tools, accurate reimbursements, reduced claim denials, risk of errors and improve your overall revenue system." }) => (
  <Bounded
    className="flex  w-screen flex-col justify-center pb-16 pt-10 text-myblack-150 md:min-h-80 md:flex-row xl:items-center max-sm:gap-y-14 max-md:gap-20"
  >
    <div className="relative grid h-full w-full gap-y-16 md:min-h-80 md:grid-cols-[2fr_1fr] lg:grid-cols-[2fr_1fr] xl:justify-items-center xl:place-self-center 2xl:max-w-screen-2xl 2xl:py-20 3xl:max-w-screen-2xl max-md:grid-rows-[1fr_1fr]">
      {/* Content */}
      {/* className={`absolute left-2 top-1/3 -z-10 mr-20 flex h-auto w-fit max-w-[30rem] -translate-y-1/2 flex-col justify-center gap-2 rounded-lg bg-gradient-to-br from-blue-100/50 via-blue-300/10 to-blue-300/10 p-6 shadow-lg backdrop-blur-[6px] sm:gap-4 lg:left-16 lg:mr-0 lg:max-w-[36rem] xl:max-w-[45rem] 2xl:max-w-[52rem]`} */}
      <div
        className={`flex h-auto w-fit flex-col justify-center place-self-start gap-6 rounded-lg sm:gap-y-10 max-sm:w-96`}
      >
        <div className="flex flex-col gap-y-14 ">
          <h1 className="text-3xl -ml-0.5 lg:-ml-[0.8%] tracking-[-4%] sm:max-w-[26rem] sm:text-[40px] sm:leading-[120%] md:max-w-[26rem] md:leading-[120%] lg:max-w-[36rem] lg:text-[56px] lg:font-light xl:max-w-[40rem] xl:text-[62px] 2xl:max-w-[52rem] 3xl:text-[80px] max-xs:pr-12 max-sm:w-[22rem] max-sm:leading-[1.35]">
            {heading}
          </h1>
          <h2 className="w-full text-sm font-normal sm:max-w-md lg:max-w-xl lg:text-base 2xl:text-lg max-sm:max-w-80">
            {tagline}
          </h2>
        </div>
        <div className="flex w-fit items-center">
            <Link href="/contact" >
              <button
                
                className={`flex h-10 w-fit items-center gap-1 rounded-full bg-blue-500 px-2.5`}
              >
                <span className="pl-1.5 font-semibold">Get Started Today</span>
                <GoArrowRight className="w-8 text-xl" />
              </button>
            </Link>
        </div>
      </div>

      {/* Hero Images  */}
      <div className="relative flex min-h-80 w-full justify-end max-sm:min-h-[16rem] max-sm:items-end">
        {/* <div className="absolute inset-0 z-0 bg-gradient-to-l from-mywhite-200/5 via-mywhite-200/10 to-mywhite-200/20 bg-blend-screen"></div> */}

        <div className="relative min-h-full w-full max-w-[30rem]">
          <Image
		    alt="hero Image describing business environment"
		    width={200}
			height={200}
            priority
            src="/auth.jpg"
            className="absolute right-0 top-0 h-[19rem] w-[14.25rem] rounded-sm object-contain object-center sm:w-[22rem] lg:w-[14.25rem]"
          />

          <Image
		    alt="hero Image describing telesupport services"
		    width={200}
			height={200}
            priority
            src="/auth1.jpg"
            className="absolute bottom-0 left-0 h-[14.25rem] w-[14.25rem] rounded-sm object-contain object-center"
          />
        </div>
      </div>
    </div>
  </Bounded>
);

export default Hero;