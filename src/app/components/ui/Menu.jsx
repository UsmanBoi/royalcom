import React from "react";
import NewMenu from "./NewMenu";
import {  menuLinks,  serviceLinks } from "../../constants";
import Link from "next/link";


export default function Menu({ extraStyle = "", pageName = "", menutype = ""}) {
  if (pageName === "header") {
    return (
      <menu
        className={`${extraStyle} flex h-24 items-center justify-end px-4 md:sticky md:top-4 lg:justify-between lg:pl-10`}
      >
        <NewMenu links={menuLinks} />
      </menu>
    );
  }

  if (pageName === "footer" ) {
    return (
      <nav className={`${extraStyle}`}>
        
        {menutype === "mainMenu" ?
        menuLinks.map((item, index) => (
          <button
            className={`-ml-1 w-fit p-2 opacity-70 transition-all duration-300 ease-in-out`}
            key={index}
          >
            <Link href={item.link_url}>
              <span className="text-sm text-mywhite-50  lg:text-base">
                {item.link_title}
              </span>
            </Link>
          </button>
        )) : serviceLinks.map((item, index) => (
            <button
              className={`-ml-1 w-fit p-2 opacity-70 transition-all duration-300 ease-in-out`}
              key={index}
            >
              <Link href={item.link_url}>
                <span className="text-sm text-mywhite-50  lg:text-base">
                  {item.link_title}
                </span>
              </Link>
            </button>
          ))}
      </nav>
    );
} 

  return null;
}