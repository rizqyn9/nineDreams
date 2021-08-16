import React from 'react'
import {sizeScreen, deviceTarget} from '../Provider/Provider'
import {motion} from 'framer-motion'
import {scroolTarget} from '../Provider/Provider'
import {useAtom} from 'jotai';

const LinkNav = (props) => {
    const {children, link} = props
    const [useTarget , setTarget] = useAtom(scroolTarget)

    return (
        <motion.div className="nav-link border-style"
            onClick={() => { 
                setTarget(link) 
                props.parent()
            }}
            variants={{
                open: {
                    x:0
                },
                closed :{
                    x:'10rem'
                }
            }}
        >
            {children}
        </motion.div>
    )
}

const NavOverlay = (props) => {
    const {mode} = props
    const [useSizeScreen, setSizeScreen] = useAtom(sizeScreen)
    const [useDeviceTarget, setDeviceTarget] = useAtom(deviceTarget)

    const parent = () => {
        props.init()
    }
    return(
        <motion.div className={`container-nav-link ${mode}`}
            {...props}
        >
            <LinkNav link="home" parent={parent}>
                Home
            </LinkNav>
            <LinkNav link="products" parent={parent}>
                Products
            </LinkNav>
            <LinkNav link="creative" parent={parent}>
                Creative
            </LinkNav>
            <LinkNav link="about" parent={parent}>
                About
            </LinkNav>
            <LinkNav link="contact" parent={parent}>
                Contact
            </LinkNav>
        </motion.div>
    )
}

export default NavOverlay