import React from "react";
import { useSelector } from "react-redux";

export default function Step3({ prev }) {
	const formData = useSelector((state) => state);

	const handleSubmit = () => {
		alert("Form submitted!\n" + JSON.stringify(formData, null, 2));
	};

	return (
		<div>
			<h2>Step 3: Review & Submit</h2>
			<pre>{JSON.stringify(formData, null, 2)}</pre>
			<button onClick={prev}>Back</button>
			<button onClick={handleSubmit}>Submit</button>
		</div>
	);
}