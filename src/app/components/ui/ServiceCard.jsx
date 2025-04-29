"use client";

import react, { useEffect, useRef, useState } from "react";
import { getCurrentScreenSize, serviceData } from "../../constants.js";
import { GoArrowRight } from "react-icons/go";
import Link from "next/link.js";
import Image from "next/image.js";


const ServiceCard = ({
  cardData,
  gridClass = "",
  cardClass = "",
  pagetype = "",
}) => {
  const [screenSize, setScreenSize] = useState(null);
  const scrollContainerRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const visibleCards =
    screenSize === "xxs" ||
    screenSize === "xs" ||
    screenSize === "sm" ||
    screenSize === "md" ||
    screenSize === "lg"
      ? cardData.slice(0, 5)
      : screenSize === "xl"
        ? cardData.slice(0, 6)
        : screenSize === "2xl" || screenSize === "3xl"
          ? cardData.slice(0, 7)
          : cardData.slice(0, 4);

  useEffect(() => {
    const handleResize = () => setScreenSize(getCurrentScreenSize());
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const handleWheel = (e) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      el.scrollTo({
        left: el.scrollLeft + e.deltaY * 4,
        behavior: "smooth",
      });
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, []);

  return pagetype === "homePage" ? (
    <>
    {/* SCROLLABLE CONTAINER */}
      <div
        className={`${gridClass} scroll-snap-x mandatory no-scrollbar flex  max-w-full snap-start place-items-center justify-self-center overflow-x-auto overflow-y-hidden scroll-smooth`}
        ref={scrollContainerRef}
        >
        {visibleCards.map((service, index) => {
            const isHovered = hoveredIndex === index;
            return (
                <div
                className={`${isHovered ? "bg-opacity-0" : "bg-lilac-100"} ${cardClass} flex h-full min-h-[25rem] w-full max-w-[355px] flex-shrink-0 snap-start flex-col items-center justify-between gap-y-2 border border-myblack-150/30 transition-all duration-300 ease-in-out sm:max-w-sm xl:max-w-[400px] 2xl:max-w-md 3xl:max-w-lg`}
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(0)}
                >
                    {/*  */}
              <div className="relative flex min-h-[25rem] w-full items-end">
                <div
                  className={`flex flex-col gap-2.5 px-4 transition-all duration-300 ease-in-out sm:px-5 ${
                      isHovered
                      ? "-translate-y-3"
                      : "translate-y-5 text-myblack-150"
                    }`}
                    >
                    {/* Heading with arrow */}
                  <div
                    className={`flex items-center justify-between transition-all duration-300 ease-in-out`}
                  >
                    <h1
                      className={`${
                        isHovered ? "font-normal text-mywhite-50" : ""
                      } pointer-events-none text-xl capitalize xl:text-xl 2xl:text-2xl`}
                      style={{
                        scale: isHovered ? "1.105" : "1",
                        transformOrigin: "left",
                        transition: "scale 0.3s ease, text-shadow 0.1s ease",
                      }}
                    >
                      {service.title}
                    </h1>
                    <GoArrowRight
                      className={`w-12 text-2xl transition-all duration-300 ease-in-out ${
                        isHovered ? "text-mywhite-50" : "text-blue-500"
                      }`}
                      style={
                        isHovered
                          ? {
                              transform: "scale(1.3)",
                              transformOrigin: "left",
                              transition: "transform 0.3s ease",
                            }
                          : {
                              transform: "scale(1)",
                              transformOrigin: "left",
                              transition: "transform 0.3s ease",
                            }
                      }
                    />
                  </div>
                  <div
                    className={`h-[1.5px] w-80 outline-0 sm:w-full ${
                      isHovered ? "bg-mywhite-100" : "bg-myblack-100"
                    }`}
                  />
                  <p
                    className={`${
                      isHovered ? "text-mywhite-50" : ""
                    } min-h-[4.65rem] text-sm 2xl:text-base`}
                  >
                    {service.headline}
                  </p>
                  <button
                    className={`w-fit text-mywhite-50 transition-all duration-300 ease-in-out hover:text-blue-400 ${
                      isHovered
                        ? "-translate-y-3 opacity-100"
                        : "translate-y-10 opacity-0"
                    } rounded-full bg-myblack-150 px-4 py-0.5`}
                  >
                    <Link
                      href={service.service_link}
                      className="text-sm"
                    >
                      Read More
                    </Link>
                  </button>
                </div>
                <Image
                fill
                alt="alt text"
                  src={service.imgPath}
                  className={`absolute left-0 top-0 -z-10 transition-all duration-200 ease-linear ${
                    !isHovered
                      ? "pointer-events-none translate-y-5 opacity-0"
                      : "translate-y-0 opacity-100"
                  } h-[25rem] w-full object-cover object-center`}
                />
              </div>
            </div>
          );
        })}

        <div className="flex min-w-96 items-center justify-end text-2xl transition-all duration-300 ease-in-out hover:scale-105 xl:text-3xl">
          <button type="button" className={`w-fit rounded`}>
            <Link href="/services">
              <span className="">View All Services</span>
            </Link>
          </button>
          <GoArrowRight
            className={`w-12 transition-all duration-300 ease-in-out`}
          />
        </div>
      </div>
    </>
  ) : pagetype === "services" ? (
    <>
      <div className={`${gridClass} grid h-full max-w-full lg:grid-cols-2`}>
        {cardData.map((service, index) => {
          const isHovered = hoveredIndex === index;
          return (
            <div
              className={`${isHovered ? "bg-opacity-0" : "bg-lilac-100"} ${cardClass} flex h-full min-h-[25rem] w-full max-w-full flex-shrink-0 flex-col items-center justify-between gap-y-2 rounded border border-myblack-150/50 transition-all duration-300 ease-in-out`}
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(0)}
            >
              <div className="relative min-h-[28rem] min-w-full gap-3 pb-8 sm:grid-cols-[3fr_2fr] md:grid 2xl:grid-cols-[2fr_1fr]">
                {/* CARD Image CONTENT */}
                <div
                  className={`relative flex h-full flex-col justify-end gap-2.5 px-4 transition-all duration-300 ease-in-out sm:px-5 ${
                    isHovered ? "" : "text-myblack-150"
                  }`}
                  style={{
                    // scale: isHovered ? "0.8 0.8 1" : "1 1 1",
                    width: isHovered && screenSize === "md" ? "75%" : "100%",
                    transformOrigin: "left",
                    transition: "width 0.4s ease",
                  }}
                >
                  {/* Card Title */}
                  <div
                    className={`flex items-center justify-between transition-all duration-300 ease-in-out`}
                  >
                    <h1
                      className={`${
                        isHovered ? "font-normal" : ""
                      } pointer-events-none text-xl capitalize xl:text-xl 2xl:text-2xl`}
                      style={{
                        scale: isHovered ? "1.105" : "1",
                        transformOrigin: "left",
                        transition: "scale 0.3s ease, text-shadow 0.1s ease",
                      }}
                    >
                      {service.title}
                    </h1>
                    <GoArrowRight
                      className={`w-12 text-2xl transition-all duration-300 ease-in-out ${
                        isHovered ? "" : "text-blue-500"
                      }`}
                      style={
                        isHovered
                          ? {
                              transform: "scale(1.3)",
                              transformOrigin: "left",
                              transition: "transform 0.3s ease",
                            }
                          : {
                              transform: "scale(1)",
                              transformOrigin: "left",
                              transition: "transform 0.3s ease",
                            }
                      }
                    />
                  </div>
                  {/* divider line */}
                  <div
                    className={`h-[1.5px] w-80 outline-0 sm:w-full ${
                      isHovered ? "bg-mywhite-100" : "bg-myblack-100"
                    }`}
                  />
                  {/* COntent */}
                  <p className={`${isHovered ? "" : ""} text-sm 2xl:text-base`}>
                    {service.headline}
                  </p>
                  {/* Read More Link */}
                  <button
                    className={`w-fit text-mywhite-50 transition-all duration-300 ease-in-out hover:text-blue-400 ${
                      isHovered ? "" : ""
                    } rounded-full bg-myblack-150 px-4 py-0.5`}
                  >
                    <Link
                      href={service.service_link}
                      className="text-sm"
                    >
                      Read More
                    </Link>
                  </button>
                  <div
                    className="absolute top-3.5 h-52 w-[92%] rounded"
                    // style={{
                    //   scale: isHovered ? "0.7 1 1" : "1 1 1",
                    //   borderRadius: isHovered ? "8px" : "4px",
                    //   transformOrigin: " left",
                    //   transition: "scale 0.4s ease, borderRadius 0.1s ease",
                    // }}
                  >
                    <Image
                    fill
                      src={service.imgPath}
                      alt="alt text"
                      className={`absolute top-0 transition-all duration-200 ease-linear ${
                        !isHovered
                          ? "pointer-events-none rounded"
                          : "rounded-lg"
                      } h-full w-full object-cover object-center`}
                    />
                  </div>
                </div>
                {/* CARD PARAGRAPH CONTENT */}

                <div
                  className="hidden h-full w-full p-2 md:flex"
                  style={{
                    translate: isHovered && screenSize === "md" ? "-20%" : "0%",
                    width: isHovered && screenSize === "md" ? "120%" : "100%",
                    transformOrigin: "right",
                    transition: "width 0.4s ease, translate 0.4s ease",
                  }}
                >
                  <p className="text-sm text-gray-600">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  ) : (
    ""
  );
};

export default ServiceCard;