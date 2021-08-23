import {useState, useEffect} from 'react'
import {scroolTarget, asideNavState} from '../Provider/Provider'
import {motion, useAnimation} from 'framer-motion'
import {useAtom} from 'jotai'


const LinkNav = (props) => {
    const {children, link} = props
    const [useTarget , setTarget] = useAtom(scroolTarget)

    return (
        <motion.div className="nav-link border-style"
            onClick={() => { 
                setTarget(link) 
            }}
            // variants={{
            //     open: {
            //         x:0
            //     },
            //     closed :{
            //         x:'10rem'
            //     }
            // }}
        >
            {children}
        </motion.div>
    )
}

const NavSide = (props) => {
    const [useAsideState, setAsideState] = useAtom(asideNavState)

    return(
        <motion.div 
            className="nav-side-container"
            //   init={hamburgerHandler}
            initial={false}
            animate={useAsideState ? "open" : "closed"}
            // animate={"open"}
            variants={{
              open:{
                x:0,
                opacity:1
              },
              closed:{
                x:"-100vw",
                opacity:0
              }
            }}
            transition={{
              type:"tween",
              staggerChildren:.05
            }}
        >
            <div className="link-container">
                <LinkNav link="home">
                    Home
                </LinkNav>
                <LinkNav link="products">
                    Products
                </LinkNav>
                <LinkNav link="creative">
                    Creative
                </LinkNav>
                <LinkNav link="about">
                    About
                </LinkNav>
                <LinkNav link="contact">
                    Contact
                </LinkNav>
            </div>
        </motion.div>
    )
}

export default NavSide