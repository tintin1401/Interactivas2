import "./index.css";

export function InputLogin({ placeholder, type, img }) {
  return (
    <div class="flex bg-blue-300 p-3 gap-2 my-8 rounded-xl">
      <img class="w-7" src={`${img}`} alt="" />
      <input
        class="bg-blue-300 w-full border-none outline-none"
        type={type}
        placeholder={placeholder}
        required=""
      />
    </div>
  );
}
