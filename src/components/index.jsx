/* eslint-disable max-len */

import React, { useState, useEffect } from 'react';
import {
	Badge, Button, Col, Container, Image, Pagination, Row,
} from 'react-bootstrap';
import { FaSearchMinus, FaSearchPlus } from 'react-icons/fa';
import { FcOvertime } from 'react-icons/fc';
import { GoLocation } from 'react-icons/go';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import cn from 'classnames';
import client from '../client';
import SearchJob from './SearchJob';

const baseURL = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json';

const MainBody = styled.div`
	color: #b7cbd9;
	min-height: 100vh;
	border-radius: 5px;
`;

const MainCard = styled.div`
	padding: 20px;
	border-radius: 5px;
	background: #100e17;
	box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
	margin: 7px;
`;

const Title = styled.h2`
  font-size: 1.5em;
  text-align: center;
  color: #75062b;
`;
const CardBox = styled.div`
background-color: #222121;
padding: 20px;
margin-bottom: 20px;
width: 100%;
border-radius: 5px;
box-shadow: 5px 5px 10px rgba(27, 27, 27, 0.5);
`;
const StyledLink = styled(Link)`
color: inherit;
&:hover {
	text-decoration: none;
	color: inherit;
}
`;

const CompanyDetail = styled.div`
width: 100%;
text-align: center;
border-bottom: 1px solid #696565;
margin-bottom: 3px;
`;

const CompanyLogo = styled(Image)`
height: 98px;
	width: 98px;
`;
const JobDescription = styled.div`
display: flex;
align-items: center;
flex-direction: column;
overflow: hidden;
  text-overflow: ellipsis;
`;
const JobLocation = styled.ul`
display: flex;
padding: 0;
list-style:none;
`;

const TimeIcon = styled(FcOvertime)`
font-size: 20px;
`;

const LocIcon = styled(GoLocation)`
font-size: 20px;
`;

const ClickButton = styled.span`
	display: inline-block;
	background: #044902;
	padding: 0.45em 1em;
	width: 100%;
	text-align: center;
	border-radius: 5px;
	color: #fff;
	font-weight: 500;
	letter-spacing: 0.2px;
	font-size: 17px;
&:hover {
	background: #097205;
}
`;

const JobTitle = styled.h5`
	color: #b5143d;
    font-size: larger;
`;
const StyledPagination = styled.div`
display: flex;
justify-content: center;
padding-top: 8px;
`;
const MobileSearch = styled.div`
	display: flex;
	justify-content: flex-end;

`;

