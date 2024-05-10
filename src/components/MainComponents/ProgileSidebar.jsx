import React from 'react'
import { NavLink } from 'react-router-dom'

const ProgileSidebar = () => {
  return (
    <div>
      <nav>
        <NavLink to={"/setdasdastings"}>Teams</NavLink>
        <NavLink to={"/asdasd"}>Projects</NavLink>
        <NavLink to={"/dssd"}>Created Projects</NavLink>
      </nav>
    </div>
  )
}

export default ProgileSidebar