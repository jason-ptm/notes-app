import './SideVar.css';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion'

function SideVar(props) {

    const [sideVarToggle, setSideVarToggle] = React.useState(true)

    const navVariants = {
        hidden: {
            x: -100
        },
        visible: {
            x: 0,
            transition: {
                duration: .5,
                ease: 'linear',
                staggerChildren: .2,
                when:'beforeChildren'
            }
        }
    }
    const textVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                duration: .3
            }
        }
    }

    const iconVariants = {
        hidden: {
            y: -20,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: .8
            }
        }
    }

    return (
        <motion.nav
            variants={navVariants}
            initial='hidden'
            animate='visible'
            className={`SideVar${props.options.darkMode ? " dark" : ""}${sideVarToggle ? "" : " close"}`}>
            <div
                className="arrow-icon"
                onClick={() => setSideVarToggle(prevVal => !prevVal)}>
                <span className="icon"></span>
            </div>
            <AnimatePresence>
                <header className="header">
                    <div className="option">
                        <motion.h1
                            key="dsaghgf23"
                            variants={textVariants}
                            className='content'>
                            Notas
                        </motion.h1>
                        <motion.div
                            variants={iconVariants}
                            className="icon">
                            <i className="fa-solid fa-book"></i>
                        </motion.div>
                    </div>
                </header>
                <div className="options">
                    <div
                        className="option"
                        onClick={props.clickDarkMode}>
                        <motion.span
                            key="dsadsa"
                            variants={textVariants}
                            className="content">
                            {`Modo ${props.darkMode ? "claro" : "oscuro"}`}
                        </motion.span>
                        <motion.div
                            variants={iconVariants}
                            className="icon">
                            <div className="darkmode-toggle">
                                <div className="circle"></div>
                            </div>
                        </motion.div>
                    </div>
                    <div
                        className="option"
                        onClick={() => {
                            props.options.addCardWindow()
                            props.setCurrentCard({})
                        }}>
                        <motion.span
                            variants={textVariants}
                            className="content">
                            Agregar nota
                        </motion.span>
                        <motion.div
                            variants={iconVariants}
                            className="icon">
                            <i className="fa-solid fa-plus"></i>
                        </motion.div>
                    </div>
                </div>
                <motion.footer
                    variants={textVariants}
                    className="footer option">
                    <div className="content">
                        <p>Hecho por <br />Jason Solarte</p>
                    </div>
                    <div className="icon">
                        <i className=" fa-regular fa-copyright"></i>
                    </div>
                </motion.footer>
            </AnimatePresence>
        </motion.nav>
    )
}

export default SideVar