"use client";
import React from 'react'
import {motion} from 'framer-motion'
const TransitionsVariants={
    initial:{
        y:"100%",
        height:"100%"
    },
    animate:{
        y:"0%",
        height:"0%"
    },
    exit:{
        y:["0%","100%"],
        height:["0%","100%"]
    }
}
const Transitions = () => {
  return (
    <div>
        <motion.div className='fixed right-0 h-screen w-screen bottom-full z-[30] bg-[#231942]'
        variants={TransitionsVariants}
        initial="initial"
        exit="exit"
        animate="animate"
        transition={{delay:0.4 , duration:0.4 , ease:"easeInOut"}}
        />

        <motion.div className='fixed right-0 h-screen w-screen bottom-full z-[20] bg-[#4e3b99]'
        variants={TransitionsVariants}
        initial="initial"
        exit="exit"
        animate="animate"
        transition={{delay:0.4 , duration:0.6 , ease:"easeInOut"}}
        />

        <motion.div className='fixed right-0 h-screen w-screen bottom-full z-[10] bg-[#67589c]'
        variants={TransitionsVariants}
        initial="initial"
        exit="exit"
        animate="animate"
        transition={{delay:0.4 , duration:0.6 , ease:"easeInOut"}}
        />

       
    </div>
  )
}

export default Transitions