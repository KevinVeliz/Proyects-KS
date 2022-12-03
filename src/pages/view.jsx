import Layout from "../components/layout";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppContext } from "../store/store";

export default function View() {
	const [item, setItem] = useState({});
	const params = useParams();
	const store = useAppContext();
	const navigate = useNavigate();

	useEffect(() => {
		const book = store.getItem(params.bookId);
		setItem(book);
	}, []);

	const itemStyles = {
		container: {
			display: "flex",
			gap: "20px",
			width: "800px",
			margin: "50px auto",
		},
	};

	if (!item) {
		return <Layout>Book no found</Layout>;
	}
	return (
		<Layout>
			<div style={itemStyles.container}>
				<div>
					<div>
						{item?.cover ? <img src={item?.cover} width="400" alt="img" /> : ""}
					</div>
				</div>
				<div>
					<h2>{item?.title}</h2>
					<div>{item?.author}</div>
					<div>{item?.intro}</div>
					<div>{item?.completed ? "Leido" : "Por terminar de leer"}</div>
					<div>{item?.review}</div>
				</div>
			</div>
		</Layout>
	);
}
