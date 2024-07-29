import { useState } from 'react'
import './App.css'
import {Routes,Route} from "react-router-dom"
import {Dashboard,Gallery,SketchPad} from "./views"
import {AnimatePresence} from "framer-motion"
import {useLocation} from "react-router-dom"

function App() {
  const location = useLocation();

  console.log(location.pathname)

  return (
    <div data-theme="dark" className="app">
      <AnimatePresence key={location.pathname} mode="wait" >
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/sketch" element={<SketchPad/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
      </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App
