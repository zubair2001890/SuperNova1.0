import React from 'react'
import { NavLink } from 'react-router-dom'
import NavItem from './NavItem'

export default function Item({ to, children }) {
  return (
    <NavItem Component={NavLink} to={to}>
      {children}
    </NavItem>
  )
}
