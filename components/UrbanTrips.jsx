// 'use client';
// import React, { useState, useEffect } from 'react';
// import { Button, Card, Form } from 'react-bootstrap'
// import '../app/styles/trips.css'; // Ajoutez vos styles ici
//
// function UrbanTrips() {
// 	const [urbanTrips, setUrbanTrips] = useState([]);
// 	const [searchParams, setSearchParams] = useState({ from: '', to: '' });
// 	const [filteredUrbanTrips, setFilteredUrbanTrips] = useState([]);
//
// 	useEffect(() => {
// 		// Fetch urban trip data
// 		const fetchUrbanTrips = async () => {
// 			const response = await fetch('/urban_trips.json');
// 			const data = await response.json();
// 			setUrbanTrips(data);
// 		};
//
// 		fetchUrbanTrips();
// 	}, []);
//
// 	useEffect(() => {
// 		// Filter urban trips based on search parameters
// 		const filteredUrban = urbanTrips.filter(
// 			(trip) =>
// 				(searchParams.from === '' || trip.from.toLowerCase().includes(searchParams.from.toLowerCase())) &&
// 				(searchParams.to === '' || trip.to.toLowerCase().includes(searchParams.to.toLowerCase()))
// 		);
// 		setFilteredUrbanTrips(filteredUrban);
// 	}, [searchParams, urbanTrips]);
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
// 			<h2 className="noticia-text-bold labelings mb-3">Search Urban Trips</h2>
// 			<Form>
// 				<Form.Group controlId="from">
// 					<Form.Label>From</Form.Label>
// 					<Form.Control
// 						type="text"
// 						name="from"
// 						value={searchParams.from}
// 						onChange={handleInputChange}
// 						placeholder="Enter starting location"
// 					/>
// 				</Form.Group>
// 				<Form.Group controlId="to">
// 					<Form.Label>To</Form.Label>
// 					<Form.Control
// 						type="text"
// 						name="to"
// 						value={searchParams.to}
// 						onChange={handleInputChange}
// 						placeholder="Enter destination"
// 					/>
// 				</Form.Group>
// 			</Form>
//
// 			<h2 className="noticia-text-bold labelings mb-3">Available Urban Trips</h2>
// 			{/*<ul>*/}
// 			{/*	{filteredUrbanTrips.map((trip) => (*/}
// 			{/*		<li key={trip.id}>*/}
// 			{/*			<h3>{trip.city}: {trip.from} to {trip.to}</h3>*/}
// 			{/*			<p>Date: {trip.date}</p>*/}
// 			{/*			<p>Drivers: {trip.drivers.join(', ')}</p>*/}
// 			{/*			<Button onClick={() => alert(`Selected trip in ${trip.city} from ${trip.from} to ${trip.to}`)}>Select</Button>*/}
// 			{/*		</li>*/}
// 			{/*	))}*/}
// 			{/*</ul>*/}
// 			{filteredUrbanTrips.map((trip) => (
// 				<Card key={trip.id} className="mb-3 trip-size">
// 					<Card.Body className="flex flex-row justify-between ">
// 						<div>
// 							<Card.Title>{trip.city}: {trip.from} to {trip.to}</Card.Title>
// 							{/*<Card.Subtitle className="mb-2 text-muted">Price: {trip.price} FCFA</Card.Subtitle>*/}
// 							<Card.Subtitle className="mb-2 text-muted">Time: {trip.departureTime}</Card.Subtitle>
// 							<Card.Subtitle className="mb-2 text-muted">Date: {trip.date}</Card.Subtitle>
// 							<Card.Subtitle className="mb-2 text-muted">Date: {trip.agency}</Card.Subtitle>
// 						</div>
// 						<div>
// 							<Button onClick={() => alert(`Selected trip from ${trip.from} to ${trip.to}`)}>Select</Button>
// 						</div>
// 					</Card.Body>
// 				</Card>
// 			))}
// 		</div>
// 	);
// }
//
// export default UrbanTrips;

