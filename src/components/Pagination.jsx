import React from 'react';
import {
	Pagination,
} from 'react-bootstrap';

function Paginations() {
	return (
		<div>
			<div className="pagination-part">
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
			</div>
		</div>
	);
}

export default Paginations;
