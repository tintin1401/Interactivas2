// components/ui/landing/Index.jsx
import React from 'react';
import EmblaCarousel from '../emblaCarousel/EmblaCarousel.jsx';
import '../../../css/embla.css';
import '../../../index.css';

export function Index({ tasksPerWeek, loadingTasksPerWeek }) {
  const OPTIONS = { loop: true };

  return (
    <div>
      <EmblaCarousel slides={[]} options={OPTIONS} />
      <div className="statistics mt-6">
        {/* <h3 className="text-xl font-bold mt-4">Tasks Completed Per Week</h3>
        {loadingTasksPerWeek ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {tasksPerWeek.map((task, index) => (
              <li key={index}>Week {task.week}: {task.count} tasks completed</li>
            ))}
          </ul>
        )} */}
      </div>
    </div>
  );
}
