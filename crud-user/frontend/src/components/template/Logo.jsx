import React from 'react'
import { Link } from 'react-router-dom'

import './Logo.css'
import logo from '../../assets/imgs/logo_loglife.png'

export default (props) => {
  return (
    <aside className="logo">
      <Link to="/" className="logo">
        <img src={logo} alt="Loglife Logo"/>
      </Link>
    </aside>
  )
}
