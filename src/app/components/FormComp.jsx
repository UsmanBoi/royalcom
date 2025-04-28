"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import CTAButton from "./ui/CTAButton";

export default function FormComp({ label1 = "", label2 = "", label3 = "" }) {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		profession: "",
		experience: "",
		jobType: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// Replace with your EmailJS credentials
		emailjs
			.send(
				"service_u7l0zx2", // EmailJS service ID
				"template_8vkde6e", // EmailJS template ID
				formData, // Form data to send
				"DAsUjBaN0m2-Pr8z1" // EmailJS public key
			)
			.then(
				(response) => {
					alert("Form submitted successfully!");
					console.log(response.text);
				},
				(error) => {
					console.error("Failed to send form data:", error);
					alert("An error occurred. Please try again.");
				}
			);
	};

	return (
		<div className="min-h-[20rem] w-full bg-black flex items-center justify-center max-md:my-10 mb-10">
			<form
				onSubmit={handleSubmit}
				className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-x-6  gap-y-12 max-md:gap-y-10 bg-black text-white min-w-full"
			>
				{/* Name */}

				<div>
					<label className="block  tracking-wider text-sm xl:text-base font-semibold text-blue-200">
						{label1}
					</label>
					<input
						type="text"
						name="name"
						value={formData.name}
						onChange={handleChange}
						placeholder="type here"
						required
						className="w-full  bg-black border-b border-gray-600 focus:outline-none focus:border-white mt-2"
					/>
				</div>

				{/* Email */}
				<div>
					<label className="block  tracking-wider text-sm xl:text-base font-semibold text-blue-200">
						{label2}
					</label>
					<input
						type="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						placeholder="type here"
						required
						className="w-full  bg-black border-b border-gray-600 focus:outline-none focus:border-white mt-2"
					/>
				</div>

				{/* Phone */}
				<div>
					<label className="block  tracking-wider text-sm xl:text-base font-semibold  text-blue-200">
						{label3}
					</label>
					<input
						type="tel"
						name="phone"
						value={formData.phone}
						onChange={handleChange}
						placeholder="type here"
						required
						className="w-full  bg-black border-b border-gray-600 focus:outline-none focus:border-white mt-2"
					/>
				</div>
				<div className="max-lg:order-last place-self-center">
					<CTAButton text="submit" buttonType="submit" />
					{/* <div className="col-span-3 flex justify-center mt-4">
						<button
							type="submit"
							className="px-6 py-2 bg-transparent border border-teal-500 text-teal-500 uppercase text-sm hover:bg-teal-500 hover:text-black transition-all duration-300"
						>
							Submit
						</button>
					</div> */}
				</div>

				{/* Profession */}
				<div>
					<select
						name="profession"
						value={formData.profession}
						onChange={handleChange}
						required
						className="w-full  tracking-wider font-medium bg-black border-b transition-all duration-300 border-gray-600 focus:outline-none focus:border-blue-200 delay-75 mt-1"
					>
						<option value="" disabled>
							Select profession
						</option>
						<option
							className=" text-sm text-blue-200"
							value="developer"
						>
							Developer
						</option>
						<option
							className=" text-sm text-blue-200"
							value="designer"
						>
							Designer
						</option>
						<option
							className=" text-sm text-blue-200"
							value="manager"
						>
							Manager
						</option>
					</select>
				</div>

				{/* Experience */}
				<div>
					<select
						name="experience"
						value={formData.experience}
						onChange={handleChange}
						required
						className="w-full  tracking-wider font-medium bg-black border-b transition-all duration-300  border-gray-600 focus:outline-none focus:border-blue-200 delay-75 mt-1"
					>
						<option value="" disabled>
							Choose experience level
						</option>
						<option
							className=" text-sm  text-blue-200"
							value="junior"
						>
							Junior
						</option>
						<option
							className=" text-sm  text-blue-200"
							value="mid-level"
						>
							Mid-Level
						</option>
						<option
							className=" text-sm  text-blue-200"
							value="senior"
						>
							Senior
						</option>
					</select>
				</div>

				{/* Job Type */}
				<div>
					<select
						name="jobType"
						value={formData.jobType}
						onChange={handleChange}
						required
						className="w-full  tracking-wider font-medium  bg-black border-b transition-all duration-300 border-gray-600 focus:outline-none focus:border-blue-200 delay-75 mt-1"
					>
						<option value="" disabled>
							Select job type
						</option>
						<option
							className=" text-sm text-blue-200"
							value="full-time"
						>
							Full-Time
						</option>
						<option
							className=" text-sm text-blue-200"
							value="part-time"
						>
							Part-Time
						</option>
						<option
							className=" text-sm text-blue-200"
							value="freelance"
						>
							Freelance
						</option>
					</select>
				</div>

				{/* Submit Button */}
			</form>
		</div>
	);
}
