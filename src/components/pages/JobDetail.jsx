import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const MainBody = styled.div`
color: #b7cbd9;
min-height: 100vh;
border-radius: 5px;`;

const MainCard = styled.div`
padding: 20px;
border-radius: 5px;
background: #100e17;
box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
margin: 7px;
`;

function JobDetail() {
	return (

		<Container>
			<MainBody>
				<MainCard>
				woooooooiiiii  shiiit
				</MainCard>
			</MainBody>
		</Container>

	);
}

export default JobDetail;
