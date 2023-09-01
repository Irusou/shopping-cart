import React, { useState } from "react";
import "./Searchbar.css";

interface SearchbarProps {
	items?: [];
}

export default function Searchbar({ items }: SearchbarProps) {
	const [filter, setFilter] = useState("");

	const filterArray = (items: []) => {
		var newArr = items;

		try {
			newArr.find((item) => {
				item === filter;
			});

			return newArr;
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<div className="form-container">
			<form>
				<input
					type="search"
					name="search-box"
					id="search-box"
					placeholder="Search.."
					onChange={() => filterArray}
					value={filter}
				/>
				<div className="search-icon">
					<span>{/** 	TODO: Import icon from font-awesome */}</span>
				</div>
			</form>
		</div>
	);
}
