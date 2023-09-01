import "./App.css";

import Landing from "./components/pages/Landing";
import Cart from "./components/pages/Cart";
import Login from "./components/pages/Login";

import {
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router-dom";
import About from "./components/pages/About";

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<Landing />}>
				<Route path="about" element={<About />} />
				<Route path="cart" element={<Cart />} />
				<Route path="login" element={<Login />} />
			</Route>
		)
	);

	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
