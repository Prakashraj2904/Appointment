// AppointmentList.js

import React, { useState } from "react";

const AppointmentList = ({
	appointments,
	deleteAppointment,
	editAppointment,
	clearAppointments,
}) => {
	const [editedIndex, setEditedIndex] = useState(null);
	const [editedName, setEditedName] = useState("");
	const [editedDate, setEditedDate] = useState("");
	const [editedMobileno, seteditedMobileno] = useState("");

	const handleEdit = (index) => {
		setEditedIndex(index);
		setEditedName(appointments[index].name);
		setEditedDate(appointments[index].date);
		seteditedMobileno(appointments[index].mobileno);
	};

	const handleSaveEdit = (index) => {
		editAppointment(index, editedName, editedDate, editedMobileno);
		setEditedIndex(null);
		setEditedName("");
	};

	const handleCancelEdit = () => {
		setEditedIndex(null);
		setEditedName("");
	};

	return (
		<div className="container">
			<div className="d-flex mb-4">
				<span className="h1 ms-5 me-auto">Appointment's here..</span>
				<button className="btn btn-warning ms-auto" onClick={clearAppointments}>
					Clear All Appointments
				</button>
			</div>
			<table className="table">
				<thead>
					<tr>
						<th className="text-center">S.No</th>
						<th className="text-center">Name</th>
						<th className="text-center">Mobile No</th>
						<th className="text-center">Date</th>
						<th className="text-center">Do's</th>
					</tr>
				</thead>
				<tbody>
					{appointments.map((appointment, index) => (
						<tr key={index}>
							<td className="text-center">{index + 1}</td>
							<td className="text-center">
								{editedIndex === index ? (
									<input className="form-control"
										type="text"
										value={editedName}
										onChange={(e) =>
											setEditedName(e.target.value)
										}
									/>
								) : (
									appointment.name
								)}
							</td>
							<td className="text-center">
								{editedIndex === index ? (
									<input className="form-control"
									type="number" 
									value={editedMobileno} 
									onChange={(e) => seteditedMobileno(e.target.value)} />
								) : (
									appointment.mobileno
								)}
							</td>
							<td className="text-center">
								{editedIndex === index ? (
									<input className="form-control"
										type="date"
										value={editedDate}
										onChange={(e) =>
											setEditedDate(e.target.value)
										}
									/>
								) : (
									appointment.date
								)}
							</td>
							<td className="text-center">
								{editedIndex === index ? (
									<>
										<button className=" btn btn-success ms-5"
											onClick={() =>
												handleSaveEdit(index)
											}
										>
											Save
										</button>
										<button className=" btn btn-danger ms-5" onClick={handleCancelEdit}>
											Cancel
										</button>
									</>
								) : (
									<>
										<button className=" btn btn-success ms-5"
											onClick={() => handleEdit(index)}
										>
											Edit
										</button>
										<button className=" btn btn-danger ms-5"
											onClick={() =>
												deleteAppointment(index)
											}
										>
											Delete
										</button>
									</>
								)}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default AppointmentList;
