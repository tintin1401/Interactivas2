import "../../index.css";
export const InputBack = ({ value }) => {
  return (
    <input
      className=" text-white p-2 bg-blue-400 flex rounded-xl items-center justify-center w-full  cursor-pointer transition delay-150 duration-300 ease-in-out hover:bg-white hover:text-blue-400 text-base"
      type="submit"
      value={value}
    />
  );
};
