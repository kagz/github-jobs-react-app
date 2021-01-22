/* eslint-disable max-len */
import React from 'react';
import { Form, Pagination } from 'react-bootstrap';

function Home() {
	return (
		<>
			<div className="container">
				<div className="main-body">
					<h4 className="mt-3">Search For Developer Jobs</h4>
					<div className="main-card">
						<div className="search-part">
							<Form>
								<Form.Group controlId="exampleForm.SelectCustom">
									<Form.Label className="form-label">Title</Form.Label>
									<Form.Control as="select" custom className="custom-select">
										<option>Fullstack</option>

									</Form.Control>
								</Form.Group>
							</Form>
							<Form>
								<Form.Group controlId="exampleForm.SelectCustom">
									<Form.Label className="form-label">Type</Form.Label>
									<Form.Control as="select" custom className="custom-select">
										<option>Full Time</option>
									</Form.Control>
								</Form.Group>
							</Form>
							<Form>
								<Form.Group controlId="exampleForm.SelectCustom">
									<Form.Label className="form-label">Location</Form.Label>
									<Form.Control as="select" custom className="custom-select">
										<option>Kibera</option>
									</Form.Control>
								</Form.Group>
							</Form>

						</div>
						<div className="pagination-part">
							<Pagination>
								<Pagination.First />
								<Pagination.Prev />
								<Pagination.Item>{1}</Pagination.Item>
								<Pagination.Ellipsis />
								<Pagination.Item>{10}</Pagination.Item>
								<Pagination.Item>{11}</Pagination.Item>
								<Pagination.Item active>{12}</Pagination.Item>
								<Pagination.Item>{13}</Pagination.Item>
								<Pagination.Ellipsis />
								<Pagination.Item>{20}</Pagination.Item>
								<Pagination.Next />
								<Pagination.Last />
							</Pagination>
						</div>
						<div className="job-card">
							jobukadiii
						</div>
					</div>
				</div>

			</div>

		</>
	);
}

export default Home;
