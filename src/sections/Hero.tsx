'use client'

import { Button } from '@/components/Button'
import React from 'react'
import {motion} from 'framer-motion';

function Hero() {
  return (
    <div className='hero'>
     <motion.h1
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{
            duration:0.3,
            ease:"easeInOut"
        }}
        className="hero-title" >
            Hi my name is
        </motion.h1>

      <motion.h2
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{
          duration:0.3,
          ease:"easeInOut",
          delay:0.3
      }}
       className="hero-title-large">Kenneth Baah Danso</motion.h2>

      <motion.h1
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{
            duration:0.3,
            ease:"easeInOut",
            delay:0.8
        }} className="hero-title-large hero-title-sub">
        I Craft thing for the web
      </motion.h1>


      <p className="hero-text">
        a passionate full-stack developer dedicated to crafting seamless and dynamic web experiences. With a keen eye for detail and a love for coding, I bring creativity and precision to every project I undertake 
      </p>
      <div>
        <Button text="Check out my projects" link='#'/>
      </div>
    </div>
  )
}

export default Hero