import Layout from "../components/layout";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppContext } from "../store/store";
import "../styles/view.css";

export default function View() {
	const [item, setItem] = useState({});
	const [author, setAuthor] = useState("");
	const [title, setTitle] = useState("");
	const [intro, setIntro] = useState("");
	const [review, setReview] = useState("");
	let newAuthor, newTitle, newReview, newIntro;
	const params = useParams();
	const store = useAppContext();
	const navigate = useNavigate();

	useEffect(() => {
		const book = store.getItem(params.bookId);
		setAuthor(item?.author);
		setTitle(item?.title);
		setIntro(item?.intro);
		setReview(item?.review);
		setItem(book);
	}, [item]);

	function updateValue() {
		let values = JSON.parse(localStorage.getItem("books"));

		values.map(function (value) {
			if (value.id === item.id) {
				newAuthor = author;
				newTitle = title;
				newIntro = intro;
				newReview = review;

				let valuesNew = (value.author = newAuthor);
				let newValues = (value.title = newTitle);
				let newIntros = (value.intro = newIntro);
				let newReviews = (value.review = newReview);

				value.author = valuesNew;
				value.title = newValues;
				value.intro = newIntros;
				value.review = newReviews;
			}
			return value;
		});

		let totalJSON = JSON.stringify(values);
		localStorage.setItem("books", totalJSON);
		navigate('/')
		window.location.reload();
	}

	if (!item) {
		return <Layout>Book no found</Layout>;
	}
	return (
		<Layout>
			<div className="container">
				<div>
					<div className="imageCSS">
						{item?.cover ? (
							<img src={item?.cover} className="imageItem" alt="img" />
						) : (
							""
						)}
					</div>
				</div>
				<div className="ItemsCSS">
					<div className="">
						<h4>Title:</h4>
						<div>
							<input
								className="inputFormat"
								type="text"
								value={title}
								onChange={(e) => setTitle(e.target.value)}
							/>
						</div>
					</div>
					<div className="inputs">
						Author:
						<input
						 className="inputsGeneral"
							type="text"
							value={author}
							onChange={(e) => setAuthor(e.target.value)}
						/>
					</div>
					<div className="inputs">
						Introduction:
						<input
						className="inputsGeneral"
							type="text"
							value={intro}
							onChange={(e) => setIntro(e.target.value)}
						/>
					</div>
					<div className="inputs">
						Completed:{item?.completed ? "Leido" : "Por terminar de leer"}
					</div>
					<div className="inputs">
						Review:{" "}
						<input
						className="inputsGeneral"
							type="text"
							value={review}
							onChange={(e) => setReview(e.target.value)}
						/>
					</div>
					<div className="buttonCSS">
						<button className="buttonView" onClick={updateValue}>
							Update value
						</button>
					</div>
				</div>
			</div>
		</Layout>
	);
}
