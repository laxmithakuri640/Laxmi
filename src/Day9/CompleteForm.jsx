import React, { useState } from "react";
import Step1 from "./Component/Step1";
import Step2 from "./Component/Step2";
import Step3 from "./Component/Step3";

export default function CompleteForm() {
	const [step, setStep] = useState(1);

	const next = () => setStep((prev) => prev + 1);
	const prev = () => setStep((prev) => prev - 1);

	return (
		<div style={{ textAlign: "center", marginTop: "50px" }}>
			<h1>Multi-Step Form with Redux</h1>
			{step === 1 && <Step1 next={next} />}
			{step === 2 && <Step2 next={next} prev={prev} />}
			{step === 3 && <Step3 prev={prev} />}
		</div>
	);
}