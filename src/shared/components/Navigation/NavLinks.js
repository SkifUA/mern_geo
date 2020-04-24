import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

import './NavLinks.css'

class NavLinks extends  Component {
  render() {
    return <ul className="nav-links">
      <li>
        <NavLink to="/" exact>All Users</NavLink>
      </li>
      <li>
        <NavLink to="/u1/places">My Places</NavLink>
      </li>
      <li>
        <NavLink to="/places/new">New Place</NavLink>
      </li>
      <li>
        <NavLink to="/auth">Authenticate</NavLink>
      </li>
    </ul>

  }
}

export default NavLinks