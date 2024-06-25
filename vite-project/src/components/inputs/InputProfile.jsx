import "../../index.css";

/**
 * Renders an input profile component with a label and an input field.
 *
 * @param {Object} props - The properties for the input profile component.
 * @param {string} props.placeholder - The placeholder text for the input field.
 * @param {string} props.type - The type of the input field.
 * @param {string} props.id - The id of the input field.
 * @param {string} props.label - The label for the input field.
 * @param {string} [props.defaultValue] - The default value of the input field.
 * @param {boolean} [props.readOnly] - If true, the input field is read-only.
 * @param {function} [props.onChange] - The function to call when the input value changes.
 * @return {JSX.Element} The rendered input profile component.
 */
export function InputProfile({ placeholder, type, id, label, defaultValue, readOnly, onChange }) {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900">{label}</label>
      <input
        type={type}
        id={id}
        className="border-2 border-blue-700 rounded-md w-full p-2"
        placeholder={placeholder}
        defaultValue={defaultValue}
        readOnly={readOnly}
        onChange={onChange}
      />
    </div>
  );
}
