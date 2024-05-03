import "../../index.css";

export function Selected({label,options,id}) {
  return (
    <>
      <div className="max-w-sm mx-auto my-4">
        <label
          className="block mb-2 text-base font-medium text-white ff-main"
          htmlFor={id}
        >
          {label}
        </label>
        <select
          id={id}
          className="bg-blue-300 border border-blue-300 text-blue-800 font-normal text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ff-main"
        >
          {options.map((option) => (
          <option key={option.id} value={option.id}>{option.name}</option>
            
         
        ))}
        </select>
      </div>
    </>
  );
}
