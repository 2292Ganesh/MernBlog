import React from 'react'

import { Navbar } from './Navbar'

import {BrowserRouter,Routes,Route} from "react-router-dom"
import Form from './Form'

export const Home = () => {
  return (


    <BrowserRouter>

    <Routes>
        <Route path='/' element={<Navbar />}></Route>
        <Route path='/f' element={<Form/>}></Route>
    </Routes>
    </BrowserRouter>
    
  )
}
