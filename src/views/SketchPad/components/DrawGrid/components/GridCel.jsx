
const GridCel = ({cel,handleCelAction,handleCelClick,active,penColor,bgColor})=>{



    return(
      <div onClick={()=>handleCelClick(cel)} style={{backgroundColor:cel.colored ? cel.color : bgColor}} onMouseEnter={()=>{if(!active)return; handleCelAction(cel)}} className="cel"></div>
    )
  }

  export default GridCel;