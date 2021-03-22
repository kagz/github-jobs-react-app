/* eslint-disable react/prop-types */
import React from 'react';
import { Form } from 'react-bootstrap';
import {
	StyledForm,
	StyledFormControl, StyledFormLabel,
} from './index.elements';

function SearchJob(props) {
	const { onSearch } = props;
	return (
		<StyledForm>
			<Form.Group>
				<StyledFormLabel>Location</StyledFormLabel>
				<StyledFormControl
					name="location"
					type="text"
					onChange={e => onSearch({ location: e.target.value })}
				/>
			</Form.Group>
			<Form.Group>
				<StyledFormLabel>Description</StyledFormLabel>
				<StyledFormControl
					name="description"
					type="text"
					onChange={e => onSearch({ description: e.target.value })}
				/>
			</Form.Group>
		</StyledForm>
	);
}
export default SearchJob;
