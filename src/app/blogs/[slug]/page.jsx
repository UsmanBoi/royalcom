import Image from "next/image";
import { blogData, paddingClass } from "../../constants";

export async function generateStaticParams() {
	// Generate dynamic paths from blogData
	return blogData.map((blog) => ({
		slug: blog.slug,
	}));
}

const BlogDetailPage = ({ params }) => {
	const { slug } = params;

	// Find the specific blog by its slug
	const blog = blogData.find((item) => item.slug === slug);

	if (!blog) {
		// Fallback for unmatched slugs
		return <div className="text-center mt-20">Blog not found!</div>;
	}

	const middleIndex = Math.ceil(blog.content.length / 2);

	// First Half
	const firstHalf = blog.content.slice(0, middleIndex);

	// Second Half
	const secondHalf = blog.content.slice(middleIndex);

	return (
		<>
			<article
				className={`max-w-full flex items-center justify-center w-full ${paddingClass}`}
			>
				<section className="my-4 flex flex-col 2xl:max-w-screen-xl 3xl:max-w-screen-2xl 2xl:pr-40 bg-lilac-100/50 rounded px-10 2xl:px-16 py-10">
					<div className="flex flex-col gap-2">
						<h1 className="text-2xl font-bold sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl ">
							{blog.title}
						</h1>
						{<br className="max-sm:hidden" />}
						<p
							style={{ wordSpacing: "2px" }}
							className="text-xl sm:text-2xl md:text-3xl  tracking-tighter"
						>
							{blog.description}
						</p>
						<div className="flex max-sm:text-sm tracking-tight justify-between w-full font-medium text-white-200">
							<p className="">{blog.minutes} min read</p>
							<p className="">{blog.date}</p>
						</div>
					</div>
					<hr className="w-40 my-4 sm:my-8" />

					{/* CONTENT BODY */}
					<div className="flex flex-col gap-8">
						<>
							{/* FIRRST HALF */}
							{firstHalf.map((contentblock) => (
								<div className="flex flex-col gap-3 py-2" key={contentblock.id}>
									<h3
										className={`text-lg md:text-xl xl:text-2xl 2xl:text-3xl capitalize tracking-[-0.04em]`}
									>
										{contentblock.heading}
									</h3>
									<p className={`sm:text-lg lg:pr-10`}>{contentblock.para}</p>
								</div>
							))}
							{/* Featured Image */}
							<div className="relative w-full min-h-96">
								<Image
									src={blog.featuredImage}
									alt="blog image"
									fill
									className="object-cover"
								/>
							</div>
							{/* Second HALf */}
							{secondHalf.map((contentblock) => (
								<div
									className=" flex flex-col gap-2 py-2"
									key={contentblock.id}
								>
									<h3
										className={`text-lg md:text-xl xl:text-2xl 2xl:text-3xl capitalize tracking-[-0.04em] `}
									>
										{contentblock.heading}
									</h3>
									<p className={`sm:text-lg lg:pr-10`}>{contentblock.para}</p>
								</div>
							))}
						</>
					</div>
				</section>
			</article>
		</>
	);
};

export default BlogDetailPage;
