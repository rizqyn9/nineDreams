import Title from '../Title/Title'
import Nav from '../Nav/Nav'
import {motion, useElementScroll, useViewportScroll} from 'framer-motion'
import React, {useEffect, useRef} from 'react'
import useScroll from '../Scroll/Scroll'


const Header = () => {
    const {scrollX,scrollY, scrollDirection} = useScroll()

    return(
        <motion.div
            className={`header l-container ${scrollY > 100 ? "overlay" : ""}`}

        >
            <Title/>
            {scrollY}
            <Nav/>
        </motion.div>
    )
}

export default Header