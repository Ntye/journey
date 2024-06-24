'use client'
import React, { useState } from 'react';
import Image from "next/image";
import { Button, Card, Form} from 'react-bootstrap';
import "../styles/plan.css";

export default function Home() {
	const [showForm, setShowForm] = useState(false);
	const [isEditing, setIsEditing] = useState(false);
	const [currentTripIndex, setCurrentTripIndex] = useState(null);
	const [trips, setTrips] = useState([]);
	const [formData, setFormData] = useState({
		departure: '',
		arrival: '',
		time: '',
		date: '',
		price: '',
		repeat: false,
		repeatType: 0,
		endDate: ''
	});

	const handleFormSubmit = (event) => {
		event.preventDefault();
		const trip = { ...formData };

		if (isEditing && currentTripIndex !== null) {
			const updatedTrips = trips.map((t, index) =>
				index === currentTripIndex ? trip : t
			);
			setTrips(updatedTrips);
			setIsEditing(false);
			setCurrentTripIndex(null);
		} else {
			setTrips([...trips, trip]);
		}

		setFormData({
			destination: '',
			departure: '',
			arrival: '',
			time: '',
			date: '',
			price: '',
			repeat: false,
			repeatType: 0,
			endDate: ''
		});
		setShowForm(false);
	};

	const handleCancel = () => {
		setShowForm(false);
		setIsEditing(false);
		setCurrentTripIndex(null);
		setFormData({
			destination: '',
			departure: '',
			arrival: '',
			time: '',
			date: '',
			price: '',
			repeat: false,
			repeatType: 0,
			endDate: ''
		});
	};

	const handleEdit = (index) => {
		setFormData(trips[index]);
		setCurrentTripIndex(index);
		setIsEditing(true);
		setShowForm(true);
	};

	const handleCheckboxChange = (e) => {
		const { name, checked } = e.target;
		if (!checked) {
			setFormData({
				...formData,
				repeat: checked,
				repeatType: 0,
				repeatDays: [],
				endDate: ''
			});
		} else {
			setFormData({ ...formData, [name]: checked });
		}
	};

	const handleRepeatTypeChange = (e) => {
		const { value } = e.target;
		setFormData({ ...formData, repeatType: value });
		// Clear repeatDays if not custom
		if (value !== 'custom') {
			setFormData({ ...formData, repeatDays: [] });
		}
	};


	return (
		<div className="page">
			{!showForm ? (
				<button onClick={() => setShowForm(true)} style={{ marginBottom: '70px' }}>
					<Image
						src="/plan_illustration.png"
						alt="YO"
						className="plan"
						width={450}
						height={150}
					/>
				</button>
			) : (
				<Form onSubmit={handleFormSubmit} className="form-type">
					<h2 className="noticia-text-bold labelings mb-3">Plan a New Trip</h2>
					<Form.Group controlId="formDeparture">
						<Form.Control
							name="departure"
							type="text"
							placeholder="Starting Point"
							value={formData.departure}
							className="mb-3"
							onChange={(e) => setFormData({ ...formData, departure: e.target.value })}
							required
						/>
					</Form.Group>

					<Form.Group controlId="formArrival">
						<Form.Control
							name="arrival"
							type="text"
							placeholder="End Point"
							value={formData.arrival}
							className="mb-3"
							onChange={(e) => setFormData({ ...formData, arrival: e.target.value })}
							required
						/>
					</Form.Group>

					<Form.Group controlId="formTime">
						<Form.Control
							name="time"
							type="time"
							placeholder="Departure Time"
							value={formData.time}
							className="mb-3"
							onChange={(e) => setFormData({ ...formData, time: e.target.value })}
							required
						/>
					</Form.Group>


					<Form.Group controlId="formDate">
						<Form.Label className="noticia-text-regular ml-1 -mb-2">Date</Form.Label>
						<Form.Control
							type="date"
							name="date"
							value={formData.date}
							onChange={(e) => setFormData({ ...formData, date: e.target.value })}
							required
						/>
					</Form.Group>

					<Form.Group controlId="formDate">
						<Form.Label className="noticia-text-regular ml-1 -mb-2">Price</Form.Label>
						<Form.Control
							type="number"
							name="price"
							value={formData.price}
							onChange={(e) => setFormData({ ...formData, price: e.target.value })}
							required
						/>
					</Form.Group>

					<Form.Group controlId="formRepeat" className="mb-3">
						<Form.Check
							type="checkbox"
							name="repeat"
							label="Repeat Trip"
							checked={formData.repeat}
							onChange={handleCheckboxChange}
						/>
					</Form.Group>

					{formData.repeat && (
						<div>
							<Form.Group controlId="formRepeatType">
								<Form.Label className="noticia-text-regular ml-1 -mb-2">Repeat Sequence</Form.Label>
								<Form.Select
									name="repeatType"
									value={formData.repeatType}
									onChange={handleRepeatTypeChange}
								>
									<option value="1">Daily</option>
									<option value="2">Weekly</option>
									<option value="3">Monthly</option>
								</Form.Select>
							</Form.Group>

							<Form.Group controlId="formEndDate" className="mb-3">
								<Form.Label className="noticia-text-regular ml-1 -mb-2">End Date</Form.Label>
								<Form.Control
									type="date"
									name="endDate"
									value={formData.endDate}
									onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
								/>
							</Form.Group>
						</div>
					)}

					<Button type="submit" className="mr-4 mb-5 submit-button">{isEditing ? 'Update' : 'Submit'}</Button>
					<Button type="button" className="mb-5 cancel-button" onClick={handleCancel}>Cancel</Button>
				</Form>
			)}

			<h2 className="noticia-text-bold labelings mb-3">Planned Trips</h2>
			{trips.map((trip, index) => (
				<Card key={index} className="mb-3 card-size">
					<Card.Body className="flex flex-row justify-between">
						<div>
							<Card.Title>{trip.arrival}</Card.Title>
							<Card.Subtitle className="mb-2 text-muted">Departure: {trip.departure}</Card.Subtitle>
							<Card.Subtitle className="mb-2 text-muted">Price: {trip.price} FCFA</Card.Subtitle>
							<Card.Subtitle className="mb-2 text-muted">Time: {trip.time}</Card.Subtitle>
							<Card.Subtitle className="mb-2 text-muted">Date: {trip.date}</Card.Subtitle>
							{trip.repeat && (
								<div>
									<Card.Subtitle className="mb-2 text-muted">Repeat: {trip.repeatType}</Card.Subtitle>
									{trip.repeatType === 'weekly' && (
										<Card.Subtitle className="mb-2 text-muted">Repeat Days: {trip.repeatDays.join(', ')}</Card.Subtitle>
									)}
									{trip.repeatType === 'custom' && (
										<Card.Subtitle className="mb-2 text-muted">Repeat Days: {trip.repeatDays.join(', ')}</Card.Subtitle>
									)}
									{trip.endDate && (
										<Card.Subtitle className="mb-2 text-muted">End Date: {trip.endDate}</Card.Subtitle>
									)}
								</div>
							)}
						</div>
						<div>
							<Button className="button publish" onClick={() => alert('Published!')}
							        style={{ marginRight: '10px' }}>Publish</Button>
							<Button className="button modify" onClick={() => handleEdit(index)}
							        style={{ marginRight: '10px' }}>Modify</Button>
							<Button className="cancel-button"
							        onClick={() => setTrips(trips.filter((_, i) => i !== index))}>Cancel</Button>
						</div>
					</Card.Body>
				</Card>
			))}
		</div>
	);
}