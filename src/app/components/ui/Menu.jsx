import React from "react";
import NewMenu from "./NewMenu";
import { menuLinks, serviceLinks } from "../../constants";
import Link from "next/link";

export default function Menu({
	extraStyle = "",
	pageName = "",
	menutype = "",
}) {
	if (pageName === "header") {
		return (
			<menu
				className={`${extraStyle} flex h-24 items-center justify-end lg:justify-center px-4 md:sticky md:top-4 lg:pl-10`}
			>
				<NewMenu links={menuLinks} />
			</menu>
		);
	}

	if (pageName === "footer") {
		return (
			<nav className={`${extraStyle}`}>
				{menutype === "mainMenu"
					? menuLinks.map((item, index) => (
							<button
								className={`flex w-full transition-all duration-300 ease-in-out`}
								key={index}
							>
								<Link href={item.link_url} className="max-w-fit">
									<span className="text-sm text-start lg:text-base">
										{item.link_title}
									</span>
								</Link>
							</button>
						))
					: serviceLinks.map((item, index) => (
							<button
								className={`flex w-full transition-all duration-300 ease-in-out`}
								key={index}
							>
								<span className="text-sm text-start lg:text-base">
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
