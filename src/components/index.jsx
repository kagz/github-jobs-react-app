/* eslint-disable max-len */
import React from 'react';
import {
	Badge, Form, Image, Pagination,
} from 'react-bootstrap';
import { FcOvertime } from 'react-icons/fc';
import { GoLocation } from 'react-icons/go';

function Home() {
	return (
		<>
			<div className="container">
				<div className="main-body">
					<h2 c>Search For Developer Jobs</h2>
					<div className="main-card">
						<div>
							<Form className="search-part">
								<Form.Group>
									<Form.Label className="form-label">Description</Form.Label>
									<Form.Control placeholder="Javascript,Python etc" type="text" name="description" className="custom-text" />
								</Form.Group>

								<Form.Group>
									<Form.Label className="form-label">Location</Form.Label>
									<Form.Control placeholder="Where?" type="text" name="location" className="custom-text" />
								</Form.Group>

								<Form.Group>
									<Form.Label className="form-label">Type</Form.Label>
									<Form.Control as="select" custom className="custom-text">
										<option>Full Time</option>
										<option>Part Time</option>
									</Form.Control>
								</Form.Group>
							</Form>

						</div>
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
						<div className="job-card row">

							{/* card smaple */}
							<div className="col-lg-4">
								<div className="card-box">
									<a href="http://">
										<div>
											<div className="company-detail">
												<Image src="https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdmFWIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--5c05590a3577c62018b93e18460d469129da8539/logo.shapes.jpg" roundedCircle />
												<h6>
										My Company
												</h6>
											</div>
										</div>
										<div className="job-description">
											<h5>
												Full Stack Web Dev
											</h5>
											<ul>
												<li>

													<Badge pill className="badge-time">
														<FcOvertime />	today 10:00 pm
													</Badge>
												</li>
												<li>

													<Badge pill className="badge-location">
														<GoLocation />	today 10:00 pm
													</Badge>
												</li>
											</ul>

										</div>

										<div>
											<span className="view-btn">
											Open Job
											</span>
										</div>
									</a>
								</div>
							</div>
							{/* card smaple */}
						</div>
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
				</div>

			</div>

		</>
	);
}

export default Home;
