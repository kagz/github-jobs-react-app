import React from 'react';
import ReactPaginate from 'react-paginate';
// the props here are complaining ====>is missing in props validation
function CustomPagination({ pageCount, handlePageChange }) {
	return (
		<div>
			<ReactPaginate
				pageCount={pageCount}
				pageRange={2}
				marginPagesDisplayed={2}
				onPageChange={handlePageChange}
				containerClassName="container"
				previousLinkClassName="page"
				breakClassName="page"
				nextLinkClassName="page"
				pageClassName="page"
				disabledClassNae="disabled"
				activeClassName="active"
			/>
		</div>
	);
}

export default CustomPagination;
