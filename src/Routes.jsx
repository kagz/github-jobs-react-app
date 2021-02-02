import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components';
import GlobalStyle from './components/GlobalStyled';
import JobDetail from './components/pages/JobDetail';

function Routes() {
	return (
		<Router>
			<GlobalStyle />

			<Switch>

				<Route path="/" exact component={Home} />
				<Route path="/job/:id" exact component={JobDetail} />
			</Switch>
		</Router>

	);
}

export default Routes;
