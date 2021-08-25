import {useState, useEffect} from 'react'
import {useInView} from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import {GlobalConfig, ContactConfig} from '../InView/config'
import { isMobile } from 'react-device-detect'

const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const {inView, ref} = useInView({
        // rootMargin:'1000px'
    });
    const contactAnim = useAnimation()
    useEffect(()=>{
        console.log("haha" + inView);
        inView ? contactAnim.start("visible") : contactAnim.start("hidden")
    },[inView])

    const onBlurHandle = (e) => {
        let parent = e.target.parentElement
        if(e.target.value.trim() != ''){
            parent.classList.add('input-filled')
        } else {
            parent.classList.remove('input-filled')
        }
    }
    return(
        <div className={`contact-container cut-nav`}>
            <motion.div className="contact-left l-container"
                animate={contactAnim}
                initial='hidden'
                variants={{
                    hidden :{
                        // scaleX:.1,
                        x:'-20vw',
                        opacity:0
                    },
                    visible:{
                        x:'0',
                        opacity:1
                        // scaleX:1

                    }
                }}
                transition={{
                    duration:1
                }}
            >
                <div className="title" ref={ref}>
                    <span>Hi</span>
                    <span>You!!</span>
                </div>
                <div className="owner-text text-lg">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur exercitationem excepturi quo.
                </div>
            </motion.div>
            <div className="contact-right l-container border-style">
                <div className="get-container">
                    Get <span>in</span> <span>Touch</span>
                </div>
                <div className="form-container">
                    <div className="input-container">
                        <span className="contact-input">
                            <input type="text" className="contact-input-field" id="input-1" 
                                onBlur={onBlurHandle}
                            />
                            <label htmlFor="input-1" className="contact-input-label">
                                <span className="contact-label-content">Name</span>
                            </label>
                        </span>
                        <span className="contact-input">
                            <input type="text" className="contact-input-field" id="input-2" 
                                onBlur={onBlurHandle}
                            />
                            <label htmlFor="input-2" className="contact-input-label">
                                <span className="contact-label-content">E-mail</span>
                            </label>
                        </span>
                        <span className="contact-input message">
                            <textarea name="message" id="input-3" className="contact-input-field"
                                onBlur={onBlurHandle}
                            ></textarea>
                            <label htmlFor="input-3" className="contact-input-label">
                                <span className="contact-label-content">Message</span>
                            </label>
                        </span>
                    <button id="send-button" type="button">Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact