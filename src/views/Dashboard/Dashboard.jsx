import React from 'react'
import {GridBg,DashboardOverlay,DashboardContent} from "./components"
import {motion} from "framer-motion"
import "./Dashboard.css";

const Dashboard = () => {

  return (
    <motion.div initial={{y:'100%'}} animate={{y:0}} exit={{y:1000,transition:{duration:1000}}} transition={{type:"spring"}} className="view-container flex-center">
      <DashboardContent/>
      <DashboardOverlay/>
      <GridBg/>
    </motion.div>
  )
}

export default Dashboard