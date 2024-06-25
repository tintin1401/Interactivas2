import { Schedule } from "../cards/Schedule.jsx";
import { Calendar } from "../calender/Calendar";
import { SelectedCourse } from "../calender/calendarFilters/SelectedCourse";
import { TagCategories } from "../calender/calendarFilters/TagCategories";
import Sidebar from '../layout/sidebar/Sidebar.jsx';
import ToggleSidebar from '../layout/sidebar/ToggleSidebar.jsx'
import  { useState, useEffect } from 'react';
import "../../index.css";
import { motion } from "framer-motion";
import { useHome } from '../hooks/useHome.js';
import useFetchData from "../hooks/useFetchData.js";
import { useUser } from '../../context/UserContext.jsx';
import { useNavigate } from 'react-router-dom';


/**
 * Renders the EventCardCta component, which displays a sidebar with a schedule and calendar.
 *
 * @return {JSX.Element} The rendered component.
 */
export function EventCardCta() {
    const { sidebarToggle, isSidebarVisible, isScheduleVisible, setSidebarToggle, isCalendarVisible } = useHome();
    const { user } = useUser();
    const navigate = useNavigate();
    const [value, setValue] = useState(0);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user || !user.id) {
            navigate('/landing');
        } else {
            const urltest = value === 0
                ? `http://localhost/calenderbackend/public/api/activities/${user.id}`
                : `http://localhost/calenderbackend/public/api/activities/findcourses/${value}`;
            fetchData(urltest);
        }
    }, [user, value, navigate]);

    const fetchData = async (url) => {
        setLoading(true);
        try {
            const response = await fetch(url);
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        setLoading(false);
    };

    const addEvent = (value) => {
        setValue(value);
        setLoading(true);
        const url = value === 0
            ? "http://localhost/calenderbackend/public/api/activities/all"
            : `http://localhost/calenderbackend/public/api/activities/findcourses/${value}`;
        fetchData(url);
    };

    const task = () => {
        const urltest ="http://localhost/calenderbackend/public/api/activities/"+user.id;
        fetchData(urltest);
    }
    const event = () => {
        console.log("event");
    }
    const pending = () => {
        console.log("pending");
    }
    const completed = () => {
        console.log("completed");
    }

    return (
        <div className="flex md:h-screen bg-[#EFF6FE]">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isSidebarVisible ? 1 : 0 }}
                transition={{ duration: 0.5 }}
            >
                <Sidebar sidebarToggle={sidebarToggle} />
            </motion.div>
            <main className="lg:grid lg:justify-center content-center w-screen lg:ml-64">
                <div>
                    <ToggleSidebar sidebarToggle={sidebarToggle}
                        setSidebarToggle={setSidebarToggle} />
                    <section className="grid md:grid-cols-[auto_auto]  gap-8 mx-2 md:mx-8 mt-10">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isScheduleVisible ? 1 : 0 }}
                            transition={{ duration: 0.5, delay: 1 }}
                        >
                            <section className="grid gap-2 grid-rows-[auto] bg-white rounded-3xl px-6 pt-6 pb-6">
                                <h2 className="text-left text-[2rem] font-bold text-blue-600 ">Today’s Schedule</h2>
                                <div className="flex gap-4 font-bold ff-main">
                                    <button className="hover:underline hover:decoration-4 cursor-pointer decoration-[#3262DE]" onClick={pending}>Pending</button>
                                    <button className="hover:underline hover:decoration-4 cursor-pointer decoration-[#3262DE]" onClick={completed}>Completed</button>
                                </div>
                                <div className="scroll scrollbar-thumb-orange-700 scrollbar-track-white overflow-y-scroll pr-5 lg:scroll-smooth lg:scrollbar-thin h-[65vh]">
                                    <section className="grid gap-4">
                                        {loading ? (
                                            <p value="">loading</p>
                                        ) : data.length === 0 ? (
                                            <p className="text-lg font-semibold mt-5 ml-10">No upcoming events</p>
                                        ) : (
                                            <Schedule activities={data} />
                                        )} 
                                    </section>
                                </div>
                            </section>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isCalendarVisible ? 1 : 0 }}
                            transition={{ duration: 0.5, delay: 2 }}
                        >
                            <section className="grid bg-white rounded-3xl p-2 mb-4 md:p-6">
                                <div className="lg:mt-[3rem]">
                                    <SelectedCourse addEvent={addEvent} />
                                    <TagCategories task={task} event={event} />
                                    <Calendar />
                                </div>
                            </section>
                        </motion.div>
                    </section>
                </div>
            </main>
        </div>

    );
}
