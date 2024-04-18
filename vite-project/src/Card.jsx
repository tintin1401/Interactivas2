import './index.css'
export function Card({title,description,img}){
    return(
        <div className='rounded-lg shadow-lg'>
            <img className='rounded-t-lg' src={`${img}`} alt="event" />
            <div className='p4'>
                <h4 className='font-bold text-sm'>{title}</h4>
                <p className='font-normal text-xs text-gray-800' >{description}</p>
            </div>
        </div>
    )

} 