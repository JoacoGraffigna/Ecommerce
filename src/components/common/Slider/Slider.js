import React from 'react'
import "./Slider.css"
import acer from "./fotos_slider/acer.png"
import appleImage from "./fotos_slider/apple.png"
import asus from "./fotos_slider/asus.png"
import corsair from "./fotos_slider/corsair.png"
import dell from "./fotos_slider/dell.png"
import hp from "./fotos_slider/hp.png"
import HyperX from "./fotos_slider/HyperX-logo.png"
import kingston from "./fotos_slider/kingston.png"
import lenovo from "./fotos_slider/lenovo.png"
import msi from "./fotos_slider/msi.png"
import toshiba from "./fotos_slider/Toshiba.png"


const Slider = () => {
  return (
    <div className='padre'>
    <div className="slider">
       <div className='slide-track'>
          <div className='slide'>
          <img src={acer} alt=''/>
          </div>
          <div className='slide'>
          <img src={appleImage} alt=''/>
          </div>
          <div className='slide'>
          <img src={asus} alt=''/>
          </div>
          <div className='slide'>
          <img src={corsair} alt=''/>
          </div>
          <div className='slide'>
          <img src={dell} alt=''/>
          </div>
          <div className='slide'>
          <img src={hp}alt=''/>
          </div>
          <div className='slide'>
          <img src={HyperX} alt=''/>
          </div>
          <div className='slide'>
          <img src={kingston} alt=''/>
          </div>
          <div className='slide'>
          <img src={lenovo} alt=''/>
          </div>
          <div className='slide'>
          <img src={msi} alt=''/>
          </div>
          <div className='slide'>
          <img src={toshiba} alt=''/>
          </div>
          <div className='slide'>
          <img src={acer} alt=''/>
          </div>
          <div className='slide'>
          <img src={appleImage} alt=''/>
          </div>
          <div className='slide'>
          <img src={asus} alt=''/>
          </div>
          <div className='slide'>
          <img src={corsair} alt=''/>
          </div>
       </div>
    </div>
    </div>
  )
}

export default Slider
