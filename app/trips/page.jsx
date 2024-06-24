'use client'
import UrbanTrips from '@/components/UrbanTrips'
import InterUrbanTrips from '@/components/InterUrbanTrips'
import { Tabs, Tab } from 'react-bootstrap';
import '../styles/trips.css';

export default function TripsPage() {
	return (
		<div className="trips-page-container" style={{ padding: '20px' }}>
			<Tabs defaultActiveKey="interurban" id="trips-tabs">
				<Tab eventKey="interurban" title="Interurban Trips">
					<InterUrbanTrips/>
				</Tab>
				<Tab eventKey="urban" title="Urban Trips">
					<UrbanTrips/>
				</Tab>
			</Tabs>
		</div>
	);
}
