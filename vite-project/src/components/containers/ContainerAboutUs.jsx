import "../../index.css";
export function ContainerAboutUs({title,description,icon}){
    return(
        <div className="grid grid-cols-1 my-[2rem] justify-center gap-4 lg:flex">
            <div className="bg-blue-900 rounded-[0.438rem] p-[1rem] flex justify-center lg:w-[5rem] lg:h-[5rem] items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-[4rem] h-[4rem] text-blue-400">
                <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                </svg> 
            </div>

            <div className="flex justify-center flex-col">
                <h3 className="text-white font-bold font-main text-base">{title}</h3>
                <p className="text-white font-secondary text-xs lg:text-base">{description}</p>
            </div>
                                                             
        </div>
    )
}