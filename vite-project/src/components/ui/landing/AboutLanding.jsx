import React from 'react'
import { ContainerAboutUs } from '../../containers/ContainerAboutUs.jsx'
import AreaC from "../../../assets/imgs/Area-Contaduria-Privada11.jpg";


/**
 * Renders the About Landing section of the page.
 *
 * @return {JSX.Element} The About Landing section.
 */
export function AboutLanding(){ 
    return( 
        <div>
            <section className="bg-blue-950 grid grid-cols-1 lg:grid-cols-[auto_auto] lg:p-16 p-10 gap-8">
                    <div>
                        <img className="w-[100vw] h-[50vw] rounded-[1rem] lg:w-[30vw] lg:h-full" src={AreaC} alt="" />
                    </div>

                    <div>
                        <a className="text-orange-500 font-bold ff-main" href="">About us</a>
                        <h2 className="text-white font-bold text-3xl ff-main">More clarity and accountability</h2>
                        <p className="text-white ff-secondary">Connect strategic goals to the teams that help achieve them. See progress in real time, update stakeholders, and keep the company on track.</p>
                        <ContainerAboutUs title="Essential for organizing" description="A calendar app is essential for organizing both personal and professional commitments, increasing productivity and reducing stress by offering a clear view of responsibilities." icon="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                        <ContainerAboutUs title="Essential to remember important events" description="A calendar app is essential for remembering important events, ensuring that personal and professional commitments are not overlooked." icon="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                    </div>
                </section>
        </div>
    ) 
    }