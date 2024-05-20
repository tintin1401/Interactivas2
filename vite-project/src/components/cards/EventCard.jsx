import "../../index.css";

/**
 * Renders an event card component with the given image, title, date, event, hour, and description.
 *
 * @param {Object} props - The properties for the event card component.
 * @param {string} props.image - The URL of the image for the event card.
 * @param {string} props.title - The title of the event.
 * @param {string} props.date - The date of the event.
 * @param {string} props.event - The type of the event.
 * @param {string} props.hour - The time of the event.
 * @param {string} props.description - The description of the event.
 * @param {boolean} [props.calender=false] - Whether the event card is displayed in a calendar view.
 * @return {JSX.Element} The rendered event card component.
 */
export function EventCard({ image, title, date, event, hour, description,calender=false}) {
    return (

        <>
        
    
        <div className={`flex flex-col  xl:flex-row bg-blue-600 rounded-3xl p-4 gap-2 ${calender ? 'lg:flex-col' : 'md:flex-row'}`}>

            <img className={`rounded-3xl object-cover w-fit ${calender ? 'lg:w-fit' : 'md:w-[22vw]'} xl:w-[13vw]`} src={`${image}`} alt="event"/>
                <div className="grid gap-3 w-full">

                    <div className="flex justify-between ff-main">
                        <h3 className="text-white text-xl font-bold">{title}</h3>
                        <h4 className="text-white font-semibold text-lg">{date}</h4>
                    </div>

                    <div className="flex justify-between ff-main">
                        <div
                            className=" bg-[#D6EEF8] text-blue-700 font-semibold rounded-[0.5rem] w-16 h-6 flex justify-center items-center text-[0.8rem]">
                            {event}</div>
                        <h4 className="text-white text-xl">{hour}</h4>
                    </div>

                    <p className="text-white text-sm ff-secondary">{description}</p>

                </div>
        </div>
        </>
    )
}