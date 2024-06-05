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
      backgroundSize: "1000px",
    }}
    >
      <div className="header">
        <Image
          src="/Logo.svg"
          alt="YO"
          className="logo-land"
          width={80}
          height={60}
        />
        <div className="header-text">
          <span className={`${myFont.className} heading`}>Travel Simplified</span> <br/>
          <div className=" d-flex flex-row space-x-3">
            <span className={`${myFont.className} heading`}>Experiences </span>{'  '}
            <span className={`${myFont.className} heading`}> Amplified</span>
          </div>
        </div>
      </div>

      HELLLLLLLOOOOOOOOOOOOOOOOOOOOOOOOOO The WORLDDDDDDDDDDDDDDDD
      <Link href="/auth" className={`${myFont.className} hey`} >Signup</Link>
    </main>
  );
}
