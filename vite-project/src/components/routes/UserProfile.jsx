import React, { useState, useEffect } from 'react';
import "../../index.css";
import Sidebar from '../layout/sidebar/Sidebar.jsx';
import ToggleSidebar from '../layout/sidebar/ToggleSidebar.jsx'
import { motion } from "framer-motion";
export function UserProfile() {
    const [sidebarToggle, setSidebarToggle] = useState(false);
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const [isProfileVisible, setIsProfileVisible] = useState(false);
    useEffect(() => {
        const sidebarTimer = setTimeout(() => {
            setIsSidebarVisible(true);
        }, 500);
        const profileTimer = setTimeout(() => {
            setIsProfileVisible(true);
        }, 500);

        return () => {
            clearTimeout(sidebarTimer);
            clearTimeout(profileTimer);
        };
    }, []);

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
                <div className="flex justify-center items-center min-h-screen bg-[#EFF6FE] lg:ml-64">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isProfileVisible ? 1 : 0 }}
                        transition={{ duration: 0.5, delay: 1 }}
                    >
                        <div className="bg-white rounded-3xl lg:pl-8 lg:pr-8">
                            <div className="grid justify-center m-4">
                                <form>
                                    <h1 className='font-bold text-blue-700 text-3xl mb-2'>Account Settings</h1>
                                    <div className="flex items-center gap-4 mb-8">
                                        <img className='block rounded-[50%] w-20' src="https://randomuser.me/api/portraits/women/31.jpg" alt="User Profile" />
                                        <p className='text-md font-medium'>User Name</p>
                                    </div>
                                    <div className="flex flex-col gap-6 mb-1 md:flex-row">
                                        <div className="">
                                            <label htmlFor="fullName" className="block mb-1 text-sm font-medium text-gray-900">Full name</label>
                                            <input type="fullName" id="fullName" className="border-2 border-blue-700 rounded-md md:w-[20rem] w-full p-2" placeholder="Full name" />
                                        </div>

                                        <div className="mb-4">
                                            <label htmlFor="carnet" className="block mb-1 text-sm font-medium text-gray-900">Carnet</label>
                                            <input type="carnet" id="carnet" className="border-2 border-blue-700 rounded-md md:w-[20rem] w-full p-2" placeholder="Carnet" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-6 mb-2 md:flex-row">
                                        <div className="">
                                            <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-900">Email</label>
                                            <input type="email" id="email" className="border-2 border-blue-700 rounded-md md:w-[20rem] w-full p-2" placeholder="@gmail.com" />
                                        </div>
                                        <div className="mb-6">
                                            <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-900">Password</label>
                                            <input type="password" id="password" className="border-2 border-blue-700 rounded-md md:w-[20rem] w-full p-2" placeholder="•••••••••" required />
                                        </div>
                                    </div>

                                    <h2 className='font-bold text-blue-700 text-3xl mb-2'>Personal Information</h2>
                                    <div className="flex flex-col gap-6 mb-1 md:flex-row">

                                        <div className="">
                                            <label htmlFor="hoursOfSleep" className="block mb-1 text-sm font-medium text-gray-900">Hours of sleep</label>
                                            <select id="hoursOfSleep" className="border-2 border-blue-700 rounded-md md:w-[20rem] w-full p-2" required>
                                                <option value="yes">Less than 4 hours</option>
                                                <option value="no">4 to 6 hours</option>
                                                <option value="no">6 to 8 hours</option>
                                                <option value="no">More than 8 hours</option>
                                            </select>
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="hoursOfSleep" className="block mb-1 text-sm font-medium text-gray-900">Physical activity</label>
                                            <select id="hoursOfSleep" className="border-2 border-blue-700 rounded-md md:w-[20rem] w-full p-2" required>
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-6 mb-6 md:flex-row">
                                        <div className="">
                                            <label htmlFor="diseases" className="block mb-1 text-sm font-medium text-gray-900">Diseases</label>
                                            <select id="diseases" className="border-2 border-blue-700 rounded-md md:w-[20rem] w-full p-2" required>
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                            </select>
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="diseases" className="block mb-1 text-sm font-medium text-gray-900">Gender</label>
                                            <select id="diseases" className="border-2 border-blue-700 rounded-md md:w-[20rem] w-full p-2" required>
                                                <option value="yes">Woman</option>
                                                <option value="no">Men</option>
                                                <option value="no">No specified</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className='grid gap-6 lg:grid-cols-2 grid-cols-1 w-[20rem] pb-2'>
                                        <button type="submit" className="text-black border-2 border-orange-700 p-2 rounded-lg">Cancel</button>
                                        <button type="submit" className="text-white bg-orange-700 p-2 rounded-lg">Save</button>
                                    </div>

                                </form>

                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
}