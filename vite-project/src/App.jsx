import React, { useState } from 'react';
import ToggleSidebar from './ToggleSidebar.jsx'
import Sidebar from './sidebar.jsx'
import { Practice } from './Practice.jsx';
import { CtaContainer } from './CtaContainer.jsx'

function App(){
    const[sidebarToggle, setSidebarToggle] = useState(false)
    return(
        <div className="flex h-screen">
        <Sidebar sidebarToggle={sidebarToggle}/>
        <main className="m-10">
            <ToggleSidebar sidebarToggle={sidebarToggle}
            setSidebarToggle={setSidebarToggle}/>
            <CtaContainer/>
        </main>
    </div>
    )
}

export default App