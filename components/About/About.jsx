import {useInView} from 'react-intersection-observer'
import React,{useEffect, useState} from 'react'
import {useAnimation, motion, transform} from 'framer-motion'

const About = () => {
    const aboutAnim = useAnimation()
    const {ref: ref1, inView} = useInView({
        threshold:.5
    })

    useEffect(()=>{
        inView ? aboutAnim.start("visible") : aboutAnim.start("hidden")
    },[inView])

    return (
        <div className="cut-nav about-container "
        >
            <motion.div 
                className={`about-title-container`} 
                // ref={ref1}
                initial="hidden"
                animate={aboutAnim}
                transition={{
                    duration:1
                }}
                variants={{
                    hidden :{
                        opacity:0,
                        x:'10vw'
                    },
                    visible:{
                        x:'0',
                        opacity:1
                        
                    }
                }}
            >
                <div className="about-title" >
                    about 
                    <span ref={ref1}>
                         ninedreams
                    </span> 
                </div> 
            </motion.div>
            <div className="about-content-container">
                <div className="about-content content1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, iure.
                </div>
                <div className="about-content content3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, iure.
                </div>
                <div className="about-content content3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, iure.
                </div>
                <div className="about-content content4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, iure.
                </div>

            </div>
        </div>
    )
}

export default About