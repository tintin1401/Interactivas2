import "../../index.css";
/**
 * Renders a component with two buttons: "Save" and "Reset". 
 * The "Save" button has a white text color on an orange background, 
 * while the "Reset" button has a black text color with a 2px orange border.
 *
 * @return {JSX.Element} The rendered component with two buttons.
 */
export function Buttons() {
    return (
        <div className='grid gap-6 lg:grid-cols-2 grid-cols-1 lg:w-[20rem] w-full pb-8 '>
            <button type="submit" className="text-black border-2 border-orange-700 p-2 rounded-lg">Reset</button>
            <button type="submit" className="text-white bg-orange-700 p-2 rounded-lg">Save</button>
        </div>
    )
}