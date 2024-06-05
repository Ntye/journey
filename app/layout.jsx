'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Inter, Alex_Brush, Noticia_Text } from 'next/font/google';
import './styles/globals.css';
import SideNavbar from "../components/main/SideNavbar";
import React, {useState} from "react";

import { FaHome, FaInfoCircle, FaServicestack, FaEnvelope } from 'react-icons/fa';
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] });

// const myFont = Inter({
//   subsets: ["latin"],
//   variable: "--my-font-family",
// })

// export const myfont = Alex_Brush({
//   subsets: ["latin"],
//   weight: "400",
//   variable: "myfont",
// })

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

      <div className={`body ${inter.className} ${isExpanded ? 'body-expanded' : 'body-collapsed'}`}>
        <div className="horizontal-navbar">
          <Link href="/profile">Profile</Link>
        </div>
        {children}
      </div>
    </body>
    </html>
  );
}
