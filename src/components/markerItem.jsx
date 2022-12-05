import React, { useMemo } from "react";
import "../styles/marked.css";

export default function MarkedItem({ item, query, onClick }) {
	const { left, right, center } = useMemo(
		() => getPosition(item, query),
		[item, query]
	);

	function getPosition(item, query) {
		const index = item.title.toLowerCase().indexOf(query);
		const left = item.title.slice(0, index);
		const right = item.title.slice(index + query.length);
		const center = item.title.slice(index, index + query.length);

		return { left, right, center };
	}

	function handleClick(e){
		onClick(item)
	}

	return (
		<button className="itemStyle" onClick={handleClick}>
			{left} 
			<span className="marketStyle">{center}</span> 
			{right}
		</button>
	);
}
