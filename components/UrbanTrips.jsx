'use client';
import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import '../app/styles/trips.css'; // Ajoutez vos styles ici

function UrbanTrips() {
	const [urbanTrips, setUrbanTrips] = useState([]);
	const [searchParams, setSearchParams] = useState({ from: '', to: '' });
	const [filteredUrbanTrips, setFilteredUrbanTrips] = useState([]);

	useEffect(() => {
		// Fetch urban trip data
		const fetchUrbanTrips = async () => {
			const response = await fetch('/urban_trips.json');
			const data = await response.json();
			setUrbanTrips(data);
		};

		fetchUrbanTrips();
	}, []);

	useEffect(() => {
		// Filter urban trips based on search parameters
		const filteredUrban = urbanTrips.filter(
			(trip) =>
				(searchParams.from === '' || trip.from.toLowerCase().includes(searchParams.from.toLowerCase())) &&
				(searchParams.to === '' || trip.to.toLowerCase().includes(searchParams.to.toLowerCase()))
		);
		setFilteredUrbanTrips(filteredUrban);
	}, [searchParams, urbanTrips]);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setSearchParams((prevParams) => ({
			...prevParams,
			[name]: value
		}));
	};

	return (
		<div className="trips-container" style={{ padding: '20px' }}>
			<h2 className="noticia-text-bold labelings mb-3">Search Urban Trips</h2>
			<Form>
				<Form.Group controlId="from">
					<Form.Label>From</Form.Label>
					<Form.Control
						type="text"
						name="from"
						value={searchParams.from}
						onChange={handleInputChange}
						placeholder="Enter starting location"
					/>
				</Form.Group>
				<Form.Group controlId="to">
					<Form.Label>To</Form.Label>
					<Form.Control
						type="text"
						name="to"
						value={searchParams.to}
						onChange={handleInputChange}
						placeholder="Enter destination"
					/>
				</Form.Group>
			</Form>

			<h2 className="noticia-text-bold labelings mb-3">Available Urban Trips</h2>
			<ul>
				{filteredUrbanTrips.map((trip) => (
					<li key={trip.id}>
						<h3>{trip.city}: {trip.from} to {trip.to}</h3>
						<p>Date: {trip.date}</p>
						<p>Drivers: {trip.drivers.join(', ')}</p>
						<Button onClick={() => alert(`Selected trip in ${trip.city} from ${trip.from} to ${trip.to}`)}>Select</Button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default UrbanTrips;
