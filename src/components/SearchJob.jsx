import React, { useState } from 'react';
import {
	Form,
} from 'react-bootstrap';
import styled from 'styled-components';

function SearchJob() {
	const StyledForm = styled(Form)`
		margin-top: 15px;
		/* border: solid 1px rgb(39, 39, 39); */
		border-radius: 5px;
		width: 100%;
		justify-content: center;
`;

	const StyledFormControl = styled(Form.Control)`
		background-color: #292727;
		color: #d97b16;
		border-radius: 20px;
		padding: 6px 20px;
		border-color: #5c0f0f;
		width: 100%;
		outline: none;
		text-align: center;
		&:focus {
		border-color: #5c0f0f;
		outline: none;
		color: #e9e9e9;
		box-shadow: none;
		background-color: rgb(85, 83, 83);
}
`;
	const StyledFormLabel = styled(Form.Label)`
		display: flex;
		justify-content: center;
		margin: 0;
`;
	// const [open] = useState(false);
	const [jobTypes, setJobTypes] = useState(['Full Time', 'Part Time']);
	return (
		<div>
			<StyledForm>
				<Form.Group>
					<StyledFormLabel>Location</StyledFormLabel>
					<StyledFormControl placeholder="Where?" type="text" name="place" />
				</Form.Group>
				<Form.Group>
					<StyledFormLabel>Type</StyledFormLabel>
					<div className="text-center">
						<Form.Check
							custom
							inline
							label="Full Time"
							type="checkbox"
							checked={jobTypes.includes('Full Time')}
							onChange={() => setJobTypes(prev => (prev.includes('Full Time') ? prev.filter(a => a !== 'Full Time') : prev.concat('Full Time')))}
						/>
						<Form.Check
							custom
							inline
							label="Part Time"
							type="checkbox"
							checked={jobTypes.includes('Part Time')}
							onChange={() => setJobTypes(prev => (prev.includes('Part Time') ? prev.filter(a => a !== 'Part Time') : prev.concat('Part Time')))}
						/>
					</div>
				</Form.Group>
			</StyledForm>
		</div>
	);
}

export default SearchJob;
