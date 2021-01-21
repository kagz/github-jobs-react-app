import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

function Header() {
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Navbar.Brand href="/">Github Jobs React App</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="ml-auto">
					<Nav.Link href="/">About Me</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default Header;
