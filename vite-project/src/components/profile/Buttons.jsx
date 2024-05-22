import "../../index.css";
export function Buttons() {
    return (
        <div className='grid gap-6 lg:grid-cols-2 grid-cols-1 lg:w-[20rem] w-full pb-8 '>
            <button type="submit" className="text-white bg-orange-700 p-2 rounded-lg">Save</button>
            <button type="submit" className="text-black border-2 border-orange-700 p-2 rounded-lg">Reset</button>
        </div>
    )
}