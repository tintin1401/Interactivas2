import "../../index.css";

export function InputLogin({ placeholder, type, img }) {
  return (
    <div className="flex bg-blue-300 p-3 gap-2 my-8 rounded-xl">
      <img className="w-7" src={`${img}`} alt="" />
      <input
        className="bg-blue-300 w-full border-none outline-none text-base"
        id={placeholder}
        name={placeholder}
        required=""
        type={type}
        placeholder={placeholder}
        
      />
    </div>
  );
}
