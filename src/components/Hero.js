import React from 'react'
import { Fade } from "react-awesome-reveal";
import './Hero.css'
import Sad23 from './images/SAD23.png'

const Hero = () => {
  return (
    <div className='relative hero' id='hero'>
        <div className='text-center content'>
        <Fade cascade triggerOnce>
          <img className='m-auto' src={Sad23} alt=''/>
        <p className='text-black text-xl italic pt-10 font-bold'>Valuing your commitment is our pleasure.</p>
        </Fade>
        </div>
    </div>
  )
}

export default Hero
