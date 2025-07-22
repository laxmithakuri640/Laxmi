import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateForm } from "../Formslice";

export default function Step2({ next, prev }) {
	const dispatch = useDispatch();
	const { address, city } = useSelector((state) => state);

	const handleChange = (e) => {
		dispatch(updateForm({ [e.target.name]: e.target.value }));
	};

	return (
		<div>
			<h2>Step 2: Address Info</h2>
			<input
				name="address"
				placeholder="Address"
				value={address}
				onChange={handleChange}
			/>
			<br />
			<input
				name="city"
				placeholder="City"
				value={city}
				onChange={handleChange}
			/>
			<br />
			<button onClick={prev}>Back</button>
			<button onClick={next}>Next</button>
		</div>
	);
}