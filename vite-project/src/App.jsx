import React, { useState } from 'react';
import ToggleSidebar from './components/layout/sidebar/ToggleSidebar.jsx'
import Sidebar from './components/layout/sidebar/Sidebar.jsx'
//import { Practice } from './Practice.jsx';
import { CtaContainer } from './components/containers/CtaContainer.jsx';
import { Index } from './/components/ui/landing/Index.jsx';
import { Schedule } from "./components/cards/Schedule"
function App(){
    const[sidebarToggle, setSidebarToggle] = useState(false)
    const events = [
        { "id": 1, "image": "https://images.squarespace-cdn.com/content/v1/60794dbc8615125d3ad57026/adf94af6-7aab-4503-9569-527b9faec977/react1logo.png", "title": "Task", "date": "August 30, 2024", "event": "Event", "hour": "5:00 p.m.", "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quod earum, nemo amet sint?."}
    ]

    return(
        <div className="flex">
        <Sidebar sidebarToggle={sidebarToggle}/>
        <main className="lg:grid lg:justify-center content-center w-screen">
            <div className="mt-10 ml-5 mr-5 mb-0">
            <ToggleSidebar sidebarToggle={sidebarToggle}
            setSidebarToggle={setSidebarToggle}/>
            <CtaContainer/>
            </div>
            <div className="md:w-[min(72vw,_90vw)] ml-10 mr-10">
            <h1 className="text-2xl font-bold pb-[1rem] pl-[1rem] pr-[1rem] pt-[1.5rem] md:pb-[0.5rem] md:pt-[1rem] m-0 text-blue-600">Statistics</h1>
            <Index/>
            </div>
            <h1 className="text-2xl font-bold pb-[1rem] pl-[1rem] pr-[1rem] pt-[1.5rem] ml-10 mr-0 mb-0 text-blue-600">Events</h1>
            <div className="flex lg:flex-row flex-col gap-5 mb-10 ml-10 mr-10 w-[min(72vw,_90vw)]">
            <Schedule items={events}/>
            <Schedule items={events}/>
            </div>
        </main>
    </div>
    )
}

export default App