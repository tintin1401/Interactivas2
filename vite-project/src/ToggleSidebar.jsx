import './index.css'
const ToggleSidebar = ({sidebarToggle, setSidebarToggle}) =>{
    return(
        <button className="md:hidden fixed top-9 right-10 z-50" onClick={() => setSidebarToggle(!sidebarToggle)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
        </button>
    )
}

export default ToggleSidebar