'use client';
import React, { useState, useEffect } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import '../app/styles/trips.css';
import axiosInstance from '@/components/axios'

function UrbanTrips() {
	const [urbanTrips, setUrbanTrips] = useState([]);
	const [searchParams, setSearchParams] = useState({ villeDepart: '', lieuDepart: '', lieuArrive: '' });
	const [filteredUrbanTrips, setFilteredUrbanTrips] = useState([]);
	const [isLoading,setIsLoading] = useState(true)

	useEffect(() => {
		// Fetch urban trip data
		const fetchUrbanTrips = async () => {
			// const response = await fetch('/urban_trips.json');
			// const data = await response.json();
			// setUrbanTrips(data);

			axiosInstance.get('/voyage')
			.then(response => {
				console.log(response.data)
				const data = response.data
				setIsLoading(false)
				const filteredItems = data.filter(item =>
					item.villeDepart.toLowerCase() === item.villeArrivee.toLowerCase()
				)
				setUrbanTrips(filteredItems);
			})
			.catch(error => {
				console.error(error);
			})
		};

		fetchUrbanTrips();
	}, []);

	useEffect(() => {
		// Filter urban trips based on search parameters
		const filteredUrban = urbanTrips.filter(
			(trip) =>
				(searchParams.villeDepart === '' || trip.villeDepart.toLowerCase().includes(searchParams.villeDepart.toLowerCase())) &&
				(searchParams.lieuDepart === '' || trip.lieuDepart.toLowerCase().includes(searchParams.lieuDepart.toLowerCase())) &&
				(searchParams.lieuArrive === '' || trip.lieuArrive.toLowerCase().includes(searchParams.lieuArrive.toLowerCase()))
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

	if(isLoading) {
		return (<div>is Loading ....</div>)
	}

	return (
		<div className="trips-container" style={{ padding: '20px' }}>
			<h2 className="noticia-text-bold labelings mb-3">Search Urban Trips</h2>
			<Form>
				<Form.Group  controlId="from" className="mb-3">
					<Form.Control
						type="text"
						name="villeDepart"
						value={searchParams.villeDepart}
						onChange={handleInputChange}
						placeholder="City: Enter city"
					/>
				</Form.Group>
				<Col  className="d-flex flex-row">
					<Form.Group controlId="from" className="mr-8">
						<Form.Control
							type="text"
							name="lieuDepart"
							value={searchParams.lieuDepart}
							onChange={handleInputChange}
							placeholder="From: Enter starting location"
						/>
					</Form.Group>
					<Form.Group controlId="to">
						<Form.Control
							type="text"
							name="lieuArrive"
							value={searchParams.lieuArrive}
							onChange={handleInputChange}
							placeholder="To: Enter destination"
						/>
					</Form.Group>
				</Col>

			</Form>

			<h2 className="noticia-text-bold labelings mb-3">Available Urban Trips</h2>
				{filteredUrbanTrips.map((trip) => (
					<Card key={trip.id} className="mb-3 trip-size">
						<Card.Body className="flex flex-row justify-between ">
							<div>
								<Card.Title>{trip.villeDepart}: {trip.lieuDepart} to {trip.lieuArrive}</Card.Title>
								<Card.Subtitle className="mb-2 text-muted">Price: {Math.ceil(trip.price / 10) * 10} FCFA</Card.Subtitle>
								<Card.Subtitle className="mb-2 text-muted">Date & time: {trip.dateDepart}</Card.Subtitle>
								<Card.Subtitle className="mb-2 text-muted">Time: {trip.heureDepart}</Card.Subtitle>
								{/*<Card.Subtitle className="mb-2 text-muted">Fre: {trip.heureDepart}</Card.Subtitle>*/}
							</div>
							<div>
								<Button className="select-button" onClick={() => alert(`Selected trip from ${trip.lieuDepart} to ${trip.lieuArrive}`)}>Select</Button>
							</div>
						</Card.Body>
					</Card>
				))}
		</div>
	);
}

export default UrbanTrips;
