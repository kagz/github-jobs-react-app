/* eslint-disable max-len */

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
	Badge,
	Button,
	Col,
	Container,
	Row,
} from 'react-bootstrap';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import client from '../client';
import SearchJob from './SearchJob';
import {
	MainBody, Title,
	CardBox, StyledLink, CompanyDetail,
	CompanyLogo, JobDescription,
	JobTitle, JobLocation,
	TimeIcon, LocIcon,
	ClickButton,
} from './index.elements';

const JOBS_PER_PAGE = 50;

const MainCard = styled.div`
	padding: 20px;
	border-radius: 5px;
	background: #100e17;
	box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
	margin: 7px;
`;

const LoadMoreButton = styled(Button)`
	margin-right: auto;
	margin-left: auto;
	display:block;
	margin-top:4px;
	margin-bottom:4px;
`;
dayjs.extend(relativeTime);
function Home() {
	const [isLoading, setIsLoading] = useState(false);
	const [hasMore, setHasMore] = useState(false);
	const [allJobs, setAllJobs] = useState([]);
	const [sortedJobs, setSortedJobs] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');
	async function getJobs() {
		if (isLoading) return;
		setIsLoading(true);
		return client.get('/positions.json', {
			params: { page: Math.ceil(allJobs.length / JOBS_PER_PAGE) },
		})
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
				createdAt: new Date(created_at),
			})))
			.then(setAllJobs)
			.catch(error => {
				if (error.response.status === 404) setHasMore(false);
				else return Promise.reject(error);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}

	useEffect(() => {
		getJobs();
	}, []);

	//
	const onSearch = term => setSearchTerm(term);

	useEffect(() => {
		setSortedJobs(// hustle.full_time.includes(searchTerm.fullTime)
			allJobs.filter(hustle => hustle.location.toLowerCase().includes(searchTerm.toLowerCase())),
		);
	}, [searchTerm, allJobs]);

	return (
		<Container>
			<MainBody>
				<Title>Search For Developer Jobs</Title>
				<MainCard>
					<div className="d-none d-md-block">
						<SearchJob onSearch={onSearch} />
					</div>
					<LoadMoreButton disabled={isLoading || hasMore} onClick={getJobs}>
						Load More
					</LoadMoreButton>
					<Row>
						{/* card sample */}
						{
							// eslint-disable-next-line no-nested-ternary
							isLoading ? (<p>Loadingzzz...</p>)
								: !sortedJobs.length ? (
									<p>No Jobs Niggaa!!</p>)
									: sortedJobs.map(job => (
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
																	<TimeIcon />	{dayjs(job.createdAt).fromNow()}
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
					<LoadMoreButton disabled={isLoading || hasMore} onClick={getJobs}>
						Load More
					</LoadMoreButton>
				</MainCard>
			</MainBody>
		</Container>
	);
}
export default Home;
