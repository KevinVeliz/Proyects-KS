import { Link } from "react-router-dom";
import "../styles/book.css";

export default function Book({ item }) {
	const bookContainerStyle = {
		display: "flex",
		flexDirection: "column",
		width: "300px",
	};

	const bookInfoStyle = {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		textAlign: "center",
		textDecoration: "none",
	};

	

	function handleDelete(itemId) {
		let data = JSON.parse(localStorage.getItem("books"));
		const isDelete = window.confirm(`Are you sure you want to delete`);
		let totalJSON;
		if (!!isDelete) {
			const newData = data.filter((i) => i.id !== itemId);
			totalJSON = JSON.stringify(newData);
			localStorage.setItem("books", totalJSON);

			alert("Book deleted");
			window.location.reload();
		} else {
			return false;
		}
	}

	return (
		<div style={bookContainerStyle}>
			<h1 className="TitleViewGeneral">{item.title}</h1>
				<img src={item.cover} width="300" height="400px" alt={item.title} />
			<Link to={`/view/${item.id}`} style={bookInfoStyle}>
				<button className="buttonView">View more</button>
			</Link>
			<div className="button-book">
				<button className="buttonBook" onClick={() => handleDelete(item.id)}>
					Delete
				</button>
			</div>
		</div>
	);
}
