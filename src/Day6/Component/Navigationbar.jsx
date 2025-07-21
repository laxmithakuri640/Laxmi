import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigationbar() {
  return (
   <nav>
    <Link to="/">Home </Link >
    <Link to="/userlist">User List</Link>

   </nav>
  )
}