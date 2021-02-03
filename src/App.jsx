import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import GlobalStyle from './GlobalStyle';
import Routes from './Routes';

function App() {
	return (
		<>
			<GlobalStyle />
			<Header />
			<Routes />
			<Footer />

		</>
	);
}

export default App;
