import React from 'react'
import ReactDOM from 'react-dom/client'
import { StepsContainer } from '../../containers/StepsContainer.jsx'
import { ContainerAboutUs } from '../../containers/ContainerAboutUs.jsx'
import { Footer } from '../../footer/Footer.jsx'
import logo from "../../../assets/imgs/logo-white.svg";
import AreaC from "../../../assets/imgs/Area-Contaduria-Privada11.jpg";
import { useInView, motion, useScroll } from "framer-motion";
import { useRef } from "react";

export function Landing() {

    const { scrollYProgress } = useScroll();

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
            <motion.div
                className="progress-bar"
                style={{ scaleX: scrollYProgress }}
            />
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
                                <a href="#">Login</a>
                            </motion.div>
                            <motion.div
                                className="inline-block bg-orange-500 text-white p-[0.40rem_1rem] rounded-md font-bold text-base w-1/2"
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            >
                                <a href="#">Get Started</a>
                            </motion.div>
                        </div>
                    </section>
                </section>
            </header>

            <main>
                <section className="bg-blue-900 lg:p-16 p-10">
                    <h2 className="text-white font-bold mb-[2rem] ff-main text-3xl">HOW TO USE</h2>
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(210px,_1fr))] gap-[2.75rem]">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.8,
                                delay: 1.5,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}
                        >
                            <StepsContainer stepNumber="1" title="First Step" description="Be a student at the University of Costa Rica" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.8,
                                delay: 2,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}
                        >
                            <StepsContainer stepNumber="2" title="Second Step" description="Be enrolled in at least one course of the semester" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.8,
                                delay: 2.5,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}
                        >
                            <StepsContainer stepNumber="3" title="Third Step" description="Register in the app and fill in the blanks" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.8,
                                delay: 3,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}
                        >
                            <StepsContainer stepNumber="4" title="Fourth Step" description="Enjoy the app and learn new topics" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.8,
                                delay: 3.5,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}
                        >
                            <StepsContainer stepNumber="5" title="Fifth Step" description="Enjoy the app and learn new topics" />
                        </motion.div>
                    </div>
                </section>

                <section className="bg-blue-950 grid grid-cols-1 lg:grid-cols-[auto_auto] lg:p-16 p-10 gap-8">
                    <div>
                        <img className="w-[100vw] h-[50vw] rounded-[1rem] lg:w-[30vw] lg:h-full" src={AreaC} alt="" />
                    </div>

                    <div>
                        <a className="text-orange-500 font-bold ff-main" href="">About us</a>
                        <h2 className="text-white font-bold text-3xl ff-main">More clarity and accountability</h2>
                        <p className="text-white ff-secondary">Connect strategic goals to the teams that help achieve them. See progress in real time, update stakeholders, and keep the company on track.</p>
                        <ContainerAboutUs title="Essential for organizing" description="A calendar app is essential for organizing both personal and professional commitments, increasing productivity and reducing stress by offering a clear view of responsibilities." icon="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                        <ContainerAboutUs title="Essential to remember important events" description="A calendar app is essential for remembering important events, ensuring that personal and professional commitments are not overlooked." icon="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
