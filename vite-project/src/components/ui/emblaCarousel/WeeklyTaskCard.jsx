import React from 'react';

const WeeklyTaskCard = ({ week, count }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Week {week}</h3>
            <p className="text-gray-700">{count} tasks completed</p>
        </div>
    );
};

export default WeeklyTaskCard;