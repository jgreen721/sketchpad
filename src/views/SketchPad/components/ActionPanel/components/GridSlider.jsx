import React, {useState,useRef} from 'react'

const GridSlider = ({size,handleChangeSize}) => {
  const [showModal,setShowModal] = useState(false);
  const newSizeRef = useRef();

  const handleSlider=(e)=>{
    setShowModal(true);
    newSizeRef.current = e.target.value;

  }

  const handleConfirmSizeChange=()=>{
        // setSize(newSizeRef.current);
        setShowModal(false);
        handleChangeSize(newSizeRef.current);
  }
  return (
    <div className="range-div">
        <input onChange={(e)=>handleSlider(e)} type="range" min="10" step="10" max="50" className="range-input" />
        <h5>
        Grid Size: 
        <span className="grid-size">{size}</span> x <span className="grid-size">{size}</span>
        </h5>
        <div className={`confirm-resize-modal ${showModal ? 'show-modal' : 'hide-modal'}`}>
          <h5>Resizing will cause the grid to clear. Are you sure you want to continue?</h5>
          <button className="confirm-btn blue" onClick={handleConfirmSizeChange}>Yes</button>
          <button className="confirm-btn red" onClick={()=>setShowModal(false)}>No</button>
        </div>
  </div>
  )
}

export default GridSlider