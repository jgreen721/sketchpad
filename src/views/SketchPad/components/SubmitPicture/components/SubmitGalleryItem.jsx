import React from 'react'

const SubmitGalleryItem = ({item}) => {
  return (
    <div className="gallery-item" key={item.id}>
    <div className="gallery-item-title-div">
    <h3 className="gallery-item-title fancy-font gradient-text">{item.title}</h3>
    </div>
    <img className="gallery-img" src={item.img} alt="img"/>
    <h5 className="gallery-item-description">{item.description}</h5>
    <a href={item.img} download>Download</a>
  </div>
  )
}

export default SubmitGalleryItem