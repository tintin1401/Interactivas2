import Sidebar from '../layout/sidebar/Sidebar.jsx';
import ToggleSidebar from '../layout/sidebar/ToggleSidebar.jsx'
import { motion } from "framer-motion";
import { Details } from '../cards/Details.jsx';
import { useHome } from '../hooks/useHome.js';

export function ActivityDetails() {
    const { sidebarToggle, isSidebarVisible, setSidebarToggle } = useHome();
 
     return (
         <>
             <div className="grid">
                 <motion.div
                     initial={{ opacity: 0 }}
                     animate={{ opacity: isSidebarVisible ? 1 : 0 }}
                     transition={{ duration: 0.5 }}
                 >
                     <Sidebar sidebarToggle={sidebarToggle} />
                 </motion.div>
                 <ToggleSidebar sidebarToggle={sidebarToggle}
                     setSidebarToggle={setSidebarToggle} />
                 <div className="flex justify-center items-center min-h-screen bg-[#EFF6FE] lg:ml-64 mx-5">     
                    <Details />
                 </div>
             </div>
         </>
     );
 }