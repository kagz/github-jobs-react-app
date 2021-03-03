import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import {
	StyledForm,
	StyledFormControl, StyledFormLabel,
} from './index.elements';

function SearchJob(props) {
	const { onSearch } = props;
	const [location, setLocation] = useState('');
	const [fulltime, setFulltime] = useState(true);
	const handleLocationChange = e => {
		setLocation(e.target.value);
	};
	const handleFulltimeChange = () => {
		setFulltime(!fulltime);
	};
	const handleEnterKeyPressed = e => {
		if (e.key === 'Enter') {
			onSearch({ location, fulltime });
			console.log('LOGZZZ', { location, fulltime });
		}
	};
	return (
		<StyledForm>
			<Form.Group>
				<StyledFormLabel>Location</StyledFormLabel>
				<StyledFormControl
					name="location"
					onChange={handleLocationChange}
					type="text"
					value={location}
					onKeyPress={handleEnterKeyPressed}
				/>
			</Form.Group>
			<Form.Group>
				<StyledFormLabel>Type</StyledFormLabel>
				<div className="text-center">
					<Form.Check
						label="Full Time"
						type="checkbox"
						onChange={handleFulltimeChange}
						name="full_time"
						id="full_time"
					/>
				</div>
			</Form.Group>
		</StyledForm>
	);
}

export default SearchJob;
