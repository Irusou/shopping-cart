import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Searchbar from "../Searchbar/Searchbar";

export default function Navbar() {
	return (
		<nav className="navbar">
			<h1 className="page-title">SHOPIFY</h1>
			<ul className="links">
				<li className="link">
					<Link to={"/"}>Home</Link>
				</li>
				<li className="link">
					<Link to={"/about"}>About</Link>
				</li>
				<li className="link">
					<Link to={"/cart"}>Cart</Link>
				</li>
				<li className="link">
					<Link to={"/login"}>Auth</Link>
				</li>
			</ul>
			<Searchbar />
			<div className="menu">
				<span>{/** TODO: Import icon from font-awesome */}</span>
			</div>

			<div className="open-menu">
				<ul className="links">
					<li className="link">
						<Link to={"/"}>Home</Link>
					</li>
					<li className="link">
						<Link to={"/about"}>About</Link>
					</li>
					<li className="link">
						<Link to={"/cart"}>Cart</Link>
					</li>
					<li className="link">
						<Link to={"/login"}>Auth</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
