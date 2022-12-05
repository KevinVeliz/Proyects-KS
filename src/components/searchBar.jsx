import React, { useState } from "react";
import Results from "./results";
import "../styles/search.css";

export default function SearchBar({ items, onItemSelected }) {
	const [query, setQuery] = useState("");
	const [results, setResults] = useState([]);

	function handleOnChange(e) {
		const value = e.target.value;
		setQuery(value);
	}

	function handleResults(items) {
		setResults(items);
	}

	return (
		<div className="searchBar">
			{results && <div>{results.length} results</div>}
			<input
				className="searchInput"
				type="text"
				onChange={handleOnChange}
				value={query}
			/>
			<Results
				items={items}
				onItemSelected={onItemSelected}
				query={query}
				onResultsCalculated={handleResults}
			/>
		</div>
	);
}
