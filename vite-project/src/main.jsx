import React from 'react'
import ReactDOM from 'react-dom/client'

import { Card } from './Card.jsx'
import { Login } from './Login.jsx'
import { Register } from './register.jsx'
import { Calendar } from './Calendar.jsx'
import { Sidebar } from './sidebar.jsx'
import { ToggleSidebar } from './ToggleSidebar.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(

    <div class="flex h-screen">
        <Sidebar/>
        <main className='m-10'>
        <ToggleSidebar/>
        <Calendar/>
        </main>
    </div>
   


//Create by Taylor Duran Sibaja y Dana Valverde Cardenas 21/04/2024


 
)

