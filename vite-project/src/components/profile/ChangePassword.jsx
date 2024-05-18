import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion";


export function ChangePassword() {

    const [isCtaPasswordVisible, setIsCtaPasswordVisible] = useState(false);

    useEffect(() => {
        const ctaPasswordTimer = setTimeout(() => {
            setIsCtaPasswordVisible(true);
        }, 500);

        return () => {
            clearTimeout(ctaPasswordTimer);
        };
    }, []);

    return (
        <div className="flex justify-center items-center min-h-screen bg-[#EFF6FE]">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isCtaPasswordVisible ? 1 : 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="bg-white rounded-3xl pl-8 pr-8">
                    <div class="grid justify-center m-4">
                        <form>
                            <div class="grid gap-6 mb-6 md:grid-cols-1">
                                <h1 className='font-bold text-blue-700 text-3xl text-center mb-4'>Change Password</h1>
                                <div class="mb-3">
                                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Old password</label>
                                    <input type="password" id="password" class="border-2 border-blue-700 rounded-md w-[20rem] p-2" placeholder="•••••••••" required />
                                </div>

                                <div class="mb-3">
                                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900">New password</label>
                                    <input type="password" id="password" class="border-2 border-blue-700 rounded-md w-[20rem] p-2" placeholder="•••••••••" required />
                                </div>

                                <div class="mb-3">
                                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Write it again</label>
                                    <input type="password" id="password" class="border-2 border-blue-700 rounded-md w-[20rem] p-2" placeholder="•••••••••" required />
                                </div>


                            </div>

                            <div className='grid gap-6 lg:grid-cols-2 grid-cols-1 w-[20rem] pb-2 pt-2'>
                                <button type="submit" class="text-black border-2 border-orange-700 p-2 rounded-lg">Cancel</button>
                                <button type="submit" class="text-white bg-orange-700 p-2 rounded-lg">Change</button>
                            </div>


                        </form>

                    </div>

                </div>
            </motion.div>
        </div>
    )
}