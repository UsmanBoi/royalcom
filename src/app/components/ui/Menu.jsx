import React from "react";
import NewMenu from "./NewMenu";
import { menuLinks, serviceLinks } from "../../constants";
import Link from "next/link";

export default function Menu({
	
	extraClass = "",
	pageName = "",
	menutype = "",
}) {
	if (pageName === "header") {
		return (
			<menu
				className={`${extraClass} flex h-[4.5rem] items-center justify-end lg:justify-center px-4 md:sticky md:top-4 lg:pl-10`}
			>
				<NewMenu links={menuLinks} />
			</menu>
		);
	}

	if (pageName === "footer") {
		return (
			<nav className={`${extraClass}`}>
				{menutype === "mainMenu"
					? menuLinks.map((item, index) => (
							<button
								className={`fade-up flex w-full transition-all duration-300 ease-in-out`}
								key={index}
								style={{
									transitionDelay: `${
									 150 + index * 120
									}ms`,
								}}
							>
								<Link href={item.link_url} className="max-w-fit">
									<span className="text-sm text-start xl:text-base">
										{item.link_title}
									</span>
								</Link>
							</button>
						))
					: serviceLinks.map((item, index) => (
							<button
								className={`fade-up flex w-full transition-all duration-300 ease-in-out`}
								key={index}
								style={{
									transitionDelay: `${
									 150 + index * 120
									}ms`,
								}}
							>
								<span className="text-sm text-start xl:text-base">
									<Link href={item.link_url} className="max-w-fit">
										{item.link_title}
									</Link>
								</span>
							</button>
						))}
			</nav>
		);
	}

	return null;
}
