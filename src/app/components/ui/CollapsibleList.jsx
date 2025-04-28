"use client";
import { useState } from "react";

export const CollapsibleItem = ({
	id,
	question,
	answer,
	questionClassName,
	answerClassName,
}) => {
	const [openIndex, setOpenIndex] = useState(0);
	const [activeId, setActiveId] = useState(0);

	const toggleItem = () => {
		setOpenIndex(!openIndex);
		setActiveId(activeId !== id ? id : null);
	};

	return (
		<div className="border-b border-gray-300 pb-4">
			<button
				type="button"
				onClick={toggleItem}
				className={`flex w-full items-center justify-between py-2 text-left font-medium ${questionClassName}`}
			>
				<span className={`${activeId === id ? "text-blue-200" : ""}`}>
					{question}
				</span>
				<span>{openIndex ? "-" : "+"}</span>
			</button>
			{openIndex ? (
				<p
					className={`mt-2 max-h-32 overflow-hidden text-base leading-normal opacity-100 transition-all duration-300 ease-in-out${answerClassName}`}
				>
					{answer}
				</p>
			) : (
				<p
					className={`mt-2 max-h-0 tracking-tighter text-sm leading-tight overflow-hidden opacity-0 transition-all duration-300 ease-in-out ${answerClassName}`}
				>
					{answer}
				</p>
			)}
		</div>
	);
};

const CollapsibleList = ({
	data,
	questionClassName,
	answerClassName,
	containerClassName,
}) => {
	return (
		<section className={` w-full ${containerClassName}`}>
			<div className="space-y-4">
				{data.map((item, index) => (
					<CollapsibleItem
						key={index}
						question={item.question}
						answer={item.answer}
						questionClassName={questionClassName}
						answerClassName={answerClassName}
					/>
				))}
			</div>
		</section>
	);
};

export default CollapsibleList;