function Home() {
	const [jobs, setJobs] = useState(
		[
			{
				id: 'db0ff9f6-966c-4376-956f-c9f393d9fce8',
				type: 'Full Time',
				url: 'https://jobs.github.com/positions/db0ff9f6-966c-4376-956f-c9f393d9fce8',
				created_at: 'Fri Jan 22 15:39:45 UTC 2021',
				company: 'TubeScience',
				company_url: 'https://tubescience.com/',
				location: 'Remote, US',
				title: 'Full Stack Developer',
				description: "<p>TubeScience is looking for a talented Full Stack Developer to join our thriving team! This role is remote flexible anywhere in the US.</p>\n<p>Quick ‘about us’:</p>\n<p>We’re a data-driven video startup based in LA that’s grown to become the largest producer of video ads on paid social in the 4 years since founding. Collectively, our videos account for ~5% of all paid video views on Facebook and Instagram in North America and reach 100-200 million people per day.</p>\n<p>What You’ll Do:</p>\n<p>As an experienced Full Stack Developer, you will utilize your strong problem solving, communication skills and proficiency working cross-functionally to deliver products end-to-end. You will build maintainable solutions in a fast moving product development environment, where features are rapidly prototyped and tested with users. You’ll also have a critical role on the TubeScience team as we produce tech solutions to support our rapid business growth. You will work with a high degree of autonomy, with high expectations on ownership and collaboration.</p>\n<p>Objectives:</p>\n<p>We’re looking for a Full Stack Developer focusing on backend services that can create and tie together creative workflows, big data systems and algorithms. We’re a fast moving startup in a hyper growth phase, so we’re continuously balancing quick high impact solutions with designing for scale. If you’re looking to solve problems that no one else has, apply, we’d love to hear from you.</p>\n<p>Responsibilities:</p>\n<ul>\n<li>Own and Develop scalable solutions for internal and external users</li>\n<li>Collaborate with teammates in an agile development environment</li>\n<li>Champion and follow development best practices</li>\n</ul>\n<p>Required Skills and Qualifications:</p>\n<ul>\n<li>5+ years of software development experience</li>\n<li>Experience delivering products end-to-end</li>\n<li>Experience with Python/Flask or Node development</li>\n<li>Experience working with React, Vue, or similar frameworks</li>\n<li>Experience working with relational databases (PostgreSQL, MySQL, Snowflake)</li>\n<li>Experience with Amazon Web Services</li>\n<li>Passionate about applying best development practices (Unit testing, linting, etc.)</li>\n<li>Collaborative Team player</li>\n<li>Experience working in a structured process (Agile, Scrum etc)</li>\n</ul>\n<p>Preferred Qualifications:</p>\n<ul>\n<li>Past ad tech or advertising industry experience is a plus</li>\n</ul>\n<p>Benefits:</p>\n<ul>\n<li>Excellent Medical, Dental and Vision Coverage</li>\n<li>Flexible PTO</li>\n<li>401k + Matching</li>\n<li>$500/yr for Education/Training</li>\n<li>Monthly WFH Stipend</li>\n<li>WFH home office set up</li>\n<li>Personal Coaching</li>\n<li>Remote Flexibility</li>\n<li>Creative Working Environment</li>\n<li>Paid Sick Leave</li>\n<li>Doctor House Call On-Demand</li>\n</ul>\n<p>What's atypical about the company:</p>\n<p>We're fast and data-driven: our teams develop concepts in the morning, shoot/edit in the afternoon, launch in the evening, and iterate the next day based on real-world performance.</p>\n<p>We’re a behavioral R&amp;D lab at the core: We put 2,000+ video experiments per week, watched by tens of millions of people per day, that give us deep insights into how people make decisions. Over the past couple years, we’ve built an enormous library of IP around human behavior and visual communication.</p>\n<p>We work on a pure pay for performance basis. Zero production fees for video. Clients only pay us if our videos outperform anything they’re running internally.</p>\n<p>Our clients are among the largest advertisers on FB and Instagram, across a wide range of verticals (incl. fashion, beauty, food, fitness apps, healthcare apps, financial services), giving us unique visibility into what drives success at scale. We focus on profitable growth with clients and grow their investment by 80% on average.</p>\n<p>Application Process:</p>\n<p>Interested candidates should apply directly for consideration. Upon submitting your application, our hiring team will review your credentials and will notify you if you are selected to participate in the interview process. We appreciate your interest in TubeScience and kindly ask that you refrain from inquiries to our teams via LinkedIn. All questions regarding the status of your application can be directed to <a href=\"mailto:careers@tubescience.com\">careers@tubescience.com</a>.</p>\n<p>No third party or agency submissions will be accepted</p>\n<p>TubeScience is an equal opportunity employer. We celebrate diversity and are committed to creating an inclusive environment for all employees. We consider all qualified applicants for employment regardless of race, religious creed, color, national origin, ancestry, physical disability, mental disability, medical condition, genetic information, marital status, sex, gender, gender identity, gender expression, pregnancy, childbirth and breastfeeding, age, sexual orientation, military or veteran status, or any other protected classification, in accordance with applicable federal, state, and local laws. If you have a disability or special need that requires accommodation, please feel free to contact us at <a href=\"mailto:accomodations@tubescience.com\">accomodations@tubescience.com</a>.</p>\n",
				how_to_apply: '<p>Click this link to apply: <a href="https://tubescience.com/were-hiring/?gh_jid=5039665002">https://tubescience.com/were-hiring/?gh_jid=5039665002</a></p>\n',
				company_logo: 'https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbStXIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--b8a551a3c84317266c1f3dfe846ded212a933e24/TS%20Linkedin%20Logo.jpeg',
			},
			{
				id: 'db0ff9f6-966c-4376-956f-c9f393d9fce999',
				type: 'Full Time',
				url: 'https://jobs.github.com/positions/db0ff9f6-966c-4376-956f-c9f393d9fce8',
				created_at: 'Fri Jan 22 15:39:45 UTC 2021',
				company: 'TubeScience',
				company_url: 'https://tubescience.com/',
				location: 'Remote, US',
				title: 'Full Stack Developer',
				description: "<p>TubeScience is looking for a talented Full Stack Developer to join our thriving team! This role is remote flexible anywhere in the US.</p>\n<p>Quick ‘about us’:</p>\n<p>We’re a data-driven video startup based in LA that’s grown to become the largest producer of video ads on paid social in the 4 years since founding. Collectively, our videos account for ~5% of all paid video views on Facebook and Instagram in North America and reach 100-200 million people per day.</p>\n<p>What You’ll Do:</p>\n<p>As an experienced Full Stack Developer, you will utilize your strong problem solving, communication skills and proficiency working cross-functionally to deliver products end-to-end. You will build maintainable solutions in a fast moving product development environment, where features are rapidly prototyped and tested with users. You’ll also have a critical role on the TubeScience team as we produce tech solutions to support our rapid business growth. You will work with a high degree of autonomy, with high expectations on ownership and collaboration.</p>\n<p>Objectives:</p>\n<p>We’re looking for a Full Stack Developer focusing on backend services that can create and tie together creative workflows, big data systems and algorithms. We’re a fast moving startup in a hyper growth phase, so we’re continuously balancing quick high impact solutions with designing for scale. If you’re looking to solve problems that no one else has, apply, we’d love to hear from you.</p>\n<p>Responsibilities:</p>\n<ul>\n<li>Own and Develop scalable solutions for internal and external users</li>\n<li>Collaborate with teammates in an agile development environment</li>\n<li>Champion and follow development best practices</li>\n</ul>\n<p>Required Skills and Qualifications:</p>\n<ul>\n<li>5+ years of software development experience</li>\n<li>Experience delivering products end-to-end</li>\n<li>Experience with Python/Flask or Node development</li>\n<li>Experience working with React, Vue, or similar frameworks</li>\n<li>Experience working with relational databases (PostgreSQL, MySQL, Snowflake)</li>\n<li>Experience with Amazon Web Services</li>\n<li>Passionate about applying best development practices (Unit testing, linting, etc.)</li>\n<li>Collaborative Team player</li>\n<li>Experience working in a structured process (Agile, Scrum etc)</li>\n</ul>\n<p>Preferred Qualifications:</p>\n<ul>\n<li>Past ad tech or advertising industry experience is a plus</li>\n</ul>\n<p>Benefits:</p>\n<ul>\n<li>Excellent Medical, Dental and Vision Coverage</li>\n<li>Flexible PTO</li>\n<li>401k + Matching</li>\n<li>$500/yr for Education/Training</li>\n<li>Monthly WFH Stipend</li>\n<li>WFH home office set up</li>\n<li>Personal Coaching</li>\n<li>Remote Flexibility</li>\n<li>Creative Working Environment</li>\n<li>Paid Sick Leave</li>\n<li>Doctor House Call On-Demand</li>\n</ul>\n<p>What's atypical about the company:</p>\n<p>We're fast and data-driven: our teams develop concepts in the morning, shoot/edit in the afternoon, launch in the evening, and iterate the next day based on real-world performance.</p>\n<p>We’re a behavioral R&amp;D lab at the core: We put 2,000+ video experiments per week, watched by tens of millions of people per day, that give us deep insights into how people make decisions. Over the past couple years, we’ve built an enormous library of IP around human behavior and visual communication.</p>\n<p>We work on a pure pay for performance basis. Zero production fees for video. Clients only pay us if our videos outperform anything they’re running internally.</p>\n<p>Our clients are among the largest advertisers on FB and Instagram, across a wide range of verticals (incl. fashion, beauty, food, fitness apps, healthcare apps, financial services), giving us unique visibility into what drives success at scale. We focus on profitable growth with clients and grow their investment by 80% on average.</p>\n<p>Application Process:</p>\n<p>Interested candidates should apply directly for consideration. Upon submitting your application, our hiring team will review your credentials and will notify you if you are selected to participate in the interview process. We appreciate your interest in TubeScience and kindly ask that you refrain from inquiries to our teams via LinkedIn. All questions regarding the status of your application can be directed to <a href=\"mailto:careers@tubescience.com\">careers@tubescience.com</a>.</p>\n<p>No third party or agency submissions will be accepted</p>\n<p>TubeScience is an equal opportunity employer. We celebrate diversity and are committed to creating an inclusive environment for all employees. We consider all qualified applicants for employment regardless of race, religious creed, color, national origin, ancestry, physical disability, mental disability, medical condition, genetic information, marital status, sex, gender, gender identity, gender expression, pregnancy, childbirth and breastfeeding, age, sexual orientation, military or veteran status, or any other protected classification, in accordance with applicable federal, state, and local laws. If you have a disability or special need that requires accommodation, please feel free to contact us at <a href=\"mailto:accomodations@tubescience.com\">accomodations@tubescience.com</a>.</p>\n",
				how_to_apply: '<p>Click this link to apply: <a href="https://tubescience.com/were-hiring/?gh_jid=5039665002">https://tubescience.com/were-hiring/?gh_jid=5039665002</a></p>\n',
				company_logo: 'https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbStXIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--b8a551a3c84317266c1f3dfe846ded212a933e24/TS%20Linkedin%20Logo.jpeg',
			},
		],
	);
	useEffect(() => {
		client.get(baseURL).then(setJobs);
	}, []);
	const [open, setOpen] = useState(false);
	return (
		<>
			<Container>
				<MainBody>
					<Title>Search For Developer Jobs</Title>
					<MainCard>

						<div className={cn(' form-wrapper', open && 'active')}>
							<SearchJob />
						</div>
						<MobileSearch className="d-md-none">
							<Button
								onClick={() => setOpen(prevOpen => !prevOpen)}
								variant="secondary"
								size="sm"
							>
								{open ? <FaSearchMinus /> : <FaSearchPlus />}
							</Button>
						</MobileSearch>
						<MobileSearch className="d-md-none">
							<Button
								onClick={() => setOpen(prevOpen => !prevOpen)}
								variant="secondary"
								size="sm"
							>
								{open ? <FaSearchMinus /> : <FaSearchPlus />}
							</Button>
						</MobileSearch>
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
								jobs.map(job => (
									<Col lg={4} md={6} xs={12} key={job.id}>
										<CardBox>
											<StyledLink to={`/job/${job.id}`}>
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
