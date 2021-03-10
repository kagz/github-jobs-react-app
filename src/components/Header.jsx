import React, { useState, useEffect } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import * as FaIcons from 'react-icons/fa';
import SearchJob from './SearchJob';

function Header() {
	const [sidebar, setSidebar] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');
	const onSearch = term => setSearchTerm(term);
	const showSidebar = () => setSidebar(!sidebar);

	useEffect(() => {

	}, [searchTerm]);
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
					<SearchJob onSearch={onSearch} />
				</ul>
			</Nav>
		</>
	);
}

export default Header;
