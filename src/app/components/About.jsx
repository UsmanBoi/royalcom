import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div
    className="flex 2xl:min-h-[50rem] h-auto w-full flex-col items-center justify-center bg-myblack-150 px-4 py-8 text-mywhite-50 sm:py-16 md:px-6 lg:px-12 xl:px-16 2xl:py-[4.5rem]"
  >
    <div className="relative grid h-full w-full gap-x-32 2xl:gap-x-44 gap-y-10 lg:grid-cols-[1fr_1fr] xl:justify-items-center xl:place-self-center 2xl:max-w-screen-2xl 3xl:max-w-screen-2xl">
      <div className="flex h-full w-full flex-col gap-8">
        <h1
          className={`w-fit text-start text-3xl font-extralight opacity-40 text-mywhite-50/70 lg:text-4xl 2xl:text-5xl`}
          style={{ wordSpacing: "0.1em" }}
        >
          About Us
        </h1>
        <div className="relative h-[25rem] w-full lg:min-h-[32rem] max-lg:max-w-[24rem]">
          <Image
           fill
            src="/about.jpg"
            alt=""
            className="h-[25rem] rounded object-cover object-center lg:h-96"
          />
        </div>
      </div>
      <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-500 max-lg:hidden"></div>

      <div className="flex h-full max-w-lg flex-col gap-4 text-sm font-light max-md:pr-16 sm:place-self-end md:text-base lg:max-w-3xl lg:place-self-start max-sm:py-6">
        <h2 className='text-4xl -ml-0.5 text-mywhite-50 lg:-ml-1.5 font-normal xl:text-6xl 2xl:text-7xl pb-2'>
         Our Story
        </h2>

        <p className='text-sm leading-relaxed md:text-base 2xl:text-lg'>
        RoyalComSol provides end-to-end revenue cycle solutions—from front desk support to clean back-end billing. Our services include patient scheduling, insurance verification, credentialing, claims processing, and denial management. We help healthcare firms and providers enhance their operational efficiency, reduce the risk of errors, and secure accurate reimbursements with full confidence.
        </p>

        <ul className='list-disc pl-8 py-1 text-sm  md:text-base 2xl:text-lg'>
                <li className='my-1.5'>Worldwide Clients</li>
                <li className='my-1.5'>24/7 Support</li>
                <li className='my-1.5'>Dedicated Team Members</li>
        </ul>
        <p className='text-sm leading-relaxed md:text-base 2xl:text-lg'>
        We are a team of experienced professionals committed to simplifying your revenue cycle management. With vast expertise, we are dedicated to helping healthcare providers enhance efficiency, reduce claim denials, and achieve financial stability.
        Our team focuses on accurate claim submissions. We manage the system of your revenue cycle—from credentialing to payments—allowing you to focus on delivering quality care while we handle the financial aspects.
        </p>
      </div>
    </div>
  </div>
  )
}

export default About
