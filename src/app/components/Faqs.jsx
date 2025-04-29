"use client";
import React, { useState } from "react";
import Bounded from "./ui/Bounded";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { faqData, secHeading } from "../constants";

const Faqs = () => {
	return (
		<Bounded

      className={`h-auto w-full py-10 max-sm:py-2`}
    >
      <div
        className={`grid gap-y-14 py-10 sm:gap-y-20 md:grid-cols-2 lg:py-20 xl:justify-items-center xl:place-self-center 2xl:max-w-screen-xl 3xl:max-w-screen-2xl max-sm:py-2 max-sm:pb-10`}
      >
        <div className="flex w-full flex-col justify-between gap-y-2 self-start sm:h-full">
          <h1
            className={`h-fit leading-[1.3em] sm:w-[30rem] md:w-[36rem] ${secHeading}`}
            style={{ wordSpacing: "0.1em" }}
          >
            Frequently Asked Questions
          </h1>
          <div className="ml-2 flex w-fit items-center text-2xl transition-all duration-300 ease-in-out xl:text-3xl">
            <button type="button" className={`w-fit`}>
              <Link href="/">
                {/* Button text */}
                <span className="text-lg">View All</span>
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
    <div className="w-full space-y-4 px-2 2xl:max-w-screen-xl 3xl:max-w-screen-2xl">
      {cardData.map((faq, index) => (
        <div key={index} className="border-b border-gray-300 pb-4 font-normal">
          <button
            type="button"
            onClick={() => toggleItem(index)}
            className="flex w-full items-center justify-between py-2 text-left sm:text-lg xl:text-2xl 2xl:text-[28px]"
          >
            <span className={openIndex === index ? "text-blue-600" : ""}>
              {faq.question}
            </span>
            <span>{openIndex === index ? "-" : "+"}</span>
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index
                ? "mt-2 max-h-40 text-base leading-normal opacity-100"
                : "mt-0 max-h-0 text-sm leading-tight opacity-0"
            }`}
          >
            <p className="xl:text-xl">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

