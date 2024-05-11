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
        { "id": 1, "image": "https://images.squarespace-cdn.com/content/v1/60794dbc8615125d3ad57026/adf94af6-7aab-4503-9569-527b9faec977/react1logo.png", "title": "Task", "date": "August 30, 2024", "event": "Event", "hour": "5:00 p.m.", "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quod earum, nemo amet sint?.","calender":"true" },
        { "id": 2, "image": "https://images.squarespace-cdn.com/content/v1/60794dbc8615125d3ad57026/adf94af6-7aab-4503-9569-527b9faec977/react1logo.png", "title": "Task", "date": "August 30, 2024", "event": "Event", "hour": "5:00 p.m.", "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quod earum, nemo amet sint?.","calender":"true" },
        { "id": 3, "image": "https://images.squarespace-cdn.com/content/v1/60794dbc8615125d3ad57026/adf94af6-7aab-4503-9569-527b9faec977/react1logo.png", "title": "Task", "date": "August 30, 2024", "event": "Event", "hour": "5:00 p.m.", "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quod earum, nemo amet sint?.","calender":"true" },
        { "id": 4, "image": "https://images.squarespace-cdn.com/content/v1/60794dbc8615125d3ad57026/adf94af6-7aab-4503-9569-527b9faec977/react1logo.png", "title": "Task", "date": "August 30, 2024", "event": "Event", "hour": "5:00 p.m.", "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quod earum, nemo amet sint?.","calender":"true" },

    ]

    return (
        <div className="flex md:h-screen bg-[#EFF6FE]">
            <Sidebar sidebarToggle={sidebarToggle} />
            <main className="lg:grid lg:justify-center content-center w-screen lg:ml-64">
                <div className="">
                    <ToggleSidebar sidebarToggle={sidebarToggle}
                        setSidebarToggle={setSidebarToggle} />

                    <section className="grid md:grid-cols-[auto_auto]  gap-8 mx-2 md:mx-8 mt-10">
                        <section className="grid gap-2 grid-rows-[auto] bg-white rounded-3xl px-6 pt-6 ">
                                <h1 className="text-left text-[2rem] font-bold text-blue-600 ">Today’s Schedule</h1>
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

                        <section className="grid bg-white rounded-3xl p-2 mb-4 md:p-6">
                            <div className=" lg:mt-[3rem]">
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
