import React from 'react';
import {
	Pagination,
} from 'react-bootstrap';
import styled from 'styled-components';

const StyledPagination = styled.div`
display: flex;
	justify-content: center;
	padding-top: 8px;
`;

// const

function Paginations() {
	return (
		<div>
			<StyledPagination>
				<Pagination>
					{/* <Pagination.First /> */}
					{/* <Pagination.Prev /> */}
					{/* <Pagination.Item>{1}</Pagination.Item> */}
					{/* <Pagination.Ellipsis /> */}
					<Pagination.Item>{1}</Pagination.Item>
					<Pagination.Item>{2}</Pagination.Item>
					<Pagination.Item>{3}</Pagination.Item>
					<Pagination.Item>{4}</Pagination.Item>

					{/* <Pagination.Item active>{12}</Pagination.Item> */}
					<Pagination.Item>{5}</Pagination.Item>
					{/* <Pagination.Ellipsis /> */}
					{/* <Pagination.Item>{20}</Pagination.Item> */}
					{/* <Pagination.Next /> */}
					{/* <Pagination.Last /> */}
				</Pagination>
			</StyledPagination>
		</div>
	);
}

export default Paginations;
