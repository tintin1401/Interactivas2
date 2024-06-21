import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { Landing } from './components/routes/Principal.jsx';
import { App } from "./App.jsx";
import { ChangePassword } from './components/profile/ChangePassword.jsx';
import { BrowserRouter } from 'react-router-dom'
import { Auth } from './components/routes/Auth.jsx';
import { UserProvider } from './context/UserContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <BrowserRouter>
            <UserProvider>
                <App/>
            </UserProvider>
        </BrowserRouter>
    </>
)
