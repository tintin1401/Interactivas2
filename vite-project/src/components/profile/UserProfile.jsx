import React, { useState } from 'react';
import "../../index.css";
import Sidebar from '../layout/sidebar/Sidebar.jsx';
import ToggleSidebar from '../layout/sidebar/ToggleSidebar.jsx'
export function UserProfile() {
    const[sidebarToggle, setSidebarToggle] = useState(false)

    return (
        <>
            <div className="grid">
            <Sidebar sidebarToggle={sidebarToggle}/>
            <ToggleSidebar sidebarToggle={sidebarToggle}
                setSidebarToggle={setSidebarToggle}/>
                <div className="flex justify-center items-center min-h-screen lg:ml-64">
                    <div class="grid justify-center m-4">
                        <form>
                            <h1 className='font-bold text-blue-700 text-3xl mb-2'>Account Settings</h1>
                            <div className="flex items-center gap-4 mb-8">
                                <img className='block rounded-[50%] w-20' src="https://randomuser.me/api/portraits/women/31.jpg" alt="User Profile" />
                                <p className='text-md font-medium'>User Name</p>
                            </div>
                            <div class="flex flex-col gap-6 mb-2 md:flex-row">
                                <div class="mb-4">
                                    <label for="password" class="block mb-2 text-md font-medium text-gray-900">Full name</label>
                                    <input type="password" id="password" class="border-2 border-blue-700 rounded-md w-[20rem] p-2" placeholder="Username" required />
                                </div>

                                <div class="mb-4">
                                    <label for="password" class="block mb-2 text-md font-medium text-gray-900">Carnet</label>
                                    <input type="password" id="password" class="border-2 border-blue-700 rounded-md w-[20rem] p-2" placeholder="•••••••••" required />
                                </div>
                            </div>
                            <div className="flex flex-col gap-6 mb-8 md:flex-row">
                                <div class="mb-4">
                                    <label for="password" class="block mb-2 text-md font-medium text-gray-900">Email</label>
                                    <input type="password" id="password" class="border-2 border-blue-700 rounded-md w-[20rem] p-2" placeholder="•••••••••" required />
                                </div>
                                <div class="mb-4">
                                    <label for="password" class="block mb-2 text-md font-medium text-gray-900">Password</label>
                                    <input type="password" id="password" class="border-2 border-blue-700 rounded-md w-[20rem] p-2" placeholder="•••••••••" required />
                                </div>
                            </div>

                            <h2 className='font-bold text-blue-700 text-3xl mb-2'>Personal Information</h2>
                            <div class="flex flex-col gap-6 mb-2 md:flex-row">

                                <div class="mb-4">
                                    <label for="hoursOfSleep" class="block mb-2 text-md font-medium text-gray-900">Hours of sleep</label>
                                    <select id="hoursOfSleep" class="border-2 border-blue-700 rounded-md w-[20rem] p-2" required>
                                        <option value="yes">Less than 4 hours</option>
                                        <option value="no">4 to 6 hours</option>
                                        <option value="no">6 to 8 hours</option>
                                        <option value="no">More than 8 hours</option>
                                    </select>
                                </div>
                                <div class="mb-4">
                                    <label for="hoursOfSleep" class="block mb-2 text-md font-medium text-gray-900">Physical activity</label>
                                    <select id="hoursOfSleep" class="border-2 border-blue-700 rounded-md w-[20rem] p-2" required>
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex flex-col gap-6 mb-6 md:flex-row">
                                <div class="mb-4">
                                    <label for="diseases" class="block mb-2 text-md font-medium text-gray-900">Diseases</label>
                                    <select id="diseases" class="border-2 border-blue-700 rounded-md w-[20rem] p-2" required>
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </select>
                                </div>
                                <div class="mb-4">
                                    <label for="diseases" class="block mb-2 text-md font-medium text-gray-900">Gender</label>
                                    <select id="diseases" class="border-2 border-blue-700 rounded-md w-[20rem] p-2" required>
                                        <option value="yes">Woman</option>
                                        <option value="no">Men</option>
                                        <option value="no">No specified</option>
                                    </select>
                                </div>
                            </div>

                            <div className='grid gap-6 lg:grid-cols-2 grid-cols-1 w-[20rem]'>
                                <button type="submit" class="text-black border-2 border-orange-700 p-2 rounded-lg">Cancel</button>
                                <button type="submit" class="text-white bg-orange-700 p-2 rounded-lg">Change</button>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </>
    );
}