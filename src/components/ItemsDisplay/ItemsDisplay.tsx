import "./ItemsDisplay.css";

import Card from "../Card/Card";
import Item from "../../Item";
import Searchbar from "../Searchbar/Searchbar";
import useFetch from "../hooks/useFetch";
import { useState } from "react";

export default function ItemsDisplay() {
	const url = "http://localhost:8008/items";
	const { data: items, loading, error } = useFetch(url);

	const [filteredItems, setFilteredItems] = useState<Item[]>(items);

	const handleSearch = (sortedItems: Item[]) => {
		// Update the state with the sorted items when the Searchbar component calls the callback
		setFilteredItems(sortedItems);
	};

	return (
		<>
			<div className="items-container">
				<Searchbar itemsToFilter={items} onSearch={handleSearch} />
				{error && <div>{error}</div>}
				{loading && <div>loading...</div>}
				{filteredItems && (
					<div className="items-grid">
						{filteredItems.map((item: Item) => (
							<Card item={item} key={item.item_id} />
						))}
					</div>
				)}
			</div>
		</>
	);
}
