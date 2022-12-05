import { useState, useMemo, useEffect } from "react";
import MarkedItem from "./markerItem";
import '../styles/results.css'

export default function Results({
	items,
	onItemSelected,
	query,
	onResultsCalculated,
}) {
	const [results, setResults] = useState([]);
	const filteredItems = useMemo(() => findMatch(items, query), [items, query]);

	useEffect(() => {
		onResultsCalculated(results);
	}, [results]);

	function findMatch(items, query) {
		const res = items.filter((q) => {
			return (
				q.title.toLowerCase().indexOf(query) >= 0 &&
				query.length > 0 &&
				query !== ""
			);
		});
		setResults(res);

		return res;
	}

	return (
		<div className="resultsContainer">
			{query !== ""
				? filteredItems.map((item) => (
						<MarkedItem key={item.id} item={item} query={query} onClick={onItemSelected} />
				  ))
				: ""}
		</div>
	);
}
