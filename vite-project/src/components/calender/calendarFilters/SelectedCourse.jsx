import "../../../index.css";
import React, { useState } from 'react';

/**
 * Renders a select component for selecting a course.
 *
 * @return {JSX.Element} The rendered select component.
 */
export function SelectedCourse() {
    const [selectedItem, setSelectedItem] = useState('');
  
    const handleSelectChange = (event) => {
      setSelectedItem(event.target.value);
    };

    const courses = ['Aplicaciones Interactivas', 'Diseño Web', 'Ingenieria', 'Manipulacion de Audio y Video'];
  
    return (
      <div className="border-2 border-blue-60000 p-4 rounded-2xl ff-main ">
        <h2 className="font-bold mb-3">Courses</h2>
        <select value={selectedItem} onChange={handleSelectChange} className="text-gray-600 block w-full border-none outline-none">

          <option value="">Choose a course</option>
          {courses.map((courses, index) => (
            <option key={index} value={courses}>
              {courses}
            </option>
          ))}
        </select>

        <hr className="border border-blue-600" />

      </div>
    );
  }
