'use client'
import Link from "next/link";
import React, {useState} from "react";
import Image from "next/image";

import { Noticia_Text } from 'next/font/google';

import './styles/landing.css';

const myFont = Noticia_Text({
  subsets: ["latin"],
  weight: "700",
})

export default function Home() {

  return (
    <main >
      {/*className="flex min-h-screen flex-col items-center justify-between p-24"*/}
      <div className="header">
        <div className="header-text">
          <span className={`${myFont.className} heading`}>Travel Simplified</span> <br/>
          <div className="d-flex flex-row">Experiences <div>Amplified</div></div>
        </div>
        <Image
          src="/Landing.svg"
          alt="Hey"
          width={650}
          height={300}
          className="landing-img"
        />
      </div>

      HELLLLLLLOOOOOOOOOOOOOOOOOOOOOOOOOO The WORLDDDDDDDDDDDDDDDD
      <Link href="/auth" className={`${myFont.className} hey`} >Signup</Link>
    </main>
  );
}
