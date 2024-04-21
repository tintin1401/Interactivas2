import './index.css'
export function StepsContainer({stepNumber,title,description}){
    return(
        <div className="bg-blue-950 p-[1.5rem] rounded-[0.625rem]">
            <span className="text-white font-bold bg-orange-500 p-[0.625rem] rounded-[0.125rem] font-main">{stepNumber}</span>
                <h3 className="text-white font-bold my-5 text-2xl">{title}</h3>
                <p className="text-white my-5 text-base">{description}</p>
                <a href="#"><span className="text-white bg-orange-500 p-[0.40rem_1rem] w-full block text-center rounded-md font-main font-bold text-sm">See more</span></a>
        </div>
    )
}