import React from 'react'
import logo from '../../../assets/imgs/logo-white.svg'
import { useInView, motion} from "framer-motion";
import { useRef } from "react";
import { NavLink } from 'react-router-dom'
export function HeaderLanding() {
    

    function AnimatedTitle({ children }) {
        const ref = useRef(null);
        const isInView = useInView(ref, { once: true });

        return (
            <h1
                ref={ref}
                style={{
                    transform: isInView ? "none" : "translateX(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}
            >
                {children}
            </h1>
        );
    }

  
    
    return (

        
        <div>
            <header className="bg-[url('./assets/imgs/bg-register.png')] bg-cover bg-center text-white h-[35rem] lg:p-16 p-10">

                <section className="justify-center">
                    <img className="max-w-40 h-auto" src={logo} alt="logo" />
                    <AnimatedTitle>
                        <h1 className="mt-20 lg:text-6xl text-5xl font-black ff-main">A smarter way to work</h1>
                    </AnimatedTitle>
                    <section>
                        <p className="text-xl mt-8 leading-6 max-w-[38ch] ff-secondary">With Cronos, you can drive clarity and impact at scale by connecting work and workflows to company-wide goals</p>

                        <div className="mt-8 flex justify-between items-center text-center max-w-[380px] ff-main gap-8">
                            <motion.div
                                className="inline-block bg-orange-500 text-white p-[0.40rem_1rem] rounded-md font-bold text-base w-1/2"
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            >
                                <NavLink to="/auth">Login</NavLink>
                            </motion.div>
                            <motion.div
                                className="inline-block bg-orange-500 text-white p-[0.40rem_1rem] rounded-md font-bold text-base w-1/2"
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            >
                                <NavLink to="/auth">Get Started</NavLink>
                            </motion.div>
                        </div>
                    </section>
                </section>
            </header>
        </div>
    )
}