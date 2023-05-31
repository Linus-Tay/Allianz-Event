import React from 'react'
import { Fade } from "react-awesome-reveal";
import './Hero.css'
import Sad23 from './images/SAD23.png'
import backgroundVideo from './video/video.mp4'

const Hero = () => {
  return (
    <div className='' id='hero'>
      <video autoPlay loop muted src={backgroundVideo}/>
      <div className='content'>
        <Fade cascade triggerOnce>
          <img className='m-auto' src={Sad23} alt=''/>
        <p className='sttelemedia text-white nicer text-3xl md:text-4xl pt-4'><span className='px-2' style={{ backgroundColor: 'rgba(155,85,236,0.65)'}}>With a 2D1N Staycation!</span></p>
        </Fade>
        </div>
    </div>
  )
}

export default Hero
