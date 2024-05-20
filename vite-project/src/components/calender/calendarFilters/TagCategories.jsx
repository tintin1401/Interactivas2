import "../../../index.css";

/**
 * Renders a grid of tag categories as clickable links.
 *
 * @return {JSX.Element} A div containing a grid of tag categories as links.
 */
export function TagCategories() {

    return (
        <div className="grid gap-2 grid-cols-[repeat(auto-fit,_minmax(80px,_1fr))] my-8 ff-main">
            <a className="flex justify-center border-blue-600 border-2 hover:bg-blue-600 text-blue-600 hover:text-white p-[0.40rem_1rem] rounded-full font-bold lg:text-sm text-xs" href="#">Task</a>
            <a className="flex justify-center border-blue-600 border-2 hover:bg-blue-600 text-blue-600 hover:text-white p-[0.40rem_1rem] rounded-full font-bold lg:text-sm text-xs" href="#">Event</a>
            <a className="flex justify-center border-blue-600 border-2 hover:bg-blue-600 text-blue-600 hover:text-white p-[0.40rem_1rem] rounded-full font-bold lg:text-sm text-xs" href="#">Courses</a>

        </div>
    )
}