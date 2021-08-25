
import Header from "../Header/Header"
import {useAtom} from 'jotai'
import {sizeScreen, deviceTarget} from '../Provider/Provider'
import {isBrowser, deviceDetect, deviceType, isMobile} from "react-device-detect";
import {
    useWindowSize,
    useWindowWidth,
    useWindowHeight,
  } from '@react-hook/window-size'
import { useEffect } from "react";
import {motion} from 'framer-motion'
import NavSide from "../Header/Nav-Side";



const Container = ({children, data}) => {
    const [useSizeScreen, setSizeScreen] = useAtom(sizeScreen)
    const [useDeviceType , setDeviceType ] = useAtom(deviceTarget)

    const [width, height] = useWindowSize()

    //Handling Device Type
    useEffect(()=> {
        if(!deviceType) return
        console.log(deviceType);
        setDeviceType(deviceType)
    }, [deviceType])

    // Handling Screen Size
    useEffect(() => {
        setSizeScreen(width)
    }, [width, height])
    
    return(
        <div className={`container ${isMobile ? "mobile" : " "}`}>
            <Header/>
            <NavSide/>
            {children}
        </div>
    )
}


export default Container