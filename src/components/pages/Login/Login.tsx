import React, { ChangeEvent, useState } from "react";
import "./Login.css";

export default function Login() {
	const [islogin, setIsLogin] = useState(true);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const clearInputs = () => {
		setUsername("");
		setPassword("");
		setConfirmPassword("");
	};

	const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
		setUsername(e.target.value);
	};

	const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	};

	const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
		setConfirmPassword(e.target.value);
	};

	const handleLogin = (e: React.SyntheticEvent) => {
		e.preventDefault();
		if (username == "" || password == "") {
			alert("Cannot be empty fields!");
		}
	};

	const handleRegister = (e: React.SyntheticEvent) => {
		e.preventDefault();
		if (username == "" || password == "" || confirmPassword == "") {
			alert("Cannot be empty fields!");
		}
	};

	return (
		<>
			<div className="login-form">
				{islogin ? (
					<form onSubmit={handleLogin}>
						<div className="form-selector">
							<button
								type="button"
								onClick={() => {
									clearInputs();
									setIsLogin(true);
								}}
							>
								Login
							</button>
							<span> / </span>
							<button
								type="button"
								onClick={() => {
									clearInputs();
									setIsLogin(false);
								}}
							>
								register
							</button>
						</div>

						<div className="inputs-wrapper">
							<label>
								<p>Username</p>
								<input
									type="text"
									onChange={handleUsernameChange}
									value={username}
								/>
							</label>
							<label>
								<p>Password</p>
								<input
									type="password"
									onChange={handlePasswordChange}
									value={password}
								/>
							</label>
						</div>

						<button type="submit" className="submit-button">
							Login
						</button>
					</form>
				) : (
					<form onSubmit={handleRegister}>
						<div className="form-selector">
							<button type="button" onClick={() => setIsLogin(true)}>
								Login
							</button>
							<span> / </span>
							<button type="button" onClick={() => setIsLogin(false)}>
								Register
							</button>
						</div>

						<div className="inputs-wrapper">
							<label>
								<p>Username</p>
								<input
									type="text"
									onChange={handleUsernameChange}
									value={username}
								/>
							</label>
							<label>
								<p>Password</p>
								<input
									type="password"
									onChange={handlePasswordChange}
									value={password}
								/>
							</label>
							<label>
								<p>Confirm Password</p>
								<input
									type="password"
									onChange={handleConfirmPasswordChange}
									value={confirmPassword}
								/>
							</label>
						</div>

						<button type="submit" className="submit-button">
							Register
						</button>
					</form>
				)}
			</div>
		</>
	);
}
