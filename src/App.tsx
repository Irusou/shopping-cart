import "./App.css";

import Landing from "./components/pages/Landing/Landing";
import Cart from "./components/pages/Cart/Cart";
import Login from "./components/pages/Login/Login";
import About from "./components/pages/About/About";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="/about" element={<About />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
