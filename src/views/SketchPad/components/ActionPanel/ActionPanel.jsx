import React from 'react'
import {ActionBtn,ColorPicker} from "./components"
import "./ActionPanel.css"
import GridSlider from './components/GridSlider'

const ActionPanel = ({handleChangeColor,handleDraw,handleColorGrabber,handleRainbow,handleEraser,handleClear,handleSave,handleChangeSize,handleTakePicture,penColor,bgColor,action,size}) => {
  
  return (
    <section id="options-panel">
      <div className="">
        <div className="panel-section">
        <ColorPicker handleChangeColor={handleChangeColor}  label="Pen" target="pen" color={penColor}/>
        <ColorPicker handleChangeColor={handleChangeColor}  label="Background" target="background" color={bgColor}/>
        </div>
        <ActionBtn activeKey="draw" action={action} btnText="Color Fill" handleClick={handleDraw}/>

      </div>
      <div className="panel-section mobile-column">
        <ActionBtn activeKey="grab" action={action} btnText="Color Grabber" handleClick={handleColorGrabber}/>
        <ActionBtn activeKey="erase" action={action} btnText="Toggle Eraser" handleClick={handleEraser}/>
        <ActionBtn activeKey="rainbow" action={action} btnText="Toggle Rainbow" handleClick={handleRainbow}/>
      </div>
      <div>
        <div className="panel-section">
          <div className="panel-option">
        <GridSlider size={size} handleChangeSize={handleChangeSize}/>
          </div>
        <div className="panel-option">
          <ActionBtn activeKey="save" action={action} btnText="Save" handleClick={handleSave}/>
        </div>
        </div>
      <div className="panel-section">
      <ActionBtn activeKey="clear" action={action} btnText="Clear" handleClick={handleClear}/>
      <ActionBtn activeKey="picture" action={action} btnText="Take Picture" handleClick={handleTakePicture}/>
      </div>

      </div>
    

  </section>
  )
}

export default React.memo(ActionPanel)