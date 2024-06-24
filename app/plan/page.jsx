'use client'
import React, { useState } from 'react';
import Image from "next/image";
import "../styles/plan.css"
import { Button, Form } from 'react-bootstrap'

export default function Home() {
	const [showForm, setShowForm] = useState(false);
	const [isEditing, setIsEditing] = useState(false);
	const [currentTripIndex, setCurrentTripIndex] = useState(null);
	const [trips, setTrips] = useState([]);
	const [formData, setFormData] = useState({ destination: '', date: '' });

	const handleFormSubmit = (event) => {
		event.preventDefault();
		const trip = {
			destination: event.target.destination.value,
			date: event.target.date.value,
		};

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

		setFormData({ destination: '', date: '' });
		setShowForm(false);
	};

	const handleCancel = () => {
		setShowForm(false);
		setIsEditing(false);
		setCurrentTripIndex(null);
		setFormData({ destination: '', date: '' });
	};

	const handleEdit = (index) => {
		setFormData(trips[index]);
		setCurrentTripIndex(index);
		setIsEditing(true);
		setShowForm(true);
	};

	return (
		<div style={{ padding: '20px' }}>
			{!showForm ? (
				<button onClick={() => setShowForm(true)} style={{ marginBottom: '20px' }}>
					<Image
						src="/plan_illustration.png"
						alt="YO"
						className="plan"
						width={300}
						height={150}
					/>
					Plan a New Trip
				</button>
			) : (
				<Form onSubmit={handleFormSubmit} style={{ marginBottom: '20px' }}>
					<Form.Group className="destination" controlId="destination">
						<Form.Control
							name='destination'
							type='text'
							placeholder="Destination"
							value={formData.destination}
							onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
							required
						/>
					</Form.Group>

					<Form.Group className="destination" controlId="destination">
						<Form.Control
							type="date"
							name="date"
							placeholder="Date"
							value={formData.date}
							onChange={(e) => setFormData({ ...formData, date: e.target.value })}
							required
						/>
					</Form.Group>

					<Button type="submit">{isEditing ? 'Update' : 'Submit'}</Button>
					<Button type="button" onClick={handleCancel}>Cancel</Button>
				</Form>
			)}

			<h2>Planned Trips</h2>
			<ul>
				{trips.map((trip, index) => (
					<li key={index}>
						{trip.destination} - {trip.date}
						<button onClick={() => alert('Published!')} style={{ marginLeft: '10px' }}>Publish</button>
						<button onClick={() => handleEdit(index)} style={{ marginLeft: '10px' }}>Modify</button>
						<button onClick={() => setTrips(trips.filter((_, i) => i !== index))} style={{ marginLeft: '10px' }}>Cancel</button>
					</li>
				))}
			</ul>
		</div>
	);
}
