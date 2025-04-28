import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const ToggleButton = () => {
	const [isToggled, setIsToggled] = useState(false);

	const handleClick = () => {
		setIsToggled(!isToggled);
	};

	return (
		<div
			className={`relative w-16 h-9 sm:w-24 sm:h-12 rounded-full p-1 cursor-pointer transition-colors duration-300 bg-gray-700`}
			onClick={handleClick}
		>
			<div
				className={`absolute top-0 left-0 h-full w-9 sm:w-1/2 rounded-full flex items-center justify-center transition-all duration-300 ${
					isToggled ? "translate-x-full bg-blue-200 rotate-90" : "bg-white"
				}`}
			>
				<FaArrowRightLong className="fill-black text-lg sm:text-2xl" />
			</div>
		</div>
	);
};

export default ToggleButton;
