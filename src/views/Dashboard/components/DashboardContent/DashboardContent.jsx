import React from 'react'
import "./DashboardContent.css"
import {motion} from "framer-motion"
import {useNavigate} from "react-router-dom";



const DashboardContent = () => {
    const navigate = useNavigate();


    const handleNavigate = (url)=>{
        navigate(url);
    }
  return (
    <div className="dash-content">
     <div className="dash-header-row flex-center">
      <div className="relative-mask-container">
         <motion.h1 initial={{y:200}} animate={{y:0}} transition={{type:"spring",delay:.5}} className="dashboard-h1 fancy-font gradient-text">Sketch</motion.h1>
        <h1 style={{"--delay":"1s"}} className="fancy-font dashboard-shadow absolute-shadow">Sketch</h1> 
      </div>
      <div className="relative-mask-container">
         <motion.h1 initial={{x:300}} animate={{x:0}} transition={{type:"spring",delay:1}} className="dashboard-h1 fancy-font gradient-text">Pad</motion.h1>
        <h1 style={{"--delay":"1.5s"}} className="fancy-font dashboard-shadow absolute-shadow">Pad</h1> 
      </div>
    </div> 
    <div className="flex-center">
   
        <motion.button onClick={()=>handleNavigate("/sketch")} initial={{scale:0}} animate={{scale:1}} transition={{type:"spring",delay:1}} className="draw-link-btn link-btn">
          <h5>Draw</h5>
        </motion.button>
     
         <motion.button onClick={()=>handleNavigate("/gallery")} initial={{scale:0}} animate={{scale:1}} transition={{type:"spring",delay:1.2}} className="view-gallery-link-btn link-btn">
            <h5>View gallery </h5>
        </motion.button>
    </div>
  </div>
  )
}

export default DashboardContent