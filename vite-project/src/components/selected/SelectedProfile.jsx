import "../../index.css";

/**
 * Renders a select component with a label and options for selection.
 *
 * @param {Object} props - The properties for the selected component.
 * @param {string} props.label - The label for the select component.
 * @param {Array} props.options - The options for the select component.
 * @param {string} props.id - The id for the select component.
 * @return {JSX.Element} The rendered select component.
 */
export function SelectedProfile({label,options,id}) {
  return (
    <>
      <div className="mb-3">
        <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor={id}>
        {label}
        </label>

        <select id={id} className="border-2 border-blue-700 rounded-md lg:w-[20rem] w-full p-2 text-blue-900">
          {options.map((option) => (
          <option key={option.id} value={option.id}>{option.name}</option>
        ))}
        </select>
      </div>
    </>
  );
}