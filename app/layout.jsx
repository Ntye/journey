'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Avatar from '@mui/material/Avatar';
import './styles/globals.css';
import SideNavbar from "../components/main/SideNavbar";
import React, {useState} from "react";

import { FaHome, FaInfoCircle, FaServicestack, FaEnvelope, FaUser } from 'react-icons/fa';
import Link from "next/link";
import Image from "next/image";
import {Button} from "react-bootstrap";

function stringAvatar(name) {
  return {
    sx: {
      width: 30,
      height: 30,
      bgcolor: "#2e1aa8",
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

export default function RootLayout({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  const navItems=[
    {
      "id": "1",
      "name": "Home",
      "icon": <FaHome/>,
      "link": "/auth"
    },
    {
      "id": "2",
      "name": "About",
      "icon": <FaInfoCircle/>,
      "link": "/auth"
    },
    {
      "id": "3",
      "name": "Services",
      "icon": <FaServicestack/>,
      "link": "/auth"
    },
    {
      "id": "4",
      "name": "Contact",
      "icon": <FaEnvelope/>,
      "link": "/auth"
    }
  ]

  return (
    <html lang="en">
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet"/>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Noticia+Text:ital,wght@0,400;0,700;1,400;1,700&display=swap"
        rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Oleo+Script+Swash+Caps:wght@400;700&display=swap"
            rel="stylesheet"/>
      <title>VSV</title>
    </head>
    <body className="inter">

    <SideNavbar navItems={navItems} isExpanded={isExpanded} onToggle={toggleNavbar}/>

    <div className={`body inter ${isExpanded ? 'body-expanded' : 'body-collapsed'}`}>
      <div className="horizontal-navbar">
        <Link href="/profile" className="element">
          <Button className="login-button">
            <FaUser/> Profile
          </Button>

          {/*<Avatar {...stringAvatar("Ntye Nina Laissa")}/>*/}
          {/*Profile*/}
        </Link>

        <Link href="/">
          <Image
            src="/Logo.svg"
            alt="YO"
            className="element"
            width={100}
            height={100}
          />
        </Link>
      </div>
      <div>
        {children}
      </div>
    </div>
    </body>
    </html>
  );
}
