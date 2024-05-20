import React from 'react'
import { Footer } from '../footer/Footer.jsx'
import { motion, useScroll } from "framer-motion";
import { HeaderLanding } from '../ui/landing/HeaderLandig.jsx'
import { CardLanding } from '../ui/landing/CardLanding.jsx'
import { AboutLanding } from '../ui/landing/AboutLanding.jsx'

/**
 * Renders the landing page component.
 *
 * @return {JSX.Element} The rendered landing page component.
 */
export function Landing() {
    const { scrollYProgress } = useScroll();
    return (
        <div>
            <motion.div
                className="progress-bar"
                style={{ scaleX: scrollYProgress }}
            />
            <HeaderLanding/>
            <main>
                <CardLanding/>
                <AboutLanding/>
            </main>
            <Footer />
        </div>
    )
}
