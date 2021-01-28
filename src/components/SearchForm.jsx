import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import {
	Form,
} from 'react-bootstrap';
import { FaSearchMinus, FaSearchPlus } from 'react-icons/fa';
import cn from 'classnames';

function SearchForm() {
	const [open, setOpen] = useState(false);

	return (
		<>
			<div className={cn('form-wrapper', open && 'active')}>
				<Form className="search-form">
					<Form.Group>
						<Form.Label className="form-label">Location</Form.Label>
						<Form.Control placeholder="Where?" type="text" name="location" className="custom-checkbox" />
					</Form.Group>
					<Form.Group>
						<Form.Label className="form-label">Type</Form.Label>
						<div className="custom-checkbox text-center">
							{/* <Row> */}
							<Form.Check
								custom
								inline
								type="radio"
								label="Full Time"
								name="fulltime"
								id="fulltime"
							/>
							<Form.Check
								custom
								inline
								type="radio"
								label="Part Time"
								name="parttime"
								id="parttime"
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
			<div className="mobile-search d-md-none">
				<Button
					onClick={() => setOpen(prevOpen => !prevOpen)}
					variant="secondary"
					size="sm"
				>

					{open ? <FaSearchMinus /> : <FaSearchPlus />}

				</Button>
			</div>
		</>
	);
}

export default SearchForm;
