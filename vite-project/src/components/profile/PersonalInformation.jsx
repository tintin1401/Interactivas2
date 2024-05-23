import "../../index.css";
/**
 * Renders a section containing personal information inputs.
 *
 * @return {JSX.Element} The rendered section with personal information inputs.
 */
export function PersonalInformation() {
    return (
        <section>
            <h2 className='font-bold text-blue-700 text-3xl mb-2'>Personal Information</h2>
            <div className="flex flex-col gap-6 mb-1 md:flex-row">

                <div className="">
                    <label htmlFor="hoursOfSleep" className="block mb-1 text-sm font-medium text-gray-900">Hours of sleep</label>
                    <select id="hoursOfSleep" className="border-2 border-blue-700 rounded-md lg:w-[20rem] w-full p-2" required>
                        <option value="yes">Less than 4 hours</option>
                        <option value="no">4 to 6 hours</option>
                        <option value="no">6 to 8 hours</option>
                        <option value="no">More than 8 hours</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="physicalActivity" className="block mb-1 text-sm font-medium text-gray-900">Physical activity</label>
                    <select id="physicalActivity" className="border-2 border-blue-700 rounded-md lg:w-[20rem] w-full p-2" required>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
            </div>
            <div className="flex flex-col gap-6 mb-6 md:flex-row">
                <div className="">
                    <label htmlFor="diseases" className="block mb-1 text-sm font-medium text-gray-900">Diseases</label>
                    <select id="diseases" className="border-2 border-blue-700 rounded-md lg:w-[20rem] w-full p-2" required>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="gender" className="block mb-1 text-sm font-medium text-gray-900">Gender</label>
                    <select id="gender" className="border-2 border-blue-700 rounded-md lg:w-[20rem] w-full p-2" required>
                        <option value="yes">Woman</option>
                        <option value="no">Men</option>
                        <option value="no">No specified</option>
                    </select>
                </div>
            </div>
        </section>
    )
}