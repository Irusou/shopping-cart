import { useEffect, useState } from "react";

const useFetch = (url: string) => {
	const [data, setData] = useState([]);
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

export default useFetch;
