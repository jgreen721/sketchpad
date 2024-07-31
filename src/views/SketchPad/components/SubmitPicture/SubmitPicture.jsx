import React, {useRef,useEffect, useState} from 'react'
import { IoMdCloseCircleOutline } from "react-icons/io";
import {SubmitGalleryItem} from "./components"
import "./SubmitPicture.css"

const SubmitPicture = ({showSubmitPicture,setShowSubmitPicture,gridData,size,gridColor}) => {
  const canvasRef = useRef();
  const formRef = useRef();
  const [canvasSize,setCanvasSize] = useState(400)
  const [savedItems,setSavedItems] = useState([])



  useEffect(()=>{
    if(innerWidth < 650){
      setCanvasSize(300)
    }
  })

  useEffect(()=>{
    if(showSubmitPicture){
    if(canvasRef.current){
      class Pixel{
        constructor(x,y,width,height,color){
          this.x = x;
          this.y = y;
          this.width = width;
          this.height = height;
          this.color = color
          this.tail = color
        }

        draw(){
          ctx.fillStyle=this.color
          ctx.fillRect(this.x,this.y,this.width,this.height);
          // ctx.fill();
        }
      }
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      ctx.fillStyle=gridColor
      let pixels = []
      ctx.fillRect(0,0,canvas.width,canvas.height);
      let posX = 0
      let posY = 0;
      for(let i=0;i<gridData.length;i++){
          let width = (canvasSize/size)
          let height =(canvasSize/size)
          
          console.log("Width",width);
          let pixel = new Pixel(posX,posY,width,height,gridData[i].color)
          pixels.push(pixel);
          // console.log(posX)
          // posX+=width;
          posX+=width;

          if(posX >= canvas.width){
            posX = 0;
            posY+=height;
          }
          // else{
          // posX+=width;
          // }

      }
      // console.log(pixels)
      pixels.forEach(pixel=>pixel.draw());
      // let pixel = new Pixel(200,200,50,50,'orange');
      function animate(){
        ctx.fillStyle="black"
        ctx.fillRect(0,0,canvas.width,canvas.height);
        pixels.forEach(pixel=>pixel.draw());

        // ctx.fillStyle = "red";
        // ctx.fillRect(10,10,45,50);
        
        // pixel.draw();

      requestAnimationFrame(animate)
      }
      animate();
    }
  }
  },[showSubmitPicture])

  useEffect(()=>{
    if(showSubmitPicture){
      // console.log("GridData",gridData)
    }
  },[showSubmitPicture])


  const handleContinueSubmit=(e)=>{
    e.preventDefault();
    console.log('continue handleSUbmit');
    let formData = new FormData(formRef.current);

    let formMetaData={
      title:formData.get("title"),
      description:formData.get("description")
    }
    let canvas = canvasRef.current;
    let ctx = canvas.getContext("2d");
    // console.log(ctx)
     let image = canvas.toDataURL("image/png");
     console.log(image)
    //  let img = document.createElement("img");
    //  img.setAttribute("src",image);
    //  document.querySelector(".img-gallery").append(img);
    let galleryItem={
      id:savedItems.length + 1,
      title:formMetaData.title,
      description:formMetaData.description,
      img:image
    }
    setSavedItems((savedItems)=>[galleryItem])
  }
  return (
    <div className={`submit-picture-container ${showSubmitPicture ? 'show-display' : 'hide-display'}`}>
      <div className="submit-picture-content">
        <header className="submit-header">
          <h2 className="fancy-font gradient-text submit-header-text">Add to the Gallery!</h2>
        <button className="close-btn" onClick={()=>setShowSubmitPicture(false)}>
          <IoMdCloseCircleOutline />
        </button>
        </header>
        <div className="picture-content-form-row">
          <canvas width={canvasSize} height={canvasSize} className="picture-canvas" ref={canvasRef}></canvas>
          <div className="form-content-section">
              <form onSubmit={handleContinueSubmit} ref={formRef}>
                <div className="form-div">
                  <input type="text" className="form-control" autoComplete="off" placeholder="Title" name="title" />
                </div>
                <div className="form-div">
                  <textarea className="form-textarea form-control" name="description" placeholder="Description"/>
                </div>
                <div className="form-div">
                  <button className="submit-btn" type="submit">Continue</button>
                </div>
              </form>
          </div>
        </div>
        <h2 className="fancy-font gradient-text submit-gallery-header">Image Gallery</h2>
    <div className="img-gallery">
      {savedItems.map(item=>(
 
        <SubmitGalleryItem key={item.id} item={item}/>
      ))}
    </div>
    </div>
   

   </div>
  )
}

export default SubmitPicture