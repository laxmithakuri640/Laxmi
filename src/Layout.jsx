import React from 'react'
import { Outlet } from 'react-router-dom'
import DayNavigation from './Day7/Component/DayNavigation'

export default function Layout() {
  return (
    <div>
      <DayNavigation/>
      <Outlet/>
    </div>
  )
}