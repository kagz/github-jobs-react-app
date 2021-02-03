/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import * as FaIcons from 'react-icons/fa';
import SearchJob from './SearchJob';

function Header() {
	const [sidebar, setSidebar] = useState(false);

	const showSidebar = () => setSidebar(!sidebar);
	return (
		<div>
			<Navbar expand="lg" bg="dark" variant="dark">
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
				<ul className="nav-menu-items" onClick={showSidebar} onKeyDown={showSidebar}>
					<SearchJob />
				</ul>
			</Nav>
		</div>
	);
}

export default Header;
