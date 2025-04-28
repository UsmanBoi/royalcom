import CollapsibleList from "./ui/CollapsibleList";

const faqData = [
	{
		id: 1,
		question: "What makes your products unique?",
		answer:
			"Our products are crafted with quality materials and elegant designs that ensure durability and aesthetic appeal. Our team focuses on details that make each product reliable and beautiful for any space.",
	},
	{
		id: 2,
		question: "Are your products durable?",
		answer:
			"Yes, we emphasize durability in all our products. Using high-quality materials and rigorous testing, we ensure each product meets our standards for longevity.",
	},
	{
		id: 3,
		question: "Do you offer support for product installation?",
		answer:
			"Absolutely! We offer dedicated customer support to assist with installation questions. Our team is here to help you set up and enjoy your new purchase.",
	},
	{
		id: 4,
		question: "What is your return policy?",
		answer:
			"If you’re not satisfied with your purchase, we offer a hassle-free return policy. Please contact our support team within 30 days of receiving your product for assistance.",
	},
	{
		id: 5,
		question: "How can I contact customer support?",
		answer:
			"You can reach out to our customer support team via email or phone. We’re dedicated to assisting you with any questions or issues you may have.",
	},
];

const Faqs = () => {
	return (
		<section className="mx-auto w-full max-lg:my-20 mb-20">
			<h2 className="font-bold  text-6xl sm:text-7xl md:text-8xl lg:text-9xl 2xl:text-[15rem] max-2xl:mb-10 text-center">
				faqs
			</h2>
			<div className="space-y-4 font-bold ">
				<CollapsibleList
					data={faqData}
					questionClassName="sm:text-xl lg:text-3xl 2xl:text-4xl"
					answerClassName="text-lg lg:text-[1.4rem] 2xl:text-2xl  font-thin tracking-wide "
					containerClassName="mb-10"
				/>
			</div>
		</section>
	);
};

export default Faqs;
