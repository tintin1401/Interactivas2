import "../../index.css";
/**
 * Renders a container component for the About Us section with a title, description, and icon.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.title - The title of the About Us section.
 * @param {string} props.description - The description of the About Us section.
 * @param {string} props.icon - The path to the icon for the About Us section.
 * @return {JSX.Element} The rendered About Us container component.
 */
export function ContainerAboutUs({title,description,icon}){
    return(
        <div className="grid grid-cols-1 my-[2rem] justify-center gap-4 lg:flex">
            <div className="bg-blue-900 rounded-[0.438rem] p-[1rem] flex justify-center lg:w-[5rem] lg:h-[5rem] items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-[4rem] h-[4rem] text-blue-400">
                <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                </svg> 
            </div>

            <div className="flex justify-center flex-col">
                <h3 className="text-white font-bold ff-main text-base">{title}</h3>
                <p className="text-white ff-secondary text-xs lg:text-base">{description}</p>
            </div>
                                                             
        </div>
    )
}