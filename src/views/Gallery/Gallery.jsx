import React from 'react'
import {Navbar} from "../../components"
import {motion} from "framer-motion"

const Gallery = () => {
  return (
    <motion.div initial={{x:-1000}} animate={{x:0}} transition={{type:"spring"}} exit={{y:1000}}>
      <Navbar link="/sketch" linkName="Sketch"/>
    </motion.div>
  )
}

export default Gallery