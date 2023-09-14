import "./ItemsDisplay.css";

import Card from "../Card/Card";
import Item from "../../Item";
import { useEffect, useState } from "react";
import Searchbar from "../Searchbar/Searchbar";
// import {useFetch} from "./../../useFetch";

export default function ItemsDisplay() {
	const url = "http://localhost:8008/items";

	const useFetch: any = (url: string) => {
		const [data, setData] = useState(null);
		const [loading, setLoading] = useState(true);
		const [error, setError] = useState(null);

		useEffect(() => {
			const abortController = new AbortController();

			setTimeout(() => {
				fetch(url, { signal: abortController.signal })
					.then((res) => {
						if (!res.ok) {
							throw Error("could not fetch the data.");
						}
						return res.json();
					})
					.then((data) => {
						setData(data);
						setLoading(false);
						setError(null);
					})
					.catch((err) => {
						if (err.name === "AbortError") {
							console.log("fetch aborted");
						} else {
							setError(err.message);
							setLoading(false);
						}
					});
			}, 1000);

			return () => abortController.abort();
		}, [url]);

		return {
			data,
			loading,
			error,
		};
	};

	const { data: items, loading, error } = useFetch(url);

	return (
		<>
			<Searchbar itemsToFilter={items} />
			<div className="items-container">
				{error && <div>{error}</div>}
				{loading && <div>loading...</div>}
				{items && (
					<div>
						{items.map((item: Item) => (
							<Card item={item} key={item.item_id} />
						))}
					</div>
				)}
			</div>
		</>
	);
}
