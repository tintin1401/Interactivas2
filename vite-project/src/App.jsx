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
        { "id": 1, "image": "https://images.squarespace-cdn.com/content/v1/60794dbc8615125d3ad57026/adf94af6-7aab-4503-9569-527b9faec977/react1logo.png", "title": "Task", "date": "August 30, 2024", "event": "Event", "hour": "5:00 p.m.", "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quod earum, nemo amet sint?.",},
        { "id": 2, "image": "https://images.squarespace-cdn.com/content/v1/60794dbc8615125d3ad57026/adf94af6-7aab-4503-9569-527b9faec977/react1logo.png", "title": "Task", "date": "August 30, 2024", "event": "Event", "hour": "5:00 p.m.", "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quod earum, nemo amet sint?.", },
        { "id": 3, "image": "https://images.squarespace-cdn.com/content/v1/60794dbc8615125d3ad57026/adf94af6-7aab-4503-9569-527b9faec977/react1logo.png", "title": "Task", "date": "August 30, 2024", "event": "Event", "hour": "5:00 p.m.", "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quod earum, nemo amet sint?.",   
        },{ "id": 4, "image": "https://images.squarespace-cdn.com/content/v1/60794dbc8615125d3ad57026/adf94af6-7aab-4503-9569-527b9faec977/react1logo.png", "title": "Task", "date": "August 30, 2024", "event": "Event", "hour": "5:00 p.m.", "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quod earum, nemo amet sint?.",   
        },{ "id": 5, "image": "https://images.squarespace-cdn.com/content/v1/60794dbc8615125d3ad57026/adf94af6-7aab-4503-9569-527b9faec977/react1logo.png", "title": "Task", "date": "August 30, 2024", "event": "Event", "hour": "5:00 p.m.", "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quod earum, nemo amet sint?.",   
        },{ "id": 6, "image": "https://images.squarespace-cdn.com/content/v1/60794dbc8615125d3ad57026/adf94af6-7aab-4503-9569-527b9faec977/react1logo.png", "title": "Task", "date": "August 30, 2024", "event": "Event", "hour": "5:00 p.m.", "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quod earum, nemo amet sint?.",   
        },
    ]

    return(
        <div className="flex">
        <Sidebar sidebarToggle={sidebarToggle}/>
        <main className="lg:grid lg:justify-center bg-[#EFF6FE] content-center w-screen lg:ml-64">
            <div className="mt-10 ml-5 mr-5 mb-0">
            <ToggleSidebar sidebarToggle={sidebarToggle}
            setSidebarToggle={setSidebarToggle}/>
            <CtaContainer/>
            </div>
            <div className="ml-10">
            <h2 className="ff-main text-2xl font-bold pb-[1rem] pl-[1rem] pr-[1rem] pt-[1.5rem] md:pb-[0.5rem] md:pt-[1rem] m-0 text-blue-600">Statistics</h2>
            </div>
            <Index/>
            <h2 className="ff-main text-2xl font-bold pb-[1rem] px-[1rem] pt-[1.5rem] ml-10  text-blue-600">Events</h2>
            <div className="grid lg:grid-cols-[auto_auto] gap-5 md:mx-5">
            <Schedule items={events}/>
            </div>
        </main>
    </div>
    )
}

export default App