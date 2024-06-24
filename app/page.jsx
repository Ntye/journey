'use client'
import React from "react";
import './styles/trips.css';
import { Tab, Tabs } from 'react-bootstrap'
import InterUrbanTrips from '@/components/InterUrbanTrips'
import UrbanTrips from '@/components/UrbanTrips'


export default function Home() {

  return (
    <main className="main mb-5"
      style={{
      backgroundImage: `url("/Land.svg")`,
      height: "100vh",
      backgroundRepeat: "no-repeat",
      backgroundSize: "1024px",
    }}
    >
      <div className="header">
        <div className="header-text">
          <span className="noticia-text-regular heading">Travel Simplified</span> <br/>
          <div className=" d-flex flex-row space-x-8 bot-text">
            <span className="noticia-text-regular heading">Experiences </span>{'  '}
            <span className="oleo-script-swash-caps-bold heading1"> Amplified</span>
          </div>
        </div>
        <div className="description">
          <span className="noticia-text-regular text-description">
            Rejoignez-nous pour explorer de nouveaux horizons et vivre des aventures uniques lors
            de vos déplacements. Notre service vous offre des trajets sûrs et agréables, assurant
            ainsi une expérience de voyage mémorable.
          </span>
        </div>

        <div className="trips-page-container mb-5" style={{ padding: '20px' }}>
          <Tabs defaultActiveKey="interurban" id="trips-tabs" classname="trip-tabs">
            <Tab eventKey="interurban" title="Interurban Trips">
              <InterUrbanTrips/>
            </Tab>
            <Tab eventKey="urban" title="Urban Trips">
              <UrbanTrips/>
            </Tab>
          </Tabs>
        </div>

      </div>
    </main>
  );
}
