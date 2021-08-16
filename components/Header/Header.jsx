import Title from '../Title/Title'
import Nav from '../Nav/Nav'
import {motion, useElementScroll, useViewportScroll} from 'framer-motion'
import React, {useEffect, useRef} from 'react'
import useScroll from '../Scroll/Scroll'
import {useAtom} from 'jotai'
import {sizeScreen, deviceTarget, scroolTarget} from '../Provider/Provider'
import Hamburger from './Hamburger'


const Header = () => {
    const {scrollX,scrollY, scrollDirection} = useScroll()
    const [useSizeScreen, setSizeScreen] = useAtom(sizeScreen)
    const [useDeviceTarget, setDeviceTarget] = useAtom(deviceTarget)

    useEffect(()=> {
        if(!useDeviceTarget) return
        // console.log(`==== ${useDeviceTarget}`);

    },[useDeviceTarget])

    return(
        <motion.div
            className={`header l-container ${scrollY > 50 ? "overlay" : ""}`}
        >
            <Title/>
            {/* {scrollY} */}
            {/* {useSizeScreen} */}
            {/* {`${useDeviceTarget}`} */}
            {( useSizeScreen <= 1200 ) ? <Hamburger /> : <Nav />}

            
        </motion.div>
    )
}

export default Header