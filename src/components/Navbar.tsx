import React from 'react'
import { NavLink } from 'react-router-dom';
type Props = {}

function Navbar({}: Props) {
  return (
    <div className="container-fluid">
      <ul className="navbar-nav w-auto me-auto mb-2 mb-lg-0">
        <li className="navbar-brand">
            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="navbar-brand">
            <NavLink className="nav-link" to="/product">Product </NavLink>
        </li>
        <li className="navbar-brand">
            <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="navbar-brand">
            <NavLink className="nav-link" to="/Blog">Blog</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar