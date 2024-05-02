import "../../index.css";
export const InputNext = ({ value }) => {
    return (
        <input
        className="text-white p-2 bg-orange-500 flex rounded-xl items-center justify-center w-full  cursor-pointer transition delay-150 duration-300 ease-in-out hover:bg-white hover:text-orange-500 text-lg"
        type="submit"
        value={value}
      />
    );
}