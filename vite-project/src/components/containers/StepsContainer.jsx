import "../../index.css";
export function StepsContainer({stepNumber,title,description}){
    return(
        <div className="bg-blue-950 p-[1.5rem] rounded-[0.625rem]">
            <span className="text-white font-bold bg-orange-500 p-[0.625rem] rounded-[0.125rem] ff-main">{stepNumber}</span>
                <h3 className="text-white font-bold my-5 text-2xl ff-main">{title}</h3>
                <p className="text-white my-5 text-base ff-secondary">{description}</p>
                <a href="#"><span className="text-white bg-orange-500 p-[0.40rem_1rem] w-full block text-center rounded-md ff-main font-bold text-sm">See more</span></a>
        </div>
    )
}