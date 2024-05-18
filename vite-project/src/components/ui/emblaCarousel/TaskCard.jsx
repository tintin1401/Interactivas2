import "../../../index.css";
export function TaskCard({number, tasks}) {
    return(
    <div className="embla__slide flex items-center justify-center">
        <div className="col-start-2 col-end-3 row-start-2 row-end-3 justify-self-end">
            <div className="relative embla-card rounded-[14px] z-50 overflow-hidden flex flex-col items-center justify-center bg-blue-600">
                <div className="w-[5rem] h-[5rem] rounded-full bg-blue-950 z-40 justify-center items-center flex">
                    <p className="text-white text-[3rem] m-0 flex justify-center items-center ff-main">{number}</p>
                </div>
                <p className="text-white text-[1.5rem] m-0 z-50 mt-2 ff-main">{tasks}</p>
                <div className="absolute top-[5px] left-[5px] embla-bg-card z-20 bg-blue-600 backdrop-blur-xl rounded-[10px] overflow-hidden"></div>
                <div className="absolute z-10 top-2/4 left-2/4 w-[150px] h-[150px] rounded-[50%] bg-blue-950 opacity-100 animate-blob-bounce"></div>
            </div>
        </div>
    </div>
    )
}