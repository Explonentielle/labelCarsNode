import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import App from "./App";
import AddCars from './page/AddCars';




const Root = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/add" element={<AddCars />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Root