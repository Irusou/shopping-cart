import "./Option.css";
import React from "react";

interface OptionProps {
	value: string;
	text: string;
	icon: string;
}

export default function Option({ value, text, icon }: OptionProps) {
	return (
		<>
			<option value={value}>{text}</option>
		</>
	);
}
