import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <nav>
      <NavLink exact to="/">Home</NavLink>
      <NavLink to="/Enforcers">Enforcers</NavLink>
      <NavLink to="/Offenders">Offenders</NavLink>

    </nav>
  )
}

export default NavBar;