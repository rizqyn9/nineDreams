import { useState } from "react"
import {motion} from 'framer-motion'
import { useEffect } from "react/cjs/react.development"


const Hamburger = (props) => {
    const {style} = props
    const [isOpen, setOpen] = useState(false)
    const sidebar = {
        open: (height = 1000) => ({
          clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
          background: "white",
          transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
          }
        }),
        closed: {
          clipPath: "circle(30px at 40px 40px)",
          background : "red",
          transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
          }
        }
      };

      useEffect(() => {
          console.log(isOpen);
      }, [isOpen])
      
    return(
        <motion.div
            style={style}
            className="hamburger-container"
            initial={"closed"}
            animate={isOpen ? "open" : "closed"}
        >
            <motion.div variants={sidebar} className="background"/>
            <div 
                id="nav-icon2" 
                onClick={() => setOpen(!isOpen)}
                className={`${isOpen?'open' : ''}`}
            >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </motion.div>
  
    )
}

export default Hamburger