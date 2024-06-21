import "../../../index.css";
import logo from "../../../assets/imgs/logo-white.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

/**
 * Renders the sidebar component.
 *
 * @param {object} sidebarToggle - A boolean value indicating whether the sidebar is toggled or not.
 * @return {JSX.Element} The rendered sidebar component.
 */
const Sidebar = ({sidebarToggle}) =>{
  const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchTerm) {
            navigate(`/search-results?name=${searchTerm}`);
        }
    };

    return(
        <aside className={`w-64 bg-blue-900 text-white ${sidebarToggle? '' : 'hidden'} sd:block fixed inset-y-0 z-50 ff-main`}>
          <div className='flex items-center justify-center h-16 m-10'>
            <img className='max-w-40 h-auto' src={logo} alt="logo"/>
          </div>

          <div className='flex items-center justify-center m-10'>
            <NavLink to="/profile">
                <img className='block rounded-[50%] w-20 object-cover' src="https://randomuser.me/api/portraits/women/31.jpg" alt="User Profile"/>
            </NavLink>
          </div>

          <nav className='m-10'>
            <ul className='text-lg'>

              <li><NavLink to="/" className='flex py-5 px-4'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='w-6 h-6 mr-4'>
                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
              </svg>
               Home</NavLink></li>

               <li id="task-dropdown" className='relative'>
                <a href="#" className='flex pt-5 pb-3 px-4'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='w-6 h-6 mr-4'>
                    <path fillRule="evenodd" d="M10.5 3A1.501 1.501 0 0 0 9 4.5h6A1.5 1.5 0 0 0 13.5 3h-3Zm-2.693.178A3 3 0 0 1 10.5 1.5h3a3 3 0 0 1 2.694 1.678c.497.042.992.092 1.486.15 1.497.173 2.57 1.46 2.57 2.929V19.5a3 3 0 0 1-3 3H6.75a3 3 0 0 1-3-3V6.257c0-1.47 1.073-2.756 2.57-2.93.493-.057.989-.107 1.487-.15Z" clipRule="evenodd" />
                  </svg>
                  Task
                </a>
                <div id="task-dropdown-content" className='hidden'>
                  <a href="#" className='text-sm block py-2 pl-14'>All Tasks</a>
                  <a href="#" className='text-sm block py-2 pl-14'>New Tasks</a>
                  <a href="#" className='text-sm block py-2 pl-14'>Today Tasks</a>
                </div>
              </li>

              <li><NavLink to="/calender" className='flex py-5 px-4'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='w-6 h-6 mr-4'>
                <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
                </svg>
                Calender</NavLink></li>
            </ul>
          </nav>

            <form className='bg-white text-black text-lg flex rounded-2xl px-4 m-10' onSubmit={handleSearchSubmit}>
              <input className="border-none outline-none p-[.5rem] w-full" type="text" placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
              <button className="bg-[url('./assets/imgs/search.svg')] bg-no-repeat bg-center p-[.60rem_1.10rem]" type="submit"></button>
            </form>

            <nav className="mx-10 mb-10 mt-20  border-t-2 border-t-stone-50">
                <NavLink to="/landing" className="flex py-5 px-4 text-lg"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                </svg>

                Log out</NavLink>
            </nav>
        </aside>
    )
}
export default Sidebar;