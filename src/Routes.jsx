import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './components';
import JobDetail from './components/pages/JobDetail';

function Routes() {
	return (

		<Router>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/job/:id" exact component={JobDetail} />
			</Switch>

		</Router>

	);
}

export default Routes;
