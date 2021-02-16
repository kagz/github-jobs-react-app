/* eslint-disable max-len */

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
	Badge,
	Col,
	Container,
	Row,
} from 'react-bootstrap';
import client from '../client';
import SearchJob from './SearchJob';
import {
	MainBody, Title,
	CardBox,
	StyledLink, CompanyDetail,
	CompanyLogo, JobDescription,
	JobTitle, JobLocation,
	TimeIcon, LocIcon,
	ClickButton,
} from './index.elements';
import CustomPagination from './CustomPagination';

const MainCard = styled.div`
	padding: 20px;
	border-radius: 5px;
	background: #100e17;
	box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
	margin: 7px;
`;

function Home() {
	const [jobs, setJobs] = useState(null);
	const [pageCount, setPageCount] = useState(1);
	const [currentPage, setcurrentPage] = useState(0);

	if (jobs === null) return <p>Loading...</p>;
	if (!jobs.length) return <p>There are no jobs...</p>;

	const handlePageChange = selectedObject => {
		setcurrentPage(selectedObject.selected);
		// use effect stuff
		useEffect(() => {
			client.get('/positions.json', { params: { page: currentPage } })
				.then(res => res.data.map(({
					url,
					company_url,
					created_at,
					how_to_apply,
					company_logo,
					...job
				}) => ({
					// setPageCount: res.data.length !== 0, ==>here how do i set my page count to use results length?? setPageCount(res.data.length ) is not working
					...job,
					howToApply: how_to_apply,
					companyLogo: company_logo,
					url: new URL(url),
					companyUrl: company_url ? new URL(company_url) : null,
					createdAt: new Date(created_at).toLocaleDateString(),
				})))
				.then(setJobs);
		}, []);
	};
	return (
		<>
			<Container>
				<MainBody>
					<Title>Search For Developer Jobs</Title>
					<MainCard>
						<div className="d-none d-md-block">
							<SearchJob />
						</div>
						<CustomPagination pageCount={pageCount} handlePageChange={handlePageChange} />
						<Row>
							{/* card smaple */}
							{
								!jobs ? (
									<p>loading..stuffs....</p>)

									: jobs.map(job => (
										<Col lg={4} md={6} xs={12} key={job.id}>
											<CardBox>
												<StyledLink to={`/${job.id}`}>
													<div>
														<CompanyDetail>
															<CompanyLogo src={job.companyLogo} roundedCircle />
															<h6>
																{job.company}
															</h6>
														</CompanyDetail>
													</div>
													<JobDescription>
														<JobTitle>
															{job.title}
														</JobTitle>
														<JobLocation>
															<li>
																<Badge pill>
																	<TimeIcon />	{job.createdAt}
																</Badge>
															</li>
															<li>
																<Badge pill>
																	<LocIcon />	{job.location}
																</Badge>
															</li>
														</JobLocation>
													</JobDescription>
													<ClickButton>
													Open Job
													</ClickButton>

												</StyledLink>
											</CardBox>
										</Col>
									))
							}
							{/* card smaple */}
						</Row>
						<CustomPagination pageCount={pageCount} handlePageChange={handlePageChange} />
					</MainCard>
				</MainBody>

			</Container>

		</>
	);
}
export default Home;
