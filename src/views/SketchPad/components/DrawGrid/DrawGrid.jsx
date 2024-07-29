import { GridCel } from "./components"
import "./DrawGrid.css"

const DrawGrid = ({cels,size,bgColor,handleCelAction,handleCelClick,active,penColor}) => {



  return (
     <div className="grid-parent flex-center">
        <div style={{"--i":size}} id="draw-grid" className="draw-grid">
          {cels.map((cel,idx)=>(
            <GridCel bgColor={bgColor} handleCelAction={handleCelAction} handleCelClick={handleCelClick} active={active} key={cel.id} penColor={penColor} cel={cel}/>
          ))}
      </div>
    </div> 
  )
}

export default DrawGrid