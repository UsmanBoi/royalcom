import React from "react";
// import Menu from "./Menu";
import Link from "next/link";
import Menu from "./ui/Menu";
import { paddingClass } from "../constants";

const Footer = ({ extraStyle = ""}) => {
  
  return (
    <footer
      className={`${extraStyle} ${paddingClass} grid font-light w-full max-w-full h-auto gap-y-16 max-lg:grid-rows-[1fr_1fr] lg:grid-cols-[1fr_1fr] items-center justify-end gap-x-6 px-4 py-16 lg:justify-between lg:pl-10`}
    >
      <div className="flex flex-col gap-y-16">

        <div className="flex flex-col gap-6">
          <Link href='/contact'>
            <h1 className="text-4xl font-semibold text-blue-500">RoyalComSol</h1>
          </Link>
          <span className="max-w-80 text-sm lg:text-base sm:max-w-96">Helping Healthcare firms optimize their business, for better efficiency and scalability.</span>
        </div>

        <div className="flex w-full justify-between gap-x-2">
          <div className="flex-1 flex flex-col gap-5 max-w-80">
            <h2 className="text-xl sm:text-2xl lg:text-3xl opacity-50 font-light">Company</h2>
            <Menu extraStyle="flex flex-col" pageName="footer" menutype="mainMenu"  />
          </div>
          <div className="flex-1 flex flex-col gap-5 max-lg:hidden">
            <h2 className="text-xl sm:text-2xl lg:text-3xl opacity-50 font-light">Services</h2>
            <Menu extraStyle="flex flex-col items-start justify-start" pageName="footer" menutype="servicesMenu"/>
          </div>
          <div className="flex-1 flex flex-col gap-5 max-w-80">
            <h2 className="text-xl sm:text-2xl lg:text-3xl opacity-50 font-light">Contact</h2>
            <div className="flex flex-col gap-4">
            <span className="text-sm lg:text-base">info@royalcomsol.com</span>
            <span className="text-sm lg:text-base">+92 345 2787638</span>
            <span className="text-sm lg:text-base">Office-207, 2nd Floor, Al-Sehat Centre, Shahra-e-Faisal, Karachi, Pakistan.</span>
            </div>
            
          </div>

        </div>
      </div>

      <div className="w-full h-full flex flex-col md:place-self-end gap-6 max-w-md justify-center">
      <h2 className="text-2xl lg:text-3xl  font-light">Subscribe to our News letter</h2>
      <span className="max-w-96">Join up our newsletter now to get weekly informative tips in your email.</span>
      <input className="bg-none  outline-none border-b border-gray-600 text-myblack-50" title="Email" placeholder="Enter email" type="text" />
      <button
    className={`h-10  px-5 rounded-full w-fit  text-mywhite-50 border-mywhite-50 border-2  transition-all duration-500 ease-in-out`}
    type="submit"
    >
                        
                          <span className=" lg:text-lg ">
                            Submit
                          </span>
                          
                      </button>
      </div>
    </footer>
  );
}

export default Footer;