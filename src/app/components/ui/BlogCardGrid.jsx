import React from "react";
import Link from "next/link";
import StaticImg from "./StaticImg";
import { GoArrowRight } from "react-icons/go";

export const BlogCard = ({ card }) => {
	return (
		<div
			key={card.id}
			className={`w-full max-w-lg h-full backdrop-blur-md rounded bg-gradient-to-r group hover:border-blue-400 bg-lilac-100/50 duration-300 transition-all ease-in-out p-4 2xl:px-6  ${card.spanClass}`}
		>
			<Link href={`/blogs/${card.slug}`}>
				<div
					className={`flex-col flex gap-6 xl:gap-8 p-1 h-full justify-between items-center`}
				>
					<div className="flex flex-col gap-2 sm:gap-4 w-full">
						<div
							className={`relative w-full h-56 xl:min-h-64 2xl:min-h-80 self-end`}
						>
							<StaticImg
								src={card.imgPath} // Use `card.imageSrc` if available
								alt={`blog ${card.id} Image`}
								fill
								sizes="
                    (max-width: 640px) 100vw, /* Full width for small screens */
                    (max-width: 1280px) 80vw, /* Slightly reduced width for medium screens */
                    (max-width: 1920px) 60vw, /* Balanced width for larger screens */
                    50vw                      /* For ultra-large screens */
                "
								className=" duration-300 transition-all ease-in-out object-cover object-center  group-hover:scale-[1.025]"
							/>
						</div>
					</div>
					{/* Blog content */}
					<div className={`relative w-full min-h-fit `}>
						<div className="w-full flex flex-col gap-2">
							<div className="flex w-full justify-between">
								<h2
									className={`group-hover:text-blue-400 min-h-14 2xl:text-lg duration-300 transition-all ease-in-out `}
								>
									{card.title}
								</h2>
								<GoArrowRight
									className={`w-7 text-2xl transition-all group-hover:text-blue-400 duration-300 ease-in-out`}
								/>
							</div>
							<div
								className={`h-[1.3px] w-80 bg-myblack-200 outline-0 sm:w-full `}
							/>
							<div className="flex justify-between w-full">
								<span>{card.date}</span>
								<span>{`${card.minutes} minutes read`}</span>
							</div>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

const BlogCardGrid = ({ gridClass, cardData }) => {
	return (
		<div className={`grid ${gridClass}`}>
			{cardData.map((card) => (
				<BlogCard key={card.id} card={card} />
			))}
		</div>
	);
};

export default BlogCardGrid;
