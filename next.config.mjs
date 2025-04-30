/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		unoptimized: true, // disables dynamic optimization (required for static export)
	},
	output: "export", // optional but recommended if you're fully static
};

export default nextConfig;
