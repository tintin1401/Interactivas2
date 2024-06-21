import '../../index.css'
import useFetchSearch from '../hooks/useFetchSearch';
import { useLocation } from 'react-router-dom';
import { Schedule } from '../cards/Schedule.jsx';
import { useHome } from '../hooks/useHome.js';
import { motion } from "framer-motion";
import Sidebar from '../layout/sidebar/Sidebar.jsx';
import ToggleSidebar from '../layout/sidebar/ToggleSidebar.jsx'

export function SearchResults() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchTerm = queryParams.get('name');
    const { data, loading } = useFetchSearch(searchTerm);
    const { sidebarToggle, isSidebarVisible, isScheduleVisible, setSidebarToggle } = useHome();
    
    return (
        <>
             <div className="flex">
                 <motion.div
                     initial={{ opacity: 0 }}
                     animate={{ opacity: isSidebarVisible ? 1 : 0 }}
                     transition={{ duration: 0.5 }}
                 >
                     <Sidebar sidebarToggle={sidebarToggle} />
                 </motion.div>
                 <ToggleSidebar sidebarToggle={sidebarToggle}
                     setSidebarToggle={setSidebarToggle} />
                 <main className="lg:grid lg:justify-center bg-[#EFF6FE] content-center w-screen lg:ml-64 mb-10">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isScheduleVisible ? 1 : 0 }}
                        transition={{ duration: 0.5, delay: 2 }}
                    >
                    <h2 className="ff-main text-2xl font-bold text-center my-12 text-blue-600">Results</h2>
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        <div className={`mx-5 ${data && data.length === 1 ? '' : 'grid xl:grid-cols-2'} gap-5`}>
                            {data && data.length > 0 ? (
                                <Schedule activities={data} />
                            ) : (
                                <p className="text-lg font-semibold text-center mt-5">No results found</p>
                            )}
                        </div>
                    )}
                     </motion.div>
                </main>
             </div>
         </>

        
    );
}