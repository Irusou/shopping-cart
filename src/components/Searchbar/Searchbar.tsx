import React, { ChangeEvent, useState } from "react";
import "./Searchbar.css";
import Item from "../../Item";

interface SearchbarProps {
	itemsToFilter: Item[];
	onSearch: (sortedItems: Item[]) => void;
}

export default function Searchbar({ itemsToFilter, onSearch }: SearchbarProps) {
	const [value, setValue] = useState("");
	const [filteredItems, setFilteredItems] = useState<Item[]>(itemsToFilter);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value;
		setValue(inputValue);

		// Filter and sort items based on the "item_name" property
		const filteredAndSortedItems = itemsToFilter
			.filter((item) =>
				item.item_name.toLowerCase().includes(inputValue.toLowerCase())
			)
			.sort((a, b) => a.item_name.localeCompare(b.item_name));

		setFilteredItems(filteredAndSortedItems);

		// Call the callback function with the sorted array
		onSearch(filteredAndSortedItems);
	};

	return (
		<div className="search-container">
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
