'use client'
import Link from "next/link";
import React from "react";
import Image from "next/image";

import {Noticia_Text, Oleo_Script_Swash_Caps} from 'next/font/google';

import './styles/landing.css';
import {Button} from "react-bootstrap";

const myFont = Noticia_Text({
  subsets: ["latin"],
  weight: "400",
})

const myFont1 = Oleo_Script_Swash_Caps({
  subsets: ["latin"],
  weight: "700",
})

export default function Home() {

  return (
    <main className="main">
       {/*style={{*/}
       {/*  backgroundImage: `url("/Land.svg")`,*/}
       {/*  height: "100vh",*/}
       {/*  backgroundRepeat: "no-repeat",*/}
       {/*  backgroundSize: "1024px",*/}
       {/*}}*/}

      <div className="header">
        <div className="header-text">
          <span className={`${myFont.className} heading`}>Travel Simplified</span> <br/>
          <div className=" d-flex flex-row space-x-8 bot-text">
            <span className={`${myFont.className} heading`}>Experiences </span>{'  '}
            <span className={`${myFont1.className} heading1`}> Amplified</span>
          </div>
        </div>
        <div className="description">
          <span className={`${myFont.className}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim dolor magna, sed volutpat
            libero ultricies quis. Phasellus ac malesuada massa. Donec at pharetra enim. Nunc lobortis ex et
            eleifend condimentum.
          </span>
        </div>
        <div>
          <div>
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
