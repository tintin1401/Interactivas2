import "../../index.css";

export function InputProfile({ placeholder, type, id,label }) {
  return (
    <div className="mb-3">
    <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900">{label}</label>
    <input type={type} id={id} className="border-2 border-blue-700 rounded-md w-full p-2" placeholder={placeholder}  />
    </div>
  );
}