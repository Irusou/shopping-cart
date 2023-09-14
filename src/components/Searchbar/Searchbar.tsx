import React, { ChangeEvent, useState } from "react";
import "./Searchbar.css";

interface SearchbarProps {
	itemsToFilter: [];
}

export default function Searchbar({ itemsToFilter }: SearchbarProps) {
	const [value, setValue] = useState("");

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.value);
		setValue(e.target.value);

		itemsToFilter.filter((item) => {
			item == value;
		});
	};

	return (
		<div className="form-container">
			<input
				type="search"
				name="search-box"
				id="search-box"
				placeholder="Search.."
				value={value}
				onChange={(e) => handleChange(e)}
			/>
		</div>
	);
}
