import Image from "next/image";
import { blogContent, blogData } from "../../constants";

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
			<article className="max-w-full">
				<div className="flex flex-col gap-5 mb-5">
					<div className="w-full h-60 lg:h-80 relative ">
						<Image
							src={blog.imgPath}
							alt={blog.title}
							className="w-full h-full rounded-lg object-cover object-center"
							fill
							sizes="(max-width: 640px) 400px, /* Full width for small screens */
							(max-width: 1280px) 900px, /* Slightly reduced width for medium screens */
							(max-width: 1920px) 800px, /* Balanced width for larger screens */
							1000px                      /* For ultra-large screens */"
						/>
					</div>
					<div className="flex max-sm:text-sm  tracking-tight justify-between w-full font-medium text-white-200">
						<p className="">{blog.minutes} min read</p>
						<p className="">{blog.date}</p>
					</div>
				</div>
				<section className="my-4">
					<div className="grid gap-y-4 lg:gap-y-6 sm:grid-cols-[2fr_1fr] xl:grid-cols-[3fr_1fr] ">
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
					</div>
					<hr className="w-40 my-4 sm:my-8" />
					<div className="flex flex-col gap-2">
						<>
							{firstHalf.map((contentblock) => (
								<div
									className=" flex flex-col gap-2 py-2"
									key={contentblock.id}
								>
									<h3
										className={`text-xl text-blue-200  capitalize ${contentblock?.headingClass}`}
									>
										{contentblock.heading}
									</h3>
									<p
										className={`sm:text-lg lg:pr-10 ${contentblock?.paraClass}`}
									>
										{contentblock.para}
									</p>
								</div>
							))}
							<div className="relative w-full min-h-96">
								<Image
									src={blog.featuredImage}
									alt="blog image"
									fill
									className="object-cover"
								/>
							</div>
							{secondHalf.map((contentblock) => (
								<div
									className=" flex flex-col gap-2 py-2"
									key={contentblock.id}
								>
									<h3
										className={`text-xl text-blue-200  capitalize ${contentblock?.headingClass}`}
									>
										{contentblock.heading}
									</h3>
									<p
										className={`sm:text-lg lg:pr-10 ${contentblock?.paraClass}`}
									>
										{contentblock.para}
									</p>
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
