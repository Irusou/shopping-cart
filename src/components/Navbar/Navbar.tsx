import React from "react";
import "./Navbar.css";
import Button from "../Button/Button";
import Select from "../Select/Select";
import { Link } from "react-router-dom";

export default function Navbar() {
	const handleClick = () => console.log("hello world");

	return (
		<nav className="navbar">
			<div className="menu-container">
				<Button
					text={"Menu"}
					icon="="
					onClick={handleClick}
					type="transparent"
				/>
				<img alt="shopify-image" />
			</div>
			<div className="links-container">
				<ul>
					<li>
						<Link to="/">
							Home <span></span>
						</Link>
					</li>
					<li>
						<Link to="/cart">
							Cart <span></span>
						</Link>
					</li>
					<li>
						<Link to="/login">
							Login <span></span>
						</Link>
					</li>
				</ul>
			</div>
			<div className="checkout-container">
				<Select />
				<Button text={"Buy Now"} onClick={handleClick} type="vibrant" />
			</div>
		</nav>
	);
}
