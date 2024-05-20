import "../../index.css";
/**
 * Renders an input button with a blue background color and white text. 
 * The button triggers the `addBack` function when clicked.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.value - The value displayed on the button.
 * @param {function} props.addBack - The function to be called when the button is clicked.
 * @return {JSX.Element} - The rendered input button.
 */
export const InputBack = ({ value ,addBack}) => {
  return (
    <input
      className=" text-white p-2 bg-blue-400 flex rounded-xl items-center justify-center w-full  cursor-pointer transition delay-150 duration-300 ease-in-out hover:bg-white hover:text-blue-400 text-base"
      type="submit"
      value={value}
      onClick={addBack}
    />
  );
};
