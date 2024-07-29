import React, {useEffect,useRef,useState} from 'react'
import { Navbar } from '../../components'
// import { DrawGrid,ActionPanel } from './components'
import {ActionPanel,DrawGrid,SubmitPicture} from "./components"
import {motion} from "framer-motion"
import "./SketchPad.css"







const SketchPad = () => {
  const [gridCels,setGridCels] = useState([]);
  const [size,setSize] = useState(40);
  const [active,setActive] = useState(false);
  const [reset,setReset] = useState(false);
  const [action,setAction] = useState('draw');
  const [penColor,setPenColor] = useState('#d92626')
  const [bgColor,setBgColor] = useState('#FFFFFF');
  const [alert,setAlert] = useState("")
  const [showSubmitPicture,setShowSubmitPicture] = useState(false);

  useEffect(()=>{
    let savedGrid = JSON.parse(localStorage.getItem("savedGrid"));
    let savedPenColor = localStorage.getItem("penColor") || penColor;
    // console.log("savedGrid",savedGrid);

    if(!savedGrid)setGridCels(new Array(size*size).fill(0).map((a,i)=>  ({id:i+1,className:"cel",color:bgColor,colored:false})))
    else {
      setGridCels(savedGrid);
      setPenColor(savedPenColor);
    }
  },[size,reset]);


  useEffect(()=>{
    if(reset){
    setGridCels(new Array(size*size).fill(0).map((a,i)=>({id:i+1,className:"cel",color:bgColor,colored:false})))
    localStorage.clear();
    setReset(false);
    }


  },[reset])


  const handleCelClick=(cel)=>{
    if(cel.color == bgColor){
      setGridCels(gridCels=>gridCels.map((a,i)=>a.id == cel.id ? {...a,colored:true,color:penColor} : a))

    }
    else{
      setGridCels(gridCels=>gridCels.map((a,i)=>a.id == cel.id ? {...a,colored:true,color:bgColor} : a))

    }
  }


  const handleCelAction=(cel)=>{
   
    // console.log("handleColorCel fired!--")
    if(action == "draw"){
    setGridCels(gridCels=>gridCels.map((a,i)=>a.id == cel.id ? {...a,colored:true,color:penColor} : a))
    }
    if(action == "grab"){
      console.log("Grab color!!",cel.color)
      setPenColor(cel.color);
      setAction("draw");
    }

    if(action == "erase"){
      setGridCels(gridCels=>gridCels.map((a,i)=>a.id == cel.id ? {...a,colored:false,color:bgColor} : a))

    }
    if(action == "rainbow"){
      console.log("rainbow!")
      let newColor = `rgb(${Math.random() * 255 | 0},${Math.random() * 255 | 0},${Math.random() * 255 | 0})`
      console.log("newColor",newColor);
      setGridCels(gridCels=>gridCels.map((a,i)=>a.id == cel.id ? {...a,colored:true,color:`rgb(${Math.random() * 255 | 0},${Math.random() * 255 | 0},${Math.random() * 255 | 0})`} : a))

    }

  }


  const handleChangeColor=(target,newColor)=>{
    console.log(target,newColor)
    if(target == "pen"){
      setPenColor(newColor)
    }
    else{
      setBgColor(newColor)
      setGridCels((gridCels)=>gridCels.map(cel=>({...cel,color:cel.color == penColor ? cel.color : newColor})))

    }
  }

  
function handleEraser() {

    setAction("erase");
  }
  
  
  function handleColorGrabber() {
    console.log("handleGrabber");
    setAction("grab");

  }
  
  
  function handleRainbowMode() {
    console.log("handleRainbowMode")
    setAction("rainbow");
  }
  
  function handleClearGrid() {
    console.log("handleClearGrid")
    setReset(reset=>reset=!reset)
  }
  
  function handleSave() {
    console.log("handleSave")
    let savedGrid = gridCels;
    localStorage.setItem("savedGrid",JSON.stringify(savedGrid));
    localStorage.setItem("penColor",penColor);
    toggleAlert("Drawing was saved!")
  }
  
  function handleDraw() {
    console.log("handleDraw");
    setAction("draw")
  }

  function handleTakePicture(){
    console.log('handleTakePicture fired!')
    setShowSubmitPicture(true)
  }

  function handleChangeSize(newSize){
    setSize(newSize);
    setReset(true)
  }
  
  
  function toggleGridLines() {
    console.log("handleGridLines")
  }


  function toggleAlert(msg){
    setAlert(msg);
    setTimeout(()=>setAlert(""),3000);
  }

  return (
    <motion.div onMouseDown={()=>setActive(true)} onMouseUp={()=>setActive(false)} initial={{y:1000}} animate={{y:0}} transition={{type:"spring"}} className="view-container">
      <Navbar link="/gallery" linkName="Gallery"/>

      <div className="alert-msg-row">
        <h3 className="alert-h3">{alert}</h3>
      </div>
      <div className="grid-content-row">
    <div className="flex-1">
      <ActionPanel size={size} setSize={setSize} action={action} handleChangeColor={handleChangeColor} handleChangeSize={handleChangeSize} handleRainbow={handleRainbowMode} handleDraw={handleDraw} handleEraser={handleEraser} handleSave={handleSave} handleTakePicture={handleTakePicture} handleColorGrabber={handleColorGrabber} handleClear={handleClearGrid} penColor={penColor} bgColor={bgColor}/>

   
    </div>
    <div className="flex-2">
      {/* <div className="grid-parent flex-center">
        <div style={{"--i":size}} id="draw-grid" className="draw-grid">
          {gridCels.map((cel,idx)=>(
            <GridCel bgColor={bgColor} handleCelAction={handleCelAction} active={active} key={cel.id} penColor={penColor} cel={cel}/>
          ))}
      </div>
    </div> */}
    <DrawGrid cels={gridCels} bgColor={bgColor} handleCelClick={handleCelClick} handleCelAction={handleCelAction} active={active} penColor={penColor} size={size}/>
    </div>
      </div>
      <SubmitPicture size={size} showSubmitPicture={showSubmitPicture} setShowSubmitPicture={setShowSubmitPicture} gridData={gridCels} gridColor={bgColor}/>
    </motion.div>
  )
}

export default SketchPad