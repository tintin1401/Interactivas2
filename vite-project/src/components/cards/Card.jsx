import "../../index.css";
/**
 * Renders a card component with a title, description, and image.
 *
 * @param {Object} props - The properties for the card component.
 * @param {string} props.title - The title of the card.
 * @param {string} props.description - The description of the card.
 * @param {string} props.img - The URL of the image for the card.
 * @return {JSX.Element} The rendered card component.
 */
export function Card({title,description,img}){
    return(
        <div className='rounded-lg shadow-lg'>
            <img className='rounded-t-lg' src={`${img}`} alt="event" />
            <div className='p4'>
                <h4 className='font-bold text-sm ff-main'>{title}</h4>
                <p className='font-normal text-xs text-gray-800 ff-secondary'>{description}</p>
            </div>
        </div>
    )

} 