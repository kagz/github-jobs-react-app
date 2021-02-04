import React, { useState } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import * as FaIcons from 'react-icons/fa';
import SearchJob from './SearchJob';

function Header() {
	const [sidebar, setSidebar] = useState(false);

	const showSidebar = () => setSidebar(!sidebar);
	return (
		<>
			<Navbar expand="lg" fixed="top" bg="dark" variant="dark">
				<Navbar.Brand href="/">Git Jobs</Navbar.Brand>
				<Button
					className="d-md-none"
					variant="secondary"
					size="sm"
					onClick={showSidebar}
				>
					{sidebar ? <FaIcons.FaSearchMinus /> : <FaIcons.FaSearchPlus />}
				</Button>
			</Navbar>
			<Nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
				<ul className="nav-menu-items">
					<SearchJob />
				</ul>
			</Nav>
		</>
	);
}

export default Header;
