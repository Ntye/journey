// 'use client';
// import React, { useState, useEffect } from 'react';
// import { Button, Form } from 'react-bootstrap';
// import '../app/styles/trips.css';
// import '../app/styles/plan.css'
//
// function InterurbanTrips() {
// 	const [interurbanTrips, setInterurbanTrips] = useState([]);
// 	const [searchParams, setSearchParams] = useState({ from: '', to: '' });
// 	const [filteredInterurbanTrips, setFilteredInterurbanTrips] = useState([]);
//
// 	useEffect(() => {
// 		// Fetch interurban trip data
// 		const fetchInterurbanTrips = async () => {
// 			const response = await fetch('/interurban_trips.json');
// 			const data = await response.json();
// 			setInterurbanTrips(data);
// 		};
//
// 		fetchInterurbanTrips();
// 	}, []);
//
// 	useEffect(() => {
// 		// Filter interurban trips based on search parameters
// 		const filteredInterurban = interurbanTrips.filter(
// 			(trip) =>
// 				(searchParams.from === '' || trip.from.toLowerCase().includes(searchParams.from.toLowerCase())) &&
// 				(searchParams.to === '' || trip.to.toLowerCase().includes(searchParams.to.toLowerCase()))
// 		);
// 		setFilteredInterurbanTrips(filteredInterurban);
// 	}, [searchParams, interurbanTrips]);
//
// 	const handleInputChange = (e) => {
// 		const { name, value } = e.target;
// 		setSearchParams((prevParams) => ({
// 			...prevParams,
// 			[name]: value
// 		}));
// 	};
//
// 	return (
// 		<div className="trips-container" style={{ padding: '20px' }}>
// 			<h2 className="noticia-text-bold labelings mb-3">Search Interurban Trips</h2>
// 			<Form className="d-flex flex-row">
// 				<Form.Group controlId="from" className="mr-8">
// 					<Form.Control
// 						type="text"
// 						name="from"
// 						value={searchParams.from}
// 						onChange={handleInputChange}
// 						placeholder="From: Enter starting location"
// 					/>
// 				</Form.Group>
// 				<Form.Group controlId="to">
// 					<Form.Control
// 						type="text"
// 						name="to"
// 						value={searchParams.to}
// 						onChange={handleInputChange}
// 						placeholder="To: Enter destination"
// 					/>
// 				</Form.Group>
// 			</Form>
//
// 			<h2 className="noticia-text-bold labelings mb-3">Available Interurban Trips</h2>
// 			<ul>
// 				{filteredInterurbanTrips.map((trip) => (
// 					<li key={trip.id}>
// 						<h3>{trip.from} to {trip.to}</h3>
// 						<p>Date: {trip.date}</p>
// 						<p>Drivers: {trip.drivers.join(', ')}</p>
// 						<Button onClick={() => alert(`Selected trip from ${trip.from} to ${trip.to}`)}>Select</Button>
// 					</li>
// 				))}
// 			</ul>
// 		</div>
// 	);
// }
//
// export default InterurbanTrips;


'use client';
import React, { useState, useEffect } from 'react';
import { Button, Card, Form } from 'react-bootstrap'
import '../app/styles/trips.css';
import '../app/styles/plan.css'
import axiosInstance from '@/components/axios'

function InterurbanTrips() {
	const [interurbanTrips, setInterurbanTrips] = useState([]);
	const [searchParams, setSearchParams] = useState({ villeDepart: '', villeArrivee: '' });
	const [filteredInterurbanTrips, setFilteredInterurbanTrips] = useState([]);
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		// Fetch interurban trip data
		const fetchInterurbanTrips = async () => {

			// const response = await fetch('/interurban_trips.json');
			// const data = await response.json();
			// setInterurbanTrips(data);

			axiosInstance.get('/voyage')
										.then(response => {
											console.log(response.data)
											const data = response.data
											setIsLoading(false)
											const filteredItems = data.filter(item =>
												item.villeDepart.toLowerCase() !== item.villeArrivee.toLowerCase()
											)
											setInterurbanTrips(filteredItems);
										})
										.catch(error => {
											console.error(error);
										})
		};

		fetchInterurbanTrips();
	}, []);

	useEffect(() => {
		// Filter interurban trips based on search parameters
		const filteredInterurban = interurbanTrips.filter(
			(trip) =>
				(searchParams.villeDepart === '' || trip.villeDepart.toLowerCase().includes(searchParams.villeDepart.toLowerCase())) &&
				(searchParams.villeArrivee === '' || trip.villeArrivee.toLowerCase().includes(searchParams.villeArrivee.toLowerCase()))
		);

		const filtered =

		setFilteredInterurbanTrips(filteredInterurban);
	}, [searchParams, interurbanTrips]);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setSearchParams((prevParams) => ({
			...prevParams,
			[name]: value
		}));
	};

	if(isLoading) {
		return (<div>Is Loading ....</div>)
	}

	return (
		<div className="trips-container" style={{ padding: '20px' }}>
			<h2 className="noticia-text-bold labelings mb-3">Search InterUrban Trips</h2>
			<Form className="d-flex flex-row">
				<Form.Group controlId="from" className="mr-8">
					<Form.Control
						type="text"
						name="villeDepart"
						value={searchParams.villeDepart}
						onChange={handleInputChange}
						placeholder="From: Enter starting location"
					/>
				</Form.Group>
				<Form.Group controlId="to">
					<Form.Control
						type="text"
						name="villeArrivee"
						value={searchParams.villeArrivee}
						onChange={handleInputChange}
						placeholder="To: Enter destination"
					/>
				</Form.Group>
			</Form>
			<h2 className="noticia-text-bold labelings mb-3">Available InterUrban Trips</h2>
			{filteredInterurbanTrips.map((trip) => (
				<Card key={trip.id} className="mb-3 trip-size">
					<Card.Body className="flex flex-row justify-between ">
						<div>
							<Card.Title>City : {trip.villeDepart} to {trip.villeArrivee}</Card.Title>
							<Card.Subtitle className="mb-2">Quater: {trip.lieuDepart} to {trip.lieuArrive}</Card.Subtitle>
							<Card.Subtitle className="mb-2 text-muted">Price: 1000 FCFA</Card.Subtitle>
							<Card.Subtitle className="mb-2 text-muted">Time: {trip.dateDepart}</Card.Subtitle>
						</div>
						<div>
							<Button className="select-button" onClick={() => alert(`Selected trip from ${trip.villeDepart} to ${trip.villeArrivee}`)}>Select</Button>
						</div>
					</Card.Body>
				</Card>
			))}
		</div>
	);
}

export default InterurbanTrips;
