// AppointmentForm.js

import React, { useState } from "react";

const AppointmentForm = ({ addAppointment }) => {
	const [name, setName] = useState("");
	const [date, setDate] = useState("");
	const [mobileno, setmobileno] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		addAppointment({ name, date, mobileno });
		setName("");
		setDate("");
		setmobileno("");
	};

	return (
		<div class=" container">
			<form onSubmit={handleSubmit}>
				<div class="row">
					<div class="col-75">
						<input class="form-control"
							type="text"
							id="fname"
							name="firstname"
							placeholder="Patient Full name.."
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-75">
					<input class="form-control mt-3"
							type="number"
							id="fname"
							name="firstname"
							placeholder="Patient Mobile no.."
							value={mobileno}
							onChange={(e) => setmobileno(e.target.value)}
						/>
					</div>
				</div>
				<div class="row">
					{/* <div class="col-25">
						<label className="form-label" for="fname">Appointment Date </label>
					</div> */}
					<div class="col-75">
						<input class="form-control mt-3"
							id="fname"
							name="firstname"
							placeholder="Your name.."
							type="date"
							value={date}
							onChange={(e) => setDate(e.target.value)}
						/>
					</div>
				</div>
				<div class="row">
					<input type="submit" className="btn btn-success fs-5 fw-bold" value="Book Appointment" />
				</div>
			</form>
		</div>
	);
};

export default AppointmentForm;
