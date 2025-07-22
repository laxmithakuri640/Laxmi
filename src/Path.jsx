import React from 'react'
import Viewuser from './Day6/Viewuser'
import Home from './Day6/Home'

import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Filenotfound from './Filenotfound'
import Todo from './Day8/Todo'
import CompleteForm from './Day9/CompleteForm'

export default function Path() {
  return (
    <Routes>
      <Route path='/Day9/Stepform' element={<CompleteForm/>}/>
      <Route path='*'element={<Filenotfound/>}/>
       <Route path="/"element={<Layout/>}>
        <Route index element={<Home />} />
      <Route path="/userlist" element={<Viewuser />} />
      <Route path='/Todo'element= {<Todo/>}/>
       </Route>
    </Routes>
  )
}