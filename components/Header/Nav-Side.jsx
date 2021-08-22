import {useState} from 'react'
import {scroolTarget} from '../Provider/Provider'
import {motion} from 'framer-motion'
import {useAtom} from 'jotai'


const LinkNav = (props) => {
    const {children, link} = props
    const [useTarget , setTarget] = useAtom(scroolTarget)

    return (
        <motion.div className="nav-link border-style"
            onClick={() => { 
                setTarget(link) 
                props.parent()
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

    const parent = () => {
        props.init()
    }

    return(
        <motion.div 
            className="nav-side-container"
            {...props}
            
        >
            <div className="link-container">
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
            </div>
        </motion.div>
    )
}

export default NavSide