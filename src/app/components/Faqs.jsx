"use client";
import React, { useState } from "react";
import Bounded from "./ui/Bounded";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { faqData } from "../constants";

const Faqs = () => {
	return (
		<Bounded

      className={`h-auto w-full py-5 sm:py-10`}
    >
      <div
        className={`grid gap-y-10 py-5 sm:gap-y-14 lg:grid-cols-2 lg:py-20 xl:justify-items-center xl:place-self-center 2xl:max-w-screen-2xl 3xl:max-w-screen-2xl sm:py-10 max-sm:pb-10`}
      >
        <div className="flex w-full flex-col justify-between gap-y-4 self-start sm:h-full">
          <h1
            className={`h-fit leading-[120%] w-[28rem] md:w-[36rem] text-5xl md:text-[52px] lg:text-6xl  xl:text-7xl font-light capitalize`}
            style={{ wordSpacing: "0.1em" }}
          >
            Frequently Asked Questions
          </h1>
          <div className="ml-2 flex w-fit items-center text-2xl transition-all duration-300 ease-in-out xl:text-3xl">
            <button type="button" className={`w-fit`}>
              <Link href="/">
                {/* Button text */}
                <span className="text-lg lg:text-xl xl:text-2xl">View All</span>
              </Link>
            </button>
            <GoArrowRight
              className={`w-12 transition-all duration-300 ease-in-out`}
            />
          </div>
        </div>

        <FaqCard cardData={faqData}
        />
      </div>
    </Bounded>
	);
};

export default Faqs;


export const FaqCard = ({ cardData }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-full space-y-4 lg:px-2 max-lg:pl-2 max-lg:pr-4 2xl:max-w-screen-2xl 3xl:max-w-screen-2xl">
      {cardData.map((faq, index) => (
        <div key={index} className="border-b lg:-mt-3 border-gray-300 py-2 font-normal">
          <button
            type="button"
            onClick={() => toggleItem(index)}
            className="flex w-96 sm:w-full items-center justify-between py-3 text-left "
          >
            <span className={`sm:text-lg max-w-80 sm:max-w-full lg:text-xl xl:text-2xl 2xl:text-[26px] ${openIndex === index ? "text-blue-600" : ""}`}>
              {faq.question}
            </span>
            <span className={`${openIndex === index ? "text-blue-600 " : ""} transition-all duration-300 ease-in-out `}><GoArrowRight className={`${openIndex === index ? "rotate-90" : ""} transition-all duration-300 ease-in-out`}/></span>
          </button>

          <div
            className={`overflow-hidden max-w-[38em] lg:max-w-full transition-all duration-300 ease-in-out ${
              openIndex === index
                ? "mt-2 max-h-40 text-base leading-normal opacity-100"
                : "mt-0 max-h-0 text-sm leading-tight opacity-0"
            }`}
          >
            <p className="sm:text-lg  xl:text-xl">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

