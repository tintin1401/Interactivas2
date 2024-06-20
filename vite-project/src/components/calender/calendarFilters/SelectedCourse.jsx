import "../../../index.css";
import { useState } from 'react';
import useFetchData from "../../hooks/useFetchData";

/**
 * Renders a select component for selecting a course.
 *
 * @return {JSX.Element} The rendered select component.
 */
export function SelectedCourse({ addEvent }) {
  const [selectedItem, setSelectedItem] = useState('');

  const { data, loading } = useFetchData("http://localhost/calenderbackend/public/api/courses/name");
  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedItem(selectedValue); // Actualiza el estado
    addEvent(selectedValue); // Llama a la función addEvent
  };


  return (
    <div className="border-2 border-blue-60000 p-4 rounded-2xl ff-main ">
      <h2 className="font-bold mb-3">Courses</h2>
      <select value={selectedItem}         
        onChange={handleSelectChange} 
       className="text-gray-600 block w-full border-none outline-none">

        <option value="0">Choose a course</option>

        {loading ? (
          <option value="">loading</option>
        ) : (
          data.map(item => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))
        )}

      </select>

      <hr className="border border-blue-600" />

    </div>
  );
}
