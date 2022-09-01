import React from 'react';
import logo from '../assets/logo.png'

export default function Navbar() {
  return (
      <nav className="nav">
        <img src={logo} alt="airbnb-logo" className="logo" />
      </nav>
  )
}