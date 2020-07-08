import React from 'react'
import { Link } from 'react-router-dom'

import './Nav.css'

export default (props) => {
  return (
    <Link to={`/${props.path}`}>
      <i className={`fa fa-${props.icon}`}> {props.title}</i>
    </Link>
  )
}
