import "../../index.css";
/**
 * Renders a section with a title and a list of links.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.title - The title of the section.
 * @param {string} props.link1 - The first link in the list.
 * @param {string} props.link2 - The second link in the list.
 * @param {string} props.link3 - The third link in the list.
 * @param {string} props.link4 - The fourth link in the list.
 * @param {string} props.link5 - The fifth link in the list.
 * @return {JSX.Element} A section with a title and a list of links.
 */
export function FooterLinks({title,link1,link2,link3,link4,link5}){
    return(
        <section>
            <h3 className="text-2xl font-bold mb-2 ff-main">{title}</h3>
            <ul className="list-none ff-secondary">
                <li><a className="text-lg text-white no-underline" href="#">{link1}</a></li>
                <li><a className="text-lg text-white no-underline" href="#">{link2}</a></li>
                <li><a className="text-lg text-white no-underline" href="#">{link3}</a></li>
                <li><a className="text-lg text-white no-underline" href="#">{link4}</a></li>
                <li><a className="text-lg text-white no-underline" href="#">{link5}</a></li>
            </ul>
        </section>
    )
}