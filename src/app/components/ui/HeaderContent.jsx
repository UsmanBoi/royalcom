import React from "react";
import Menu from "./Menu";
import { paddingClass } from "../../constants";
import Link from "next/link";
import CTAButton from "./CTAButton";

export default async function HeaderContent() {
  return (
    <header
      className={`${paddingClass} grid h-[4.5rem] min-w-full grid-cols-[1fr_1fr] items-center justify-between border-b-2 border-gray-200/80 bg-mywhite-100 bg-opacity-90 backdrop-blur-[5px] md:grid-cols-[1fr_2fr_1fr]`}
    >
      <Link
        href="/"
        aria-label="Home Button"
        className="text-lg w-fit font-semibold text-myblue-50"
      >
        <span className="tracking-[-0.035em]">RoyalComSol</span>
      </Link>
      <Menu extraClass="" pageName="header" />

      <CTAButton
        text="Contact Us"
        url="/contact"
        buttonClass="px-2.5 py-1 lg:py-1.5 lg:px-3.5 bg-myblack-50 rounded-full text-mywhite-50 cursor-pointer w-fit justify-self-end max-md:hidden"
      />
    </header>
  );
}
