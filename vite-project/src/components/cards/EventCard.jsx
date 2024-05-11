import "../../index.css";

export function EventCard({ image, title, date, event, hour, description,calender=false}) {
    return (

        <>
        
    
        <div className={`flex flex-col  lg:flex-row bg-blue-600 rounded-3xl p-4 gap-2 ${calender ? 'md:flex-col' : 'md:flex-row'}`}>

            <img className={`rounded-3xl object-cover w-fit ${calender ? 'md:w-fit' : 'md:w-[22vw]'} lg:w-[13vw]`} src={`${image}`} alt="event"/>
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