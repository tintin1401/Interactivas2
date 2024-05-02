import "../../index.css";

export function Selected({label,options}) {
  return (
    <>
      <form className="max-w-sm mx-auto my-4">
        <label
          htmlFor="countries"
          className="block mb-2 text-base font-medium text-white ff-main"
        >
          {label}
        </label>
        <select
          id="countries"
          className="bg-blue-300 border border-blue-300 text-blue-800 font-normal text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ff-main"
        >
          {options.map((option) => (
          <option key={option.id} value={option.id}>{option.name}</option>
            
         
        ))}
        </select>
      </form>
    </>
  );
}
