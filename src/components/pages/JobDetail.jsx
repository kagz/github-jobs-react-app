import React, { useState, useEffect } from 'react';
import { Badge, Card, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import client from '../../client';

const MainBody = styled.div`
color: #b7cbd9;
margin-top: 70px;
min-height: 100vh;
border-radius: 5px;`;
const CompanyLogo = styled(Card.Img)`
height: 80px;
width: 80px;
border-radius: 50%;
box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
margin: 6px;
`;
const JobCard = styled(Card)`
padding: 20px;
border-radius: 5px;
background: #100e17;
min-height: 90vh;
box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
margin: 15px;
`;

const baseURL = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/';
function JobDetail() {
	const [job, setJob] = useState(null);

	const { jobId } = useParams();

	useEffect(() => {
		client.get(`${baseURL}${jobId}.json`).then(setJob);
	}, []);

	return (
		<Container>
			<MainBody>
				<div>
					{/* looped card */}
					<JobCard>
						<CompanyLogo variant="top" src={job.company_logo} />
						<Card.Header>
							{job.company}
							<small className="text-muted blockquote-footer">
								<Badge pill variant="info">
									{job.type}
								</Badge>
							</small>
						</Card.Header>
						<Card.Body>
							<Card.Title> {job.title}</Card.Title>
							<Card.Subtitle className="mb-2 text-muted">{job.location}</Card.Subtitle>
							<Card.Text>
								{job.description}
							</Card.Text>
						</Card.Body>
						<Card.Footer className="text-muted ">
							<small className="text-muted ">{job.created_at}</small>
						</Card.Footer>
					</JobCard>
					{/* looped card */}
				</div>
			</MainBody>
		</Container>

	);
}

export default JobDetail;
