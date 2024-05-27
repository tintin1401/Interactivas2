import { Schedule } from "../cards/Schedule.jsx";
import { Calendar } from "../calender/Calendar";
import { SelectedCourse } from "../calender/calendarFilters/SelectedCourse";
import { TagCategories } from "../calender/calendarFilters/TagCategories";
import Sidebar from '../layout/sidebar/Sidebar.jsx';
import ToggleSidebar from '../layout/sidebar/ToggleSidebar.jsx'
import React, { useState, useEffect } from 'react';
import "../../index.css";
import { motion } from "framer-motion";
import { useHome } from '../hooks/useHome.js';

/**
 * Renders the EventCardCta component, which displays a sidebar with a schedule and calendar.
 *
 * @return {JSX.Element} The rendered component.
 */
export function EventCardCta() {
    const { sidebarToggle, isSidebarVisible, isScheduleVisible, setSidebarToggle, isCalendarVisible } = useHome();

    const events = [
        { "id": 1, "image": "https://images.squarespace-cdn.com/content/v1/60794dbc8615125d3ad57026/adf94af6-7aab-4503-9569-527b9faec977/react1logo.png", "title": "Task", "date": "August 30, 2024", "event": "Event", "hour": "5:00 p.m.", "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quod earum, nemo amet sint?.", "calender": "true" },
        { "id": 2, "image": "https://images.squarespace-cdn.com/content/v1/60794dbc8615125d3ad57026/adf94af6-7aab-4503-9569-527b9faec977/react1logo.png", "title": "Task", "date": "August 30, 2024", "event": "Event", "hour": "5:00 p.m.", "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quod earum, nemo amet sint?.", "calender": "true" },
        { "id": 3, "image": "https://images.squarespace-cdn.com/content/v1/60794dbc8615125d3ad57026/adf94af6-7aab-4503-9569-527b9faec977/react1logo.png", "title": "Task", "date": "August 30, 2024", "event": "Event", "hour": "5:00 p.m.", "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quod earum, nemo amet sint?.", "calender": "true" },
        { "id": 4, "image": "https://images.squarespace-cdn.com/content/v1/60794dbc8615125d3ad57026/adf94af6-7aab-4503-9569-527b9faec977/react1logo.png", "title": "Task", "date": "August 30, 2024", "event": "Event", "hour": "5:00 p.m.", "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quod earum, nemo amet sint?.", "calender": "true" },
    ]

    return (
        <div className="flex md:h-screen bg-[#EFF6FE]">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isSidebarVisible ? 1 : 0 }}
                transition={{ duration: 0.5 }}
            >
                <Sidebar sidebarToggle={sidebarToggle} />
            </motion.div>
            <main className="lg:grid lg:justify-center content-center w-screen lg:ml-64">
                <div>
                    <ToggleSidebar sidebarToggle={sidebarToggle}
                        setSidebarToggle={setSidebarToggle} />
                    <section className="grid md:grid-cols-[auto_auto]  gap-8 mx-2 md:mx-8 mt-10">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isScheduleVisible ? 1 : 0 }}
                            transition={{ duration: 0.5, delay: 1 }}
                        >
                            <section className="grid gap-2 grid-rows-[auto] bg-white rounded-3xl px-6 pt-6 pb-6">
                                <h2 className="text-left text-[2rem] font-bold text-blue-600 ">Today’s Schedule</h2>
                                <div className="flex gap-4 font-bold ff-main">
                                    <h2 className="hover:underline hover:decoration-4 cursor-pointer decoration-[#3262DE]">Pending</h2>
                                    <h2 className="hover:underline hover:decoration-4 cursor-pointer decoration-[#3262DE]">Completed</h2>
                                </div>
                                <div className="scroll scrollbar-thumb-orange-700 scrollbar-track-white overflow-y-scroll pr-5 lg:scroll-smooth lg:scrollbar-thin h-[65vh]">
                                    <section className="grid gap-4">
                                        <Schedule items={events} />
                                    </section>
                                </div>
                            </section>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isCalendarVisible ? 1 : 0 }}
                            transition={{ duration: 0.5, delay: 2 }}
                        >
                            <section className="grid bg-white rounded-3xl p-2 mb-4 md:p-6">
                                <div className="lg:mt-[3rem]">
                                    <SelectedCourse />
                                    <TagCategories />
                                    <Calendar />
                                </div>
                            </section>
                        </motion.div>
                    </section>
                </div>
            </main>
        </div>

    );
}
