import React from 'react'
import {motion} from "framer-motion"
export default function Project() {
  return (
    <motion.div
    initial={{
      x: 1200
    }}
    animate={{
      x: 0
    }}
    transition={{
      duration:0.4, 
    }}
    >
      i am project
    </motion.div>
  )
}
