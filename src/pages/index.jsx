import { useAppContext } from "../store/store";
import { Link } from "react-router-dom";
import Layout from "../components/layout";
import Book from "../components/book";
import "../styles/index.css";

export default function Index() {
	const store = useAppContext();

	

	console.log(store.items);
	return (
		<>
			{store.items.length === 0 ? (
				<Layout>
					<div className="container">
						<h1>Ingresa un libro</h1>
					</div>
				</Layout>
			) : (
				<Layout>
					<div className="container">
						{store.items.map((item) => (
							<>
								<Book key={item.id} item={item} />
								<div className="button">
								</div>
							</>
						))}
					</div>
				</Layout>
			)}
		</>
	);
}
