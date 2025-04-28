import React from "react";
import Menu from "./ui/Menu";
import { paddingClass } from "../constants";
import Link from "next/link";

export default async function Header() {

  return (
    <header
      className={`${paddingClass} fixed z-50 grid h-24 top-0 min-w-full grid-cols-[1fr_1fr] items-center justify-between border-b-2 border-gray-200/80 bg-mywhite-100 bg-opacity-90 backdrop-blur-[5px] lg:grid-cols-[2fr_3fr]`}
    >
      <Link
        href="/"
        aria-label="Home Button"
        className="text-lg font-semibold text-blue-500"
      >
        <span>RoyalComSol</span>
      </Link>
      <Menu extraStyle="" pageName="header" />
    </header>
  );
}