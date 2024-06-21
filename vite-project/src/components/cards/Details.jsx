import React from "react";
import '../../index.css'
import { useFetchActivityDetails } from "../../components/hooks/useFetchActivityDetails";
import { useLocation } from "react-router-dom";

export function Details() {
    const location = useLocation();
    const { data } = useFetchActivityDetails(location.state);

    const showActivityDetails = (activity) => {
        if (!activity || activity.length === 0) {
            return <p>Loading...</p>;
        }
        return (
            <div className="lg:max-w-[800px] mx-auto grid lg:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 lg:p-12 p-6 bg-white rounded-3xl">
                <div className="flex flex-col justify-center">
                    <h1 className='font-bold text-blue-700 text-3xl mb-4'>{activity[0].name}</h1>
                    <h2 className='font-bold text-xl'>{activity[0].courses_name}</h2>
                    <p className="my-4 text-gray-700">{activity[0].description}</p>
                    <p className="font-bold mb-6">Due Date: <span className="text-gray-700 font-normal">{activity[0].date} - {activity[0].hour}</span></p>
                    <div className="flex flex-col items-center w-full">
                        <div className="flex flex-row justify-center w-full mb-2">
                            <label className="w-full text-center font-bold">Activity</label>
                            <label className="w-full text-center font-bold">Category</label>
                            <label className="w-full text-center font-bold">Status</label>
                        </div>
                        <div className="flex flex-row justify-center w-full text-center space-x-2">
                            <p className="w-full text-gray-700">{activity[0].labels_name}</p>
                            <p className="w-full text-gray-700">{activity[0].categories_name}</p>
                            <p className="w-full text-gray-700">{ activity[0].status_activities_name }</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    <img src={`${activity[0].image}`} alt="activity" className="w-full h-64 object-cover rounded-2xl"/>
                </div>
            </div>
        );
    };

    return <>{showActivityDetails(data)}</>;
}
