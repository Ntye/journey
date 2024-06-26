'use client'
import React, { useState } from 'react';
import '../styles/SideNavbar.css';
import { FaBars } from 'react-icons/fa';
import Link from "next/link";
import {
  FaHome,
  FaEnvelope,
  FaUser,
  FaBookmark,
} from 'react-icons/fa'

const SideNavbar = ({navItems, onToggle, isExpanded,isAuthenticated}) => {

  return (
    <div className={`side-navbar ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <button className="toggle-button" onClick={onToggle}>
        {isExpanded ?
          <div className="link-text">
            Menu <FaBars/>
          </div>
          : <FaBars/>
        }
      </button>
      <nav className="nav-menu">
        {navItems.map((item) => (
          <Link
            key={item.id}
            href={item.link}
            className="link"
          >
            {isExpanded ?
              <div className="link-text">
                {item.name} {item.icon}
              </div>
              : item.icon
            }
          </Link>
        ))}

        {isAuthenticated ??
          <Link href="/auth" className="link mt-8">
          {isExpanded ?
            <div className="link-text">
              Login <FaUser/>
            </div>
            : <FaUser/>
          }
        </Link>
        }

      </nav>
    </div>
  );
};

export default SideNavbar;
