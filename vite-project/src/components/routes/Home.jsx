import React, { useState, useEffect } from 'react';
import ToggleSidebar from '../layout/sidebar/ToggleSidebar.jsx';
import Sidebar from '../layout/sidebar/Sidebar.jsx';
import { CtaContainer } from '../containers/CtaContainer.jsx'; 
import { Index } from '../ui/landing/Index.jsx'; 
import { Schedule } from '../cards/Schedule.jsx'; 
import { motion } from "framer-motion";
import { useHome } from '../hooks/useHome.js';

/**
 * Renders the Home component.
 *
 * @return {JSX.Element} The rendered Home component.
 */
function Home() {
    const { sidebarToggle, isSidebarVisible, isCtaVisible, isIndexVisible, isScheduleVisible, setSidebarToggle } = useHome();

    const events = [
        { "id": 1, "image": "https://images.squarespace-cdn.com/content/v1/60794dbc8615125d3ad57026/adf94af6-7aab-4503-9569-527b9faec977/react1logo.png", "title": "Task", "date": "August 30, 2024", "event": "Event", "hour": "5:00 p.m.", "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quod earum, nemo amet sint?.", },
        { "id": 2, "image": "https://images.squarespace-cdn.com/content/v1/60794dbc8615125d3ad57026/adf94af6-7aab-4503-9569-527b9faec977/react1logo.png", "title": "Task", "date": "August 30, 2024", "event": "Event", "hour": "5:00 p.m.", "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quod earum, nemo amet sint?.", },
        {
            "id": 3, "image": "https://images.squarespace-cdn.com/content/v1/60794dbc8615125d3ad57026/adf94af6-7aab-4503-9569-527b9faec977/react1logo.png", "title": "Task", "date": "August 30, 2024", "event": "Event", "hour": "5:00 p.m.", "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quod earum, nemo amet sint?.",
        }, {
            "id": 4, "image": "https://images.squarespace-cdn.com/content/v1/60794dbc8615125d3ad57026/adf94af6-7aab-4503-9569-527b9faec977/react1logo.png", "title": "Task", "date": "August 30, 2024", "event": "Event", "hour": "5:00 p.m.", "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quod earum, nemo amet sint?.",
        }, {
            "id": 5, "image": "https://images.squarespace-cdn.com/content/v1/60794dbc8615125d3ad57026/adf94af6-7aab-4503-9569-527b9faec977/react1logo.png", "title": "Task", "date": "August 30, 2024", "event": "Event", "hour": "5:00 p.m.", "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quod earum, nemo amet sint?.",
        }, {
            "id": 6, "image": "https://images.squarespace-cdn.com/content/v1/60794dbc8615125d3ad57026/adf94af6-7aab-4503-9569-527b9faec977/react1logo.png", "title": "Task", "date": "August 30, 2024", "event": "Event", "hour": "5:00 p.m.", "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quod earum, nemo amet sint?.",
        },
    ]

    return (
        <div className="flex">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isSidebarVisible ? 1 : 0 }}
                transition={{ duration: 0.5 }}
            >
                <Sidebar sidebarToggle={sidebarToggle} />
            </motion.div>
            <main className="lg:grid lg:justify-center bg-[#EFF6FE] content-center w-screen lg:ml-64 mb-10">
                <div className="mt-10 ml-5 mr-5 mb-0">
                    <ToggleSidebar sidebarToggle={sidebarToggle}
                        setSidebarToggle={setSidebarToggle} />
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isCtaVisible ? 1 : 0 }}
                        transition={{ duration: 0.5, delay: 1 }}
                    >
                        <CtaContainer />
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isIndexVisible ? 1 : 0 }}
                    transition={{ duration: 0.5, delay: 2 }}
                >
                    <div className="ml-10">
                        <h2 className="ff-main text-2xl font-bold pb-[1rem] pl-[1rem] pr-[1rem] pt-[1.5rem] md:pb-[0.5rem] md:pt-[1rem] m-0 text-blue-600">Statistics</h2>
                    </div>
                    <Index />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isScheduleVisible ? 1 : 0 }}
                    transition={{ duration: 0.5, delay: 3 }}
                >
                    {/*<ScheduleContainer />*/}
                    <h2 className="ff-main text-2xl font-bold pb-[1rem] px-[1rem] pt-[1.5rem] ml-10  text-blue-600">Events</h2>
                    <div className="grid xl:grid-cols-[auto_auto] gap-5 mx-5">
                        <Schedule items={events} />
                    </div>
                </motion.div>
            </main>
        </div>
    )
}

export default Home