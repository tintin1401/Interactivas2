import React, { useState, useEffect } from 'react';
import ToggleSidebar from '../layout/sidebar/ToggleSidebar.jsx';
import Sidebar from '../layout/sidebar/Sidebar.jsx';
import { CtaContainer } from '../containers/CtaContainer.jsx';
import { Index } from '../ui/landing/Index.jsx';
import { Schedule } from '../cards/Schedule.jsx';
import { motion } from "framer-motion";
import { useHome } from '../hooks/useHome.js';
import useFetchData from "../hooks/useFetchData.js";
import { useUser } from '../../context/UserContext.jsx';

/**
 * Renders the Home component.
 *
 * @return {JSX.Element} The rendered Home component.
 */
function Home() {
    const { sidebarToggle, isSidebarVisible, isCtaVisible, isIndexVisible, isScheduleVisible, setSidebarToggle } = useHome();
    const { user } = useUser();
    console.log(user.id);
    const [value, setValue] = useState(0);
    const [url, setUrl] = useState("http://localhost/calenderbackend/public/api/activities/"+user.id);
    const urltest = value === 0
        ? "http://localhost/calenderbackend/public/api/activities/all"
        : `http://localhost/calenderbackend/public/api/activities/findcourses/${value}`;
    setUrl
    const { data: activities, loading: loadingActivities } = useFetchData(url);
    /*const { data: tasksPerDay, loading: loadingTasksPerDay } = useFetchData("http://localhost/backend-Actualizado8/calenderbackend/public/api/activities/tasks/completed-per-day");*/
    const { data: tasksPerWeek, loading: loadingTasksPerWeek } = useFetchData("http://localhost/calenderbackend/public/api/activities/tasks/completed-per-week");

    useEffect(() => {
        addEvent(value);

    }, []);


    const addEvent = (value) => {

        setValue(value);
    };


   


    return (
        <div className="flex">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isSidebarVisible ? 1 : 0 }}
                transition={{ duration: 0.5 }}
            >
                <Sidebar sidebarToggle={sidebarToggle} />
            </motion.div>
            <main className="lg:grid lg:justify-center bg-[#EFF6FE] content-center w-screen lg:ml-64 mb-10">
                <div className="mt-10 ml-5 mr-5 mb-0">
                    <ToggleSidebar sidebarToggle={sidebarToggle}
                        setSidebarToggle={setSidebarToggle} />
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isCtaVisible ? 1 : 0 }}
                        transition={{ duration: 0.5, delay: 1 }}
                    >
                        <CtaContainer />
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isIndexVisible ? 1 : 0 }}
                    transition={{ duration: 0.5, delay: 2 }}
                >
                    <div className="ml-10">
                        <h2 className="ff-main text-2xl font-bold pb-[1rem] pl-[1rem] pr-[1rem] pt-[1.5rem] md:pb-[0.5rem] md:pt-[1rem] m-0 text-blue-600">Statistics</h2>
                    </div>
                    <Index tasksPerWeek={tasksPerWeek} loadingTasksPerWeek={loadingTasksPerWeek} />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isScheduleVisible ? 1 : 0 }}
                    transition={{ duration: 0.5, delay: 3 }}
                >
                    <h2 className="ff-main text-2xl font-bold pb-[1rem] px-[1rem] pt-[1.5rem] ml-10  text-blue-600">Events</h2>
                    <div className="grid xl:grid-cols-[repeat(2,minmax(0,1fr))] gap-5 mx-5">
                        {loadingActivities ? (
                            <p value="">loading</p>
                        ) : (
                            <Schedule activities={activities} />
                        )}
                    </div>
                </motion.div>
            </main>
        </div>
    );
}

export default Home