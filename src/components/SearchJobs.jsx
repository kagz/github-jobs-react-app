import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import {
	Form,
} from 'react-bootstrap';
import { FaSearchMinus, FaSearchPlus } from 'react-icons/fa';
import cn from 'classnames';

function SearchJobs() {
	const [open, setOpen] = useState(false);
	const [jobTypes, setJobTypes] = useState(['Full Time', 'Part Time']);
	return (
		<div>
			<div className={cn(' form-wrapper', open && 'active')}>
				<Form className="search-part">
					<Form.Group>
						<Form.Label className="form-label">Location</Form.Label>
						<Form.Control placeholder="Where?" type="text" name="location" className="custom-text" />
					</Form.Group>
					<Form.Group>
						<Form.Label className="form-label">Type</Form.Label>
						<div className="custom-text text-center">
							{/* <Row> */}

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

							{/* </Row> */}
						</div>
					</Form.Group>
				</Form>
				<div className="mobile-search d-md-none">
					<Button
						onClick={() => setOpen(prevOpen => !prevOpen)}
						variant="secondary"
						size="sm"
					>

						{open ? <FaSearchMinus /> : <FaSearchPlus />}

					</Button>
				</div>

			</div>

		</div>
	);
}

export default SearchJobs;
