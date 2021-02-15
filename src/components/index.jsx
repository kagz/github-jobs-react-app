/* eslint-disable max-len */

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
	Badge,
	Col,
	Container,
	Pagination,
	Row,
} from 'react-bootstrap';
import client from '../client';
import SearchJob from './SearchJob';
import {
	MainBody, Title,
	StyledPagination, CardBox,
	StyledLink, CompanyDetail,
	CompanyLogo, JobDescription,
	JobTitle, JobLocation,
	TimeIcon, LocIcon,
	ClickButton,
} from './index.elements';

const MainCard = styled.div`
	padding: 20px;
	border-radius: 5px;
	background: #100e17;
	box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
	margin: 7px;
`;

function Home() {
	const [jobs, setJobs] = useState(null);

	useEffect(() => {
		client.get('/positions.json')
			.then(res => res.data.map(({
				url,
				company_url,
				created_at,
				how_to_apply,
				company_logo,
				...job
			}) => ({
				...job,
				howToApply: how_to_apply,
				companyLogo: company_logo,
				url: new URL(url),
				companyUrl: company_url ? new URL(company_url) : null,
				createdAt: new Date(created_at),
			})))
			.then(setJobs);
	}, []);

	if (jobs === null) return <p>Loading...</p>;
	if (!jobs.length) return <p>There are no jobs...</p>;

	return (
		<>
			<Container>
				<MainBody>
					<Title>Search For Developer Jobs</Title>
					<MainCard>
						<div className="d-none d-md-block">
							<SearchJob />
						</div>
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
															<CompanyLogo src={job.company_logo} roundedCircle />
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
																	<TimeIcon />	{new Date(job.created_at).toLocaleDateString()}
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
					</MainCard>
				</MainBody>

			</Container>

		</>
	);
}
export default Home;
