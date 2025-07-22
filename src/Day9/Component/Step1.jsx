import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateForm } from "../Formslice";

export default function Step1({ next }) {
	const dispatch = useDispatch();
	const { name, email } = useSelector((state) => state);

	const handleChange = (e) => {
		dispatch(updateForm({ [e.target.name]: e.target.value }));
	};

	return (
		<div>
			<h2>Step 1: Personal Info</h2>
			<input
				name="name"
				placeholder="Name"
				value={name}
				onChange={handleChange}
			/>
			<br />
			<input
				name="email"
				placeholder="Email"
				value={email}
				onChange={handleChange}
			/>
			<br />
			<button onClick={next}>Next</button>
		</div>
	);
}