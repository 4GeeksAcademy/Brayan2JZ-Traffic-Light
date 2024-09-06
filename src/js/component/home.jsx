import React, { useState, useEffect } from "react";

//create your first component
export function Home() {
	const [selectedColor, setSelectedColor] = useState("green");
	const [cycleActive, setCycleActive] = useState(true);
	const [isPurple, setIsPurple] = useState(false);

	const cycleTrafficColors = () => {
		if (cycleActive) {
			if (selectedColor === "red") {
				setSelectedColor("yellow");
			} else if (selectedColor === "yellow") {
				setSelectedColor("green");
			} else if (selectedColor === "green") {
				setSelectedColor("red");
			}
		}
	};

	useEffect(() => {
		const intervalId = setInterval(cycleTrafficColors, 1500);

		return () => clearInterval(intervalId);
	}, [selectedColor])

	const togglePurple = () => {
		if (!isPurple) {
			setSelectedColor("purple");
			setCycleActive(false);
		} else {
			setSelectedColor("green");
			setCycleActive(true);
		}
		setIsPurple(!isPurple);
	}

	return (
		<>
			<div className="d-flex justify-content-center">
				<div className="wire"></div>
			</div>
			<div className="trafficLight d-flex justify-content-center flex-column">
				<div onClick={() => setSelectedColor("red")} className={"light red" + (selectedColor === "red" ? " glow" : "") + (selectedColor === "purple" ? " purple glow3" : "")}></div>
				<div onClick={() => setSelectedColor("yellow")} className={"light yellow" + (selectedColor === "yellow" ? " glow1" : "") + (selectedColor === "purple" ? " purple glow3" : "")}></div>
				<div onClick={() => setSelectedColor("green")} className={"light green" + (selectedColor === "green" ? " glow2" : "") + (selectedColor === "purple" ? " purple glow3" : "")}></div>
			</div>
			<div className="button-container d-flex justify-content-center mt-4">
				<button onClick={togglePurple} className="purple-button">
					{isPurple ? "Fix the lights!" : "Break the lights!"}
				</button>
			</div>
		</>
	);
};

export default Home;
