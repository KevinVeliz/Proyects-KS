import { useState } from "react";
import { useAppContext } from "../store/store";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../components/layout";

export default function Create() {
	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");
	const [cover, setCover] = useState("");
	const [intro, setIntro] = useState("");
	const [completed, setCompleted] = useState(false);
	const [review, setReview] = useState("");

	const store = useAppContext();
	const navigate = useNavigate();

	const inputStyles = {
		formContainer: {
			width: "400px",
			margin: "0 auto",
		},
		container: {
			display: "flex",
			flexDirection: "column",
			gap: "5px",
			margin: "15px 0",
		},
		title: {
			fontSize: "16px",
			textAlign: "left",
		},
		input: {
			padding: "10px",
			borderRadius: "5px",
			fontSize: "16px",
		},
	};

	function handleChange(e) {
		switch (e.target.name) {
			case "title":
				setTitle(e.target.value);
				break;
			case "author":
				setAuthor(e.target.value);
				break;
			case "intro":
				setIntro(e.target.value);
				break;
			case "completed":
				setCompleted(e.target.checked);
				break;
			case "review":
				setReview(e.target.value);
				break;
			default:
		}
	}

	function handleOnChangeFile(e) {
		const element = e.target;
		const file = element.files[0];
		const reader = new FileReader();

		reader.readAsDataURL(file);

		reader.onloadend = function () {
			setCover(reader.result.toString());
		};
	}

	function handleSubmit(e) {
		e.preventDefault();

		const newBook = {
			id: crypto.randomUUID(),
			title,
			author,
			cover,
			intro,
			completed,
			review,
		};

		const titleExisten = store.items.map((item) => item.title);
		const titleInclude = titleExisten.includes(title);

		if (titleInclude !== true) {
			if (title !== "" && author !== "" && intro !== "" && review !== "") {
				store.createItem(newBook);
				navigate("/");
			} else {
				alert("Fill in all the fields");
			}
		} else {
			alert("Repeated title");
		}
	}

	return (
		<Layout>
			<form onSubmit={handleSubmit} style={inputStyles.formContainer}>
				<div style={inputStyles.container}>
					<div style={inputStyles.title}>Title</div>
					<input
						style={inputStyles.input}
						type="text"
						name="title"
						onChange={handleChange}
						value={title}
					/>
				</div>

				<div style={inputStyles.container}>
					<div style={inputStyles.title}>Autor</div>
					<input
						style={inputStyles.input}
						type="text"
						name="author"
						onChange={handleChange}
						value={author}
					/>
				</div>

				<div style={inputStyles.container}>
					<div style={inputStyles.title}  >Cover</div>
					<input type="file" name="cover" onChange={handleOnChangeFile} />
					<div>
						{!!cover ? (
							<img src={cover} width="200" height="200" alt="preview" />
						) : (
							""
						)}
					</div>
				</div>

				<div style={inputStyles.container}>
					<div style={inputStyles.title}>Introduction</div>
					<input
						style={inputStyles.input}
						type="text"
						name="intro"
						onChange={handleChange}
						value={intro}
					/>
				</div>

				<div >
					<div style={inputStyles.title}>Complete
					<input
						style={{padding: "10px",
                        borderRadius: "5px",
                        fontSize: "16px",
                    margin: '20px'}}
						type="checkbox"
						name="completed"
						onChange={handleChange}
						value={completed}
                        />
                    </div>
				</div>

				<div style={inputStyles.container}>
					<div style={inputStyles.title}>Review</div>
					<input
						style={inputStyles.input}
						type="text"
						name="review"
						onChange={handleChange}
						value={review}
					/>
				</div>

				<input
					style={{
						padding: "15px 15px",
						minWidth: "200px",
						border: "none",
						borderRadius: "5px",
						backgroundColor: "#1e9638",
						color: "white",
						fontWeigth: "bolder",
						fontSize: "18px",
                        margin: '5px'
					}}
					type="submit"
					value="Register book"
				/>
			</form>
		</Layout>
	);
}
