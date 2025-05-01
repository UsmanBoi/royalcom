import React from "react";
import SecHero from "../components/SecHero";
import BlogCardGrid from "../components/ui/BlogCardGrid";
import { blogData, paddingClass } from "../constants";

const BlogPage = () => {
	return (
		<section className="">
			<SecHero
				heading="Blogs & articles"
				subheading=""
				img1src="/finance.jpg"
				img2src="/nurse.jpg"
			/>
			<div
				className={`flex w-screen flex-col justify-center ${paddingClass} xl:items-center`}
			>
				<BlogCardGrid
					cardData={blogData}
					gridClass="max-sm:gap-6 gap-y-8 gap-x-8 mt-10 mb-20 md:grid-cols-2 md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] xl:justify-items-center xl:place-self-center w-full 2xl:max-w-screen-2xl 3xl:max-w-screen-2xl"
				/>
			</div>
		</section>
	);
};

export default BlogPage;
