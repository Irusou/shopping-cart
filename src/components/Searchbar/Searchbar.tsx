import React, { ChangeEvent, useState } from "react";
import "./Searchbar.css";
import { BiSearch } from "react-icons/bi";

export default function Searchbar() {
	const [value, setValue] = useState("");

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.value);
		setValue(e.target.value);
	};

	return (
		<div className="form-container">
			<form>
				<input
					type="search"
					name="search-box"
					id="search-box"
					placeholder="Search.."
					value={value}
					onChange={(e) => handleChange(e)}
				/>
			</form>
		</div>
	);
}
