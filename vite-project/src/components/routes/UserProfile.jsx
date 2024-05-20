import React, { useState, useEffect } from 'react';
import "../../index.css";
import Sidebar from '../layout/sidebar/Sidebar.jsx';
import ToggleSidebar from '../layout/sidebar/ToggleSidebar.jsx'
import { motion } from "framer-motion";
import { ChangePassword } from '../profile/ChangePassword.jsx';
import Modal from '@mui/material/Modal';
import { useProfile } from '../hooks/useProfile.js';
import { InputProfile } from '../inputs/InputProfile.jsx';
  


/**
 * Renders the User Profile component.
 *
 * @return {JSX.Element} The rendered User Profile component.
 */
export function UserProfile() {
   const { modal, openModal, sidebarToggle, isSidebarVisible, isProfileVisible,setIsProfileVisible,setIsSidebarVisible, setSidebarToggle } = useProfile();
    const body = (
        <div className="bg-white w-[90%] md:w-[40%] lg:w-[25%] rounded-3xl p-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <ChangePassword close={openModal}/>       
        </div>
    )
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
                                        <img className='block rounded-[50%] w-20 object-cover' src="https://randomuser.me/api/portraits/women/31.jpg" alt="User Profile" />
                                        <p className='text-md font-medium'>User Name</p>
                                    </div>
                                    <div className="grid md:grid-cols-[auto_auto] gap-2 ">
                                        <InputProfile placeholder="Full name" type="text" id="fullName" label="Full name" />
                                        <InputProfile placeholder="Carnet" type="text" id="carnet" label="Carnet" />
                                        <InputProfile placeholder="Email" type="email" id="email" label="Email" />
                                        <div className='grid '>
                                        <InputProfile placeholder="Password" type="password" id="password" label="Password" />
                                        <a className=' text-blue-700 items-end ' onClick={openModal}>Change</a>
                                        </div>
                                    </div>
                                    <Modal open={modal} onClose={openModal}>
                                        {body} 
                                    </Modal>
                                    <h2 className='font-bold text-blue-700 text-3xl mb-2'>Personal Information</h2>
                                    <div className="flex flex-col gap-6 mb-1 md:flex-row">

                                        <div className="">
                                            <label htmlFor="hoursOfSleep" className="block mb-1 text-sm font-medium text-gray-900">Hours of sleep</label>
                                            <select id="hoursOfSleep" className="border-2 border-blue-700 rounded-md lg:w-[20rem] w-full p-2" required>
                                                <option value="yes">Less than 4 hours</option>
                                                <option value="no">4 to 6 hours</option>
                                                <option value="no">6 to 8 hours</option>
                                                <option value="no">More than 8 hours</option>
                                            </select>
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="physicalActivity" className="block mb-1 text-sm font-medium text-gray-900">Physical activity</label>
                                            <select id="physicalActivity" className="border-2 border-blue-700 rounded-md lg:w-[20rem] w-full p-2" required>
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-6 mb-6 md:flex-row">
                                        <div className="">
                                            <label htmlFor="diseases" className="block mb-1 text-sm font-medium text-gray-900">Diseases</label>
                                            <select id="diseases" className="border-2 border-blue-700 rounded-md lg:w-[20rem] w-full p-2" required>
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                            </select>
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="gender" className="block mb-1 text-sm font-medium text-gray-900">Gender</label>
                                            <select id="gender" className="border-2 border-blue-700 rounded-md lg:w-[20rem] w-full p-2" required>
                                                <option value="yes">Woman</option>
                                                <option value="no">Men</option>
                                                <option value="no">No specified</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className='grid gap-6 lg:grid-cols-2 grid-cols-1 lg:w-[20rem] w-full pb-2'>
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