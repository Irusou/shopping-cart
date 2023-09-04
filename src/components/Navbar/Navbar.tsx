import { useState } from "react";
import "./Navbar.css";
import Searchbar from "../Searchbar/Searchbar";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { IconContext } from "react-icons";

export default function Navbar() {
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		console.log(open);

		setOpen(!open);
	};

	return (
		<nav className="navbar">
			<h1 className="page-title">
				<Link to={"/"}>SHOPIFY</Link>
			</h1>
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
				<button className="menu-button" onClick={handleClick}>
					<IconContext.Provider value={{ color: "white", className: "icon" }}>
						<span className="icon">
							{open === false ? <FaBars /> : <MdOutlineClose />}
						</span>
					</IconContext.Provider>
				</button>
			</div>

			<div className="open-menu" data-open={open}>
				<ul className="links">
					<li className="link">
						<Link to={"/"} onClick={handleClick}>
							Home
						</Link>
					</li>
					<li className="link">
						<Link to={"/about"} onClick={handleClick}>
							About
						</Link>
					</li>
					<li className="link">
						<Link to={"/cart"} onClick={handleClick}>
							Cart
						</Link>
					</li>
					<li className="link">
						<Link to={"/login"} onClick={handleClick}>
							Auth
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
