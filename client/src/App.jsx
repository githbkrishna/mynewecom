import Mens from "./Mens/Mens"
import Navbar from "./Navbar/Navbar"
import { Route ,Routes } from "react-router-dom"
import Sections from "./Sections/Sections"
import Mainpage from "./Sections/Mainpage"
import './App.css'
import Cardetails from "./Carddetails/Cardetails"
import { useState } from "react"
import Womens from "./Womens/Womens"
import StepperMain from "./Stepper/StepperMain"
import Footer from "./footer/Footer"

function App() {

  const[search,setsearch] =useState('')

  return (
      <div>
       <Navbar search={search} setsearch={setsearch}/>
        <Routes >
        <Route path="/" element={<Mainpage />}/>

          <Route path="/Mens" element={<Mens search={search} />}/>
          <Route path="/Womens" element={<Womens search={search} />}/>


          <Route path="/cartdetails/:id" element={<Cardetails />}/>
          <Route path="/checkout" element={<StepperMain />}/>


        </Routes>

        <Footer/>
  
      </div>
      
  )
}

export default App
