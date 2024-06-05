'use client'
import Link from "next/link";
import React from "react";
import Image from "next/image";

import { Noticia_Text } from 'next/font/google';

import './styles/landing.css';

const myFont = Noticia_Text({
  subsets: ["latin"],
  weight: "700",
})

export default function Home() {

  return (
    <main className="main"
      style={{
      backgroundImage: `url("/Land.svg")`,
      height: "100vh",
      backgroundRepeat: "no-repeat",
      backgroundSize: "970px",
    }}
    >
      <div className="header">
        <div className="header-text">
          <span className={`${myFont.className} heading`}>Travel Simplified</span> <br/>
          <div className="d-flex flex-row">Experiences <div>Amplified</div></div>
        </div>
      </div>

      HELLLLLLLOOOOOOOOOOOOOOOOOOOOOOOOOO The WORLDDDDDDDDDDDDDDDD
      <Link href="/auth" className={`${myFont.className} hey`} >Signup</Link>
    </main>
  );
}
