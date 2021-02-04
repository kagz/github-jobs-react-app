import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import {
	StyledForm,
	StyledFormControl, StyledFormLabel,
} from './index.elements';

function SearchJob() {
	const [jobTypes, setJobTypes] = useState(['Full Time', 'Part Time']);
	return (
		<>
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
		</>
	);
}

export default SearchJob;
