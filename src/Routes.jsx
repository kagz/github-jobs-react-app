import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components';
import JobDetail from './components/pages/JobDetail';

function Routes() {
	return (
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/job/:id" exact component={JobDetail} />
		</Switch>
	);
}

export default Routes;
