import React, { useState, useEffect } from 'react';
import "../../../index.css";
import { CircularProgressBar } from '../progressBar/CircularProgressbar';

/**
 * Renders a percentage card component.
 *
 * @return {JSX.Element} The rendered percentage card component.
 */
export function PorcentageCard() {
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        fetch('http://localhost/calenderbackend/public/api/activities/percentage-pending')
            .then(response => response.json())
            .then(data => setPercentage(data.percentage))
            .catch(error => console.error('Error fetching percentage:', error));
    }, []);

    return (
        <div className="embla__slide flex items-center justify-center">
            <div className="relative embla-card rounded-[14px] z-50 overflow-hidden flex flex-col items-center justify-center bg-blue-950">
                <div className="w-[5rem] h-[5rem] rounded-full bg-blue-950 z-40 justify-center items-center flex">
                    <CircularProgressBar percentage={percentage} />
                </div>
                <p className="text-white text-[1.5rem] m-0 z-50 mt-2 ff-main">Total Pending Tasks</p>
                <div className="absolute top-[5px] left-[5px] embla-bg-card z-20  bg-blue-950 backdrop-blur-xl rounded-[10px] overflow-hidden"></div>
                <div className="absolute z-10 top-2/4 left-2/4 w-[150px] h-[150px] rounded-[50%]  bg-blue-600 opacity-100 animate-blob-bounce"></div>
            </div>
        </div>
    );
}
