import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/Login.css';
const Login = () => {
	const [user, setUser] = useState({
		username: '',
		password: '',
	});
	const history = useHistory();
	const User = localStorage.getItem('user');
	if (User) {
		history.push('/editor');
	}

	const handleChange = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		localStorage.setItem('user', JSON.stringify(user));
	};
	return (
		<div className="page-container">
			<div className="login-container">
				<h1>Login</h1>
				<hr />
				<form onSubmit={handleSubmit}>
					<label className="input-label">Username: </label>
					<input
						className="input-login"
						type="text"
						placeholder="Type your username"
						name="username"
						value={user.username}
						onChange={handleChange}
						required
					/>
					<br />
					<label className="input-label">Password: </label>
					<input
						className="input-login"
						type="password"
						placeholder="Password"
						name="password"
						value={user.password}
						onChange={handleChange}
						required
					/>
					<br />
					<br />
					<button className="btn_login" type="submit">
						Sign in
					</button>
				</form>
			</div>
		</div>
	);
};
export default Login;
