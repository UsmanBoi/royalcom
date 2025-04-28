import React from "react";
import { FaRegCircle } from "react-icons/fa";
import Image from "next/image";

const ImageComp = ({ ImgContClass }) => {
	return (
		<>
			<div
				className={`${ImgContClass} flex flex-col w-full border-2 border-white lg:py-8 rounded-3xl justify-evenly`}
			>
				<div className="hidden max-2xl:max-h-10 xl:flex justify-between items-center">
					<div className="flex gap-2 ">
						<FaRegCircle className="w-[20px] 2xl:w-[30px] h-[20px] 2xl:h-[30px] " />
						<FaRegCircle className="w-[20px] 2xl:w-[30px] h-[20px] 2xl:h-[30px] " />
						<FaRegCircle className="w-[20px] 2xl:w-[30px] h-[20px] 2xl:h-[30px] " />
					</div>
					<div className="h-20 2xl:w-32 w-20 2xl:h-16 relative">
						<Image
							src="/logo.png"
							alt="logo"
							fill
							className="object-contain"
							sizes="(max-width: 768px) 5rem, (max-width: 1536px) 8rem, 9rem"
						></Image>
					</div>
				</div>
				<div className="w-full h-full rounded-3xl relative overflow-hidden group">
					<div className="relative w-full h-full">
						<Image
							src="/portfolio.png"
							alt="image showcasing portfolio"
							fill
							className="object-fit object-center xl:group-hover:scale-125 transition-all duration-500 origin-center"
							sizes="(max-width: 768px) 15rem, (max-width: 1024px) 20rem, (max-width: 1280px) 25rem, (max-width: 1536px) 30rem, 35rem"
						></Image>
					</div>
					<div className="absolute inset-0 flex items-center justify-center bg-blue-200 opacity-0 group-hover:opacity-70 transition-all duration-700 ease-in-out">
						<div className="mt-[1500px] group-hover:mt-0 hover:transition-all duration-700 ease-in-out">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								className="stroke-black fill-none w-32 sm:w-48 h-32 sm:h-48"
							>
								<path
									d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
									className="circle"
									strokeWidth="0.3"
								></path>
								<path
									d="M14 10L10 14"
									className="arrow"
									strokeWidth="0.3"
								></path>
								<path
									d="M13 14L10 14L10 11"
									className="arrow"
									strokeWidth="0.3"
								></path>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ImageComp;
