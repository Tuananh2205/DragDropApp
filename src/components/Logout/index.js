import React from 'react';
import './index.css';
const Logout = (props) => {
	const handleLogout = () => {
		localStorage.removeItem('user');
		props.history.push('/');
	};

	return (
		<div>
			<button className="btn-logout" type="submit" onClick={handleLogout}>
				Logout
			</button>
		</div>
	);
};

export default Logout;
