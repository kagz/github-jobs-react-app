import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer';
import GlobalStyle from './GlobalStyle';
import Routes from './Routes';

function App() {
	return (
		<>
			<GlobalStyle />
			<Router>
				<Routes />
				<Footer />
			</Router>
		</>
	);
}
export default App;
