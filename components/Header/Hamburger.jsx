import { useRef, useEffect } from "react";
import { motion, useCycle } from "framer-motion";
import NavOverlay from '../Nav/NavOverlay'
import {useAtom} from 'jotai';
import {scroolTarget} from '../Provider/Provider';


const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    //   clipPath: `circle(100vw at 40px 100px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    }),
    closed: {
      clipPath: "circle(30px at 40px 40px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };
  

  
const Path = props => (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke="hsl(0, 0%, 18%)"
      strokeLinecap="round"
      {...props}
    />
  );
  
const MenuToggle = ({ toggle }) => (
    <button onClick={toggle} style={{zIndex:100}}>
        <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
            variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" }
            }}
        />
        <Path
            d="M 2 9.423 L 20 9.423"
            variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 }
            }}
            transition={{ duration: 0.1 }}
        />
        <Path
            variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" }
            }}
        />
        </svg>
    </button>
);

const Hamburger = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const [useScrollTarget, setScrollTarget] = useAtom(scroolTarget)

    const hamburgerHandler = () => {
      console.log("haha");
      toggleOpen()


    }
    useEffect(() => {
      if(!useScrollTarget) return;
      document.getElementById(useScrollTarget).scrollIntoView()


    }, [useScrollTarget])
    return (
        <motion.div
            initial={false}
            animate={isOpen ? "open" : "closed"}
            // custom={height}
            // ref={containerRef}
            className="hamburger-container"
            // variants={{
            //   open:{
            //     opacity:1
            //   },
            //   closed:{
            //     opacity:0
            //   }
            // }}

        >
            <motion.div className="background" variants={sidebar} />
            <MenuToggle toggle={() => toggleOpen()} />
            <NavOverlay 
              mode="on-overlay" 
              init={hamburgerHandler} 
              initial={false}
              animate={isOpen ? "open" : "closed"}
              variants={{
                open:{
                  opacity:1
                },
                closed:{
                  opacity:0
                }
              }}
              transition={{
                staggerChildren:.05
              }}
            />
        </motion.div>
    )
}

export default Hamburger