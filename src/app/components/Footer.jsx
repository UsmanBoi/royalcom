import React from "react";
// import Menu from "./Menu";
import Link from "next/link";
import Menu from "./ui/Menu";

const Footer = ({ extraStyle = ""}) => {
  
  return (
    <footer
      className={`${extraStyle} grid h-auto grid-cols-[1fr_1fr] items-center justify-end gap-x-6 px-4 py-10 sm:grid-cols-[2fr_2fr_3fr] md:sticky md:top-4 lg:justify-between lg:pl-10`}
    >
      <div className="flex flex-col gap-4">
        <Link href='/contact'>
          <h1 className="text-4xl font-semibold">RoyalComSol</h1>
        </Link>
        <div className="flex flex-col gap-1 text-xs font-light sm:text-sm 2xl:text-base">
          <span>+92 345 2787638
		  </span>
          <span className="sm:w-60">Office-207, 2nd Floor, Al-Sehat Centre, Shahra-e-Faisal, Karachi, Pakistan.</span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold uppercase">Company</h2>
        <Menu extraStyle="flex flex-col" pageName="footer" menutype="mainMenu"  />
      </div>
      <div className="flex flex-col gap-2 max-sm:hidden">
        <h2 className="text-2xl font-semibold uppercase">Services</h2>
        <Menu extraStyle="flex flex-col" pageName="footer" menutype="servicesMenu"/>
      </div>

      {/* <div></div> */}
    </footer>
  );
}

export default Footer;