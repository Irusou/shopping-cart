import "./ItemsDisplay.css";

import Card from "../Card/Card";
import Item from "../../Item";
import useFetch from "./../../useFetch";

export default function ItemsDisplay() {
	const url = "http://localhost:3333/items";
	const { data: items, loading, error } = useFetch(url);

	return (
		<>
			<div className="items-container">
				{error && <div>{error}</div>}
				{loading && <div>loading...</div>}
				{items && (
					<div>
						{items.map((item: Item) => (
							<Card item={item} />
						))}
					</div>
				)}
			</div>
		</>
	);
}
