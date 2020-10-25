import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './container/Login';
import Editor from './container/Editor';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/editor" component={Editor} />
				<Route exact path="/" component={Login} />
			</Switch>
		</Router>
	);
};

export default App;
