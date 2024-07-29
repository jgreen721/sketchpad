import React, {useState} from 'react'

const ColorPicker = ({label,color,target,handleChangeColor}) => {
    // const [targetColor,setTargetColor] = useState(color)

    const changeColor = (e)=>{
        // setTargetColor(e.target.value);
        console.log("changeColor fired!",e.target.value)
        handleChangeColor(target,e.target.value)
    }


  return (
    <div className="palete-option">
    <div style={{backgroundColor:color}} id="pen-color" className="color-pallette"></div>
    <h5 className="label-text bold">{label} Colour</h5>
    <input onChange={(e)=>changeColor(e)}  type="color" data-role="pen" className="color-picker" />
  </div>
  )
}

export default ColorPicker