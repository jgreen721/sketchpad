import React from 'react'
import { motion } from 'framer-motion';
import { sample1,sample2,sample3,sample4,sample5,sample6 } from '../../../../const';
import "./DashboardOverlay.css";

const DashboardOverlay = () => {
  const galleryImgs = [
    {id:1,img:sample1,transform:'translate(-1rem,2rem)rotate(-14deg)scale(1.3)'},
    {id:2,img:sample2,transform:'translate(1rem,0rem)rotate(-7deg)scale(.99)'},
    {id:3,img:sample3,transform:'translate(-1rem,1rem)rotate(4deg)scale(1.3)'},
    {id:4,img:sample4,transform:'translate(0rem,2rem)rotate(13deg)scale(1)'},
    {id:5,img:sample5,transform:'translate(2rem,3rem)rotate(-2deg)scale(1.2)'},
    {id:6,img:sample6,transform:'translate(-1rem,.5rem)rotate(5deg)scale(.99)'},
  ]
  return (
    <div className="dash-overlay flex-center">
    <ul className="dash-overlay-gallery">
    {galleryImgs.map(img=>(
      <li  style={{transform:img.transform,"--delay":`${img.id/2}s`}} className="gallery-img-item" key={img.id}>
        <motion.img initial={{scale:0}} animate={{scale:1}} transition={{type:"spring",delay:img.id/2}} className="dash-gallery-img" src={img.img} alt="gallery-img"/>
      </li>
    ))}
    </ul>
  </div>
  )
}

export default DashboardOverlay