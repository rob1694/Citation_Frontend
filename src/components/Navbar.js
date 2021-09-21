import React from 'react'

function NavBar() {
  return (

  <nav>
    <ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" href = "/">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href ="/Enforcers">Enforcers </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href ="/Offenders">Offenders </a>
  </li>
</ul>
    </nav>
  )
}

export default NavBar;