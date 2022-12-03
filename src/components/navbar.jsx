import { useState } from "react";
import { Link } from "react-router-dom";

import '../styles/Navbar.css'

export default function Navbar() {

    const [show, setShow] = useState(true)

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">
					Books
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavDropdown"
					aria-controls="navbarNavDropdown"
					aria-expanded="false"
					aria-label="Toggle navigation"
                    onClick={()=>setShow(!show)}>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className={show ? "collapse navbar-collapse" : "collapse navbar-collapse active" } id="navbarNavDropdown">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link className="nav-link" to="/">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/create">
								Create
							</Link>
						</li>						
					</ul>
				</div>
			</div>
		</nav>
	);
}
