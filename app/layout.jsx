import 'bootstrap/dist/css/bootstrap.min.css';
import { Inter } from 'next/font/google';
import './styles/globals.css';
import SideNavbar from "../components/main/SideNavbar";
import React from "react";

import { FaHome, FaInfoCircle, FaServicestack, FaEnvelope } from 'react-icons/fa';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'VSV',
  description: 'Voyageur Sans Vehicule',
};

export default function RootLayout({ children }) {
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
    <body className={inter.className}>
      <SideNavbar navItems={navItems}/>
      {children}
    </body>
    </html>
  );
}
