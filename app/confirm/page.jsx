'use client'
import React, { useEffect, useState } from 'react';
import "../styles/plan.css";
import { Container, Row, Col, ListGroup, Form, Button, Card } from 'react-bootstrap'

const Page = () => {
	const [trips, setTrips] = useState([]);
	const [confirmedTrips, setConfirmedTrips] = useState([]);

	useEffect(() => {
		fetch('/trips.json')
		.then((response) => response.json())
		.then((data) => setTrips(data))
		.catch((error) => console.error('Error fetching trip data:', error));
	}, []);

	const confirmTrip = (tripId, driver) => {
		const trip = trips.find((trip) => trip.id === tripId);
		const updatedTrip = { ...trip, driver };
		setConfirmedTrips([...confirmedTrips, updatedTrip]);
		setTrips(trips.filter((trip) => trip.id !== tripId));
	};

	return (
		<Container className="mb-5">
			<Row>
				<Col>
					<h2 className="noticia-text-bold labelings mt-8 mb-3">Available Trips</h2>
					{trips.map((trip) => (
						<Card key={trip.id} className="d-flex flex-row justify-content-between mb-3  wland">
							<div className="entries-element">
								<p>Start: {trip.start}</p>
								<p>End: {trip.end}</p>
								<p>Drivers: {trip.drivers.join(', ')}</p>
								<Form.Select className="selecting" style={{width: 200}} defaultValue="">
									<option value="" disabled>Select a driver</option>
									{trip.drivers.map((driver, index) => (
										<option key={index} value={driver}>{driver}</option>
									))}
								</Form.Select>
							</div>

							<Button className="button-confirm" onClick={(e) => confirmTrip(trip.id, e.target.value)}>
								Confirm
							</Button>
						</Card>
					))}
				</Col>
			</Row>
			<Row>
				<Col>
					<h2 className="noticia-text-bold labelings mb-3">Confirmed Trips</h2>
					<ListGroup>
						{confirmedTrips.map((trip) => (
							<ListGroup.Item key={trip.id}>
								<p>Start: {trip.start}</p>
								<p>End: {trip.end}</p>
								<p>Driver: {trip.driver}</p>
							</ListGroup.Item>
						))}
					</ListGroup>
				</Col>
			</Row>
		</Container>
	);
};

export default Page;
