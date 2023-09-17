import "./ItemsDisplay.css";

import Card from "../Card/Card";
import Item from "../../Item";
import Searchbar from "../Searchbar/Searchbar";
import useFetch from "../hooks/useFetch";
import { useState, useEffect } from "react";
import { ProgressBar } from "react-loader-spinner";

export default function ItemsDisplay() {
	const url = "http://localhost:8008/items";
	const { data: items, loading, error } = useFetch(url);

	const [filteredItems, setFilteredItems] = useState<Item[]>(items);

	const handleSearch = (sortedItems: Item[]) => {
		setFilteredItems(sortedItems);
	};

	useEffect(() => {
		setFilteredItems(items);
	}, [items]);

	return (
		<>
			<div className="items-container">
				<Searchbar itemsToFilter={items} onSearch={handleSearch} />
				{error && <div>{error}</div>}
				{loading && (
					<ProgressBar
						height="80"
						width="80"
						ariaLabel="progress-bar-loading"
						wrapperStyle={{}}
						wrapperClass="progress-bar-wrapper"
						borderColor="#ffffff"
						barColor="#71bdff"
					/>
				)}
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
