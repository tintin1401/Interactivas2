import "../../index.css";
import { FooterLinks } from './FooterLinks.jsx'
/**
 * Renders the footer component of the website.
 *
 * @return {JSX.Element} The footer component.
 */
export function Footer(){
    return(
        <footer className="bg-blue-900 w-full grid lg:p-16 p-10">
            <div className="grid w-[85vw] grid-cols-[repeat(auto-fit,minmax(200px,_1fr))] gap-8 text-white leading-9">
                <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,_1fr))] gap-8">
                    <FooterLinks title="Cronos" link1="Login" link2="Starter" link3="Prices" link4="Advanced" link5="Enterprice"/>
                    <FooterLinks title="About Us" link1="Company" link2="Management Team" link3="Customers" link4="Diversity" link5="Careers"/>
                    <FooterLinks title="Workflow Solutions" link1="Project Management" link2="Goal management" link3="Agile management" link4="Task management" link5="Productivity increase"/>
                    <FooterLinks title="Resourses" link1="Help center" link2="Forum" link3="Attendace" link4="Partners" link5="Community"/>
                </div>
            </div>
        </footer>
    )
}