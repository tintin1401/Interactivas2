import React from 'react'
import ReactDOM from 'react-dom/client'
import { StepsContainer } from '../../containers/StepsContainer.jsx'
import { motion, useScroll } from "framer-motion";

/**
 * Renders a card component for the landing page with a title and a list of steps.
 *
 * @return {JSX.Element} The rendered card component.
 */
export function CardLanding() {
    return (
        <div>
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

        </div>
    )
}