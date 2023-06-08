import React from 'react'
import { Fade } from "react-awesome-reveal";
import './Hero.css'
import Sad23 from './images/SAD23.png'
import backgroundVideo from './video/video.mp4'

const Hero = () => {
  return (
    <div className='' id='hero'>
        <div dangerouslySetInnerHTML={{ __html: `
        <video
          loop
          muted
          autoplay
          playsinline
          src="${backgroundVideo}"
        />,
      ` }}></div>
      <div className='content'>
        <Fade cascade triggerOnce>
          <img className='m-auto' src={Sad23} alt=''/>
        </Fade>
        </div>
    </div>
  )
}

export default Hero
