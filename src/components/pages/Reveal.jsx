import React, { useRef,  useEffect } from 'react'
import { motion, useAnimation, useInView } from "framer-motion"
export default function Reveal({ children }) {

    const Ref = useRef(null)
    const isInView = useInView(Ref,{once:false})
    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
    },[isInView,mainControls])

    return (
        <div ref={Ref} style={{overflow:"hidden"}} >
            <motion.div
                variants={{
                    hidden:{opacity: 0,y:75},
                    visible: { opacity:1 , y:0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{duration:0.5 , delay:0.25}}
            >
                {children}
            </motion.div>
        </div>
    )
}
