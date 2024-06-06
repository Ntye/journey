'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Inter, Alex_Brush, Noticia_Text } from 'next/font/google';
import Avatar from '@mui/material/Avatar';
import './styles/globals.css';
import SideNavbar from "../components/main/SideNavbar";
import React, {useState} from "react";

import { FaHome, FaInfoCircle, FaServicestack, FaEnvelope, FaUser } from 'react-icons/fa';
import Link from "next/link";
import Image from "next/image";
import {Button} from "react-bootstrap";

const inter = Inter({ subsets: ['latin'] });

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

// export const metadata = {
//   title: 'VSV',
//   description: 'Voyageur Sans Vehicule',
// };

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
      <title>VSV</title>
    </head>
    <body className={inter.className}>
      <SideNavbar navItems={navItems} isExpanded={isExpanded} onToggle={toggleNavbar}/>

      {/*<div className="body">*/}
      <div className={`body ${inter.className} ${isExpanded ? 'body-expanded' : 'body-collapsed'}`}>
        <div className="horizontal-navbar">
          <Link href="/profile" className="element">
            <Button className="login-button">
              <FaUser /> Profile
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
