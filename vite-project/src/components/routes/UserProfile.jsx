import React, { useState, useEffect } from 'react';
import "../../index.css";
import Sidebar from '../layout/sidebar/Sidebar.jsx';
import ToggleSidebar from '../layout/sidebar/ToggleSidebar.jsx'
import { motion } from "framer-motion";
import { ChangePassword } from '../profile/ChangePassword.jsx';
import Modal from '@mui/material/Modal';
import { useProfile } from '../hooks/useProfile.js';
import { InputProfile } from '../inputs/InputProfile.jsx';
import { AccountSettings } from '../profile/AccountSettings.jsx';
import { PersonalInformation } from '../profile/PersonalInformation.jsx';
import { Buttons } from '../profile/Buttons.jsx';
/**
 * Renders the User Profile component.
 *
 * @return {JSX.Element} The rendered User Profile component.
 */
export function UserProfile() {
   const { sidebarToggle, isSidebarVisible, isProfileVisible, setSidebarToggle } = useProfile();

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
                                    <AccountSettings />
                                    <PersonalInformation />
                                    <Buttons />
                                </form>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
}