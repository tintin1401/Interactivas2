import './index.css'
export function FooterLinks({title,link1,link2,link3,link4,link5}){
    return(
        <section>
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <ul className="list-none">
                <li><a className="text-lg text-white no-underline" href="#">{link1}</a></li>
                <li><a className="text-lg text-white no-underline" href="#">{link2}</a></li>
                <li><a className="text-lg text-white no-underline" href="#">{link3}</a></li>
                <li><a className="text-lg text-white no-underline" href="#">{link4}</a></li>
                <li><a className="text-lg text-white no-underline" href="#">{link5}</a></li>
            </ul>
        </section>
    )
}