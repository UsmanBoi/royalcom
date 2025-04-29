import React from "react";
import Menu from "./ui/Menu";
import { paddingClass } from "../constants";
import Link from "next/link";

export default async function Header() {

  return (
    <header
      className={`${paddingClass} fixed z-50 grid h-24 top-0 min-w-full grid-cols-[1fr_1fr] items-center justify-between border-b-2 border-gray-200/80 bg-mywhite-100 bg-opacity-90 backdrop-blur-[5px] lg:grid-cols-[1fr_2fr_1fr]`}
    >
      <Link
        href="/"
        aria-label="Home Button"
        className="text-lg w-fit font-semibold text-blue-500"
      >
        <span>RoyalComSol</span>
      </Link>
      <Menu extraStyle="" pageName="header" />
      <Link href="/contact" className="w-fit justify-self-end max-lg:hidden">
         <button
    className={`h-10  px-5 rounded-full w-fit bg-myblack-150 text-mywhite-50  transition-all duration-500 ease-in-out`}
    >
                        
                          <span className=" lg:text-lg ">
                            Contact Us
                          </span>
                          
                      </button>
                        </Link>
    </header>
  );
}