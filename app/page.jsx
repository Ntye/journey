'use client'
import React from "react";

import './styles/landing.css';


export default function Home() {

  return (
    <main className="main"
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim dolor magna, sed volutpat
            libero ultricies quis. Phasellus ac malesuada massa. Donec at pharetra enim. Nunc lobortis ex et
            eleifend condimentum.
          </span>
        </div>
      </div>
    </main>
  );
}
