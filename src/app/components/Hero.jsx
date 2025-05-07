import Link from "next/link";
import Bounded from "./ui/Bounded";
import { GoArrowRight } from "react-icons/go";
import StaticImg from "./ui/StaticImg";

const Hero = () => (
	<Bounded className="flex w-screen flex-col justify-center pb-16 pt-7 sm:pt-10 md:min-h-[30em] lg:min-h-[35em] md:flex-row md:items-center">
		{/* GRID */}
		<div className="relative grid h-full w-full gap-y-6 md:min-h-[26em] md:grid-cols-[2fr_22rem] max-lg:gap-x-4 lg:grid-cols-[2fr_1fr] xl:justify-items-center xl:place-self-center 2xl:max-w-screen-2xl 2xl:pb-20 2xl:pt-4 3xl:max-w-screen-2xl max-md:grid-rows-[1fr_1fr]">
			{/* Content */}
			<div
				className={`flex relative h-auto w-fit flex-col justify-center place-self-start gap-y-9 rounded-lg md:gap-y-20 max-sm:w-96`}
			>
				{/* <div
					className={`absolute  top-1/2 -z-10  flex max-sm:w-screen min-w-full min-h-full -translate-y-1/2 flex-col justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-400/30  via-blue-100  to-blue-50 py-4 box-content shadow-lg backdrop-blur-[6px] sm:gap-4 -left-[5%]`}
				/> */}
				<div className="flex w-fit items-center">
					<h1 className="fade-up text-[36px] -ml-0.5 lg:-ml-[0.8%] tracking-[-4%] sm:max-w-[26rem] sm:text-[40px] md:max-w-[26rem] leading-[120%] lg:max-w-[36rem] lg:text-[56px] lg:font-light xl:max-w-[40rem] xl:text-[62px] 2xl:max-w-[52rem] 3xl:text-[80px] max-xs:pr-12 max-sm:w-[22rem]">
						Increase your medical practice revenue by
						<span className="text-[#236BFE] tracking-tighter"> 30% </span>in 3
						months
					</h1>
				</div>
				{/* content with button */}
				<div className="flex flex-col gap-y-2.5">
					<h2 className="fade-up w-full text-sm sm:max-w-md lg:max-w-xl lg:text-base 2xl:text-lg max-sm:max-w-80 font-normal">
						Royal Com Solutions is a leading organization that offers custom BPO
						strategies and services including clean billing, claim denial managament and accurate reimbursements that enhance patient interactions, boost efficiency, and drive revenue growth.
					</h2>

					{/* CTA BUTTON */}
					<Link href="/contact">
						<button className={`slide-in-left flex h-10 w-fit items-center gap-1 font-bold`}>
							<span className="pl-0.5 ">Get Started Today</span>
							<GoArrowRight className="w-8 text-2xl" />
						</button>
					</Link>
				</div>
			</div>

			{/* Hero Images  */}
			<div className="relative flex min-h-80 w-full justify-center xs:justify-end max-sm:min-h-[24rem] max-sm:items-end">
				{/* <div className="absolute inset-0 z-0 bg-gradient-to-l from-mywhite-200/5 via-mywhite-200/10 to-mywhite-200/20 bg-blend-screen"></div> */}

				<div className="relative max-lg:min-h-full lg:max-h-[27rem] 2xl:max-h-[30rem] w-full max-w-[320px] xs:max-w-sm 2xl:max-w-md">
					{/* First */}
					<StaticImg
						alt="hero Image describing business environment"
						width={300}
						height={300}
						src="/building2.jpg"
						className="absolute slide-in-right right-0 top-8 xs:top-0 lg:top-3 xs:h-[19rem] xs:w-[14.25rem] h-56 w-44 rounded object-cover object-center lg:w-[14.25rem] 2xl:h-[23.5rem] 2xl:w-[17.5rem]"
					/>
					{/* second */}
					<StaticImg
						alt="hero Image describing telesupport services"
						width={300}
						height={300}
						src="/group.jpg"
						className="absolute slide-in-left bottom-12 xs:bottom-4 2xl:-bottom-[20%] left-4 xs:left-0 lg:left-2 w-44 h-44 xs:h-[14.25rem] xs:w-52 lg:w-[14.25rem] 2xl:w-[17.5rem] 2xl:h-[17.5rem] rounded object-cover object-center"
					/>
				</div>
			</div>
		</div>
	</Bounded>
);

export default Hero;
