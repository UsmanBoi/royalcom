"use client";

import Image from "next/image";

export default function StaticImg({ src, alt, width, height, ...rest }) {
	const isStaticExport = process.env.NEXT_PUBLIC_STATIC_EXPORT === "true";

	if (isStaticExport) {
		// Use regular <img> tag during static export
		return <img src={src} alt={alt} width={width} height={height} {...rest} />;
	}

	// Use Next.js Image component during development or server runtime
	return (
		<Image
			src={src}
			alt={alt}
			width={width}
			height={height}
			unoptimized // ensures no dynamic optimization
			{...rest}
		/>
	);
}
