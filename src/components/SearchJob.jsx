import React from 'react';
import { Form } from 'react-bootstrap';
import {
	StyledForm,
	StyledFormControl, StyledFormLabel,
} from './index.elements';

function SearchJob(props) {
	const { onSearch } = props;
	const onSubmit = data => onSearch(data);
	return (
		<StyledForm>
			<Form.Group>
				<StyledFormLabel>Location</StyledFormLabel>
				<StyledFormControl
					name="location"
					type="text"
					onChange={e => onSubmit(e.target.value)}
				/>
			</Form.Group>
			{/* <Form.Group>
				<StyledFormLabel>Type</StyledFormLabel>
				<div className="text-center">
					<Form.Check
						label="Full Time"
						type="checkbox"
						defaultValue="true"
						name="full_time"
						onChange={e => onSubmit(e.target.value)}
					/>
				</div>
			</Form.Group> */}
		</StyledForm>
	);
}

export default SearchJob;
