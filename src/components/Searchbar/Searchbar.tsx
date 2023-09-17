import { ChangeEvent, useEffect, useState } from "react";
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
	};

	useEffect(() => {
		if (value === "") {
			setFilteredItems(itemsToFilter);
		} else {
			const filteredAndSortedItems = itemsToFilter
				.filter((item) =>
					item.item_name.toLowerCase().includes(value.toLowerCase())
				)
				.sort((a, b) => a.item_name.localeCompare(b.item_name));
			setFilteredItems(filteredAndSortedItems);
		}
		onSearch(filteredItems);
	}, [value, itemsToFilter, onSearch]);

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
