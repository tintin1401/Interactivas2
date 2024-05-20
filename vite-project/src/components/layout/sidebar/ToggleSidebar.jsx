import "../../../index.css";
/**
 * Renders a button that toggles the visibility of the sidebar when clicked.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {boolean} props.sidebarToggle - The current toggle state of the sidebar.
 * @param {function} props.setSidebarToggle - The function to update the toggle state of the sidebar.
 * @return {JSX.Element} - The rendered button component.
 */
const ToggleSidebar = ({sidebarToggle, setSidebarToggle}) =>{
    return(
        <button className="lg:hidden fixed top-9 right-10 z-50" onClick={() => setSidebarToggle(!sidebarToggle)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
        </button>
    )
}

export default ToggleSidebar