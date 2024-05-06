import { Schedule } from "./Schedule"
import { Calendar } from "../calender/Calendar";
import { SelectedCourse } from "../calender/calendarFilters/SelectedCourse";
import { TagCategories } from "../calender/calendarFilters/TagCategories";
import Sidebar from '../layout/sidebar/Sidebar.jsx';
import ToggleSidebar from '../layout/sidebar/ToggleSidebar.jsx'
import React, { useState } from 'react';
import "../../index.css";

export function EventCardCta() {
    const [sidebarToggle, setSidebarToggle] = useState(false)
    const events = [
        { "id": 1, "image": "https://images.squarespace-cdn.com/content/v1/60794dbc8615125d3ad57026/adf94af6-7aab-4503-9569-527b9faec977/react1logo.png", "title": "Task", "date": "August 30, 2024", "event": "Event", "hour": "5:00 p.m.", "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quod earum, nemo amet sint?." }
    ]

    return (
        <div className="flex">
            <Sidebar sidebarToggle={sidebarToggle} />
            <main className="lg:grid lg:justify-center content-center w-screen lg:ml-64">
                <div className="">
                    <ToggleSidebar sidebarToggle={sidebarToggle}
                        setSidebarToggle={setSidebarToggle} />

                    <section className="grid lg:grid-cols-2 h-screen gap-4">
                        <section className="flex flex-col bg-white rounded-3xl">
                            <div className="flex text-[2rem] text-blue-600 h-[6rem] items-center font-black ff-main">
                                <h1 className="text-left ml-[2rem] lg:ml-[5rem]">Today’s Schedule</h1>
                            </div>
                            <div className="flex col-start-1 col-end-3 ml-[2rem] lg:col-start-2 lg:col-end-4 gap-4 lg:ml-[5rem] font-bold ff-main">
                                <h2 className="hover:underline hover:decoration-4 cursor-pointer decoration-[#3262DE]">Pending</h2>
                                <h2 className="hover:underline hover:decoration-4 cursor-pointer decoration-[#3262DE]">Completed</h2>
                            </div>
                            <div className="scroll scrollbar-thumb-orange-700 scrollbar-track-white overflow-y-scroll mb-8 lg:scroll-smooth lg:scrollbar-thin p-4 lg:p-10 h-[75vh]">
                                <section className="grid gap-4 lg:ml-[2rem]">
                                    <Schedule items={events} />
                                    <Schedule items={events} />
                                    <Schedule items={events} />
                                    <Schedule items={events} />
                                </section>
                            </div>
                        </section>

                        <section className="grid grid-cols-1 rounded-3xl">
                            <div className="p-8 lg:mt-[3rem]">
                                <SelectedCourse />
                                <TagCategories />
                                <Calendar />
                            </div>
                        </section>
                    </section>
                </div>



            </main>
        </div>

    );
}
