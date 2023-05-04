import React from 'react'
import { Fade } from "react-awesome-reveal";
import './Hero.css'

const Hero = () => {
  return (
    <div className='relative hero' id='hero'>
        <div className='text-center content'>
        <Fade cascade triggerOnce>
        <p className='text-orange-400 special text-6xl font-bold leading-snug'>Staff Appreciation Day 2023</p>
        <p className='text-white nicer text-xl italic pt-10 font-extrabold'>Valuing your commitment is our pleasure.</p>
        </Fade>https://github.com/Linus-Tay/STTelemedia-Event/edit/master/src/components/Hero.js
        </div>
    </div>
  )
}

export default Hero
