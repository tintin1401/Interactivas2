import "../../index.css";
import { SelectedProfile } from "../selected/SelectedProfile.jsx";
/**
 * Renders a section containing personal information inputs.
 *
 * @return {JSX.Element} The rendered section with personal information inputs.
 */
export function PersonalInformation() {
    const hours = [
        { id: "4hours", name: "Less than 4 hours" },
        { id: "6hours", name: "4 to 6 hours" },
        { id: "8hours", name: "6 to 8 hours" },
        { id: "9hours", name: "More than 8 hours" },
      ];
    
      const gender = [
        { id: "f", name: "Woman" },
        { id: "m", name: "Men" },
        { id: "n", name: "No specified" },
      ];
    
      const physical = [
        { id: "y", name: "Yes" },
        { id: "n", name: "No" },
      ];
    
      const disease = [
        { id: "y", name: "Yes" },
        { id: "n", name: "No" },
      ];

    return (
        <section className="my-8">
            <h2 className='font-bold text-blue-700 text-3xl mb-2'>Personal Information</h2>
            <div className="grid md:grid-cols-[auto_auto] gap-2">
                <SelectedProfile label="Hours of sleep" options={hours} id="hours"/>
                <SelectedProfile label="Physical activity" options={physical} id="physical"/>
                <SelectedProfile label="Diseases" options={disease} id="disease"/>
                <SelectedProfile label="Gender" options={gender} id="gender"/>
            </div>
        </section>
    )
}