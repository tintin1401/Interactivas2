import "../../index.css";
import { InputNext } from "../inputs/InputNext.jsx";
import { InputBack } from "../inputs/InputBack.jsx";

/**
 * Renders a component for the finish step of a multi-step form.
 *
 * @param {Object} props - The properties for the Finish component.
 * @param {function} props.AddBack - A function to go back to the previous step.
 * @return {JSX.Element} The rendered Finish component.
 */
export function Finish({ AddBack}) {
    return (
        <>
        <div>
            <h2 className="text-3xl font-bold  text-white my-8 ff-main">Thanks for your time!!</h2>
        </div>
        <div className="flex gap-4">
        <InputBack  type="submit"  value="Back" addBack={AddBack} />
        <InputNext type="submit" value="Finish" />
        </div>
        </>
    );
}