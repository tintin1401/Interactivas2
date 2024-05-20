import "../../index.css";
/**
 * Renders an input element with a next button.
 *
 * @param {Object} props - The properties for the input element.
 * @param {string} props.value - The value of the input element.
 * @param {function} props.addNext - The function to be called when the next button is clicked.
 * @return {JSX.Element} The input element with a next button.
 */
export const InputNext = ({ value, addNext }) => {
    return (
        <input
        className="text-white p-2 bg-orange-500 flex rounded-xl items-center justify-center w-full  cursor-pointer transition delay-150 duration-300 ease-in-out hover:bg-white hover:text-orange-500 text-lg"
        type="submit"
        onClick={addNext}
        value={value}
      />
    );
}