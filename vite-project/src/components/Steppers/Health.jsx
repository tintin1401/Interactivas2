import "../../index.css";
import { Selected } from "../selected/Selected.jsx";
import { InputNext } from "../inputs/InputNext.jsx";
import { InputBack } from "../inputs/InputBack.jsx";
import { useHealth } from "../hooks/useHealth.js";

/**
 * Renders a component for the Health step of a multi-step form.
 *
 * @param {Object} props - The properties for the Health component.
 * @param {function} props.addEvent - A function to be called when the event is created.
 * @param {function} props.AddBack - A function to go back to the previous step.
 * @return {JSX.Element} The rendered Health component.
 */
export function Health({addEvent, AddBack}) {
  const { hours, physical, gender, onCreateEvent } = useHealth(addEvent);
  return (
    <div id="health"  >
      <Selected label="How many hours do you sleep?" options={hours} id="hours" />
      <Selected label="Do you do physical activity?" options={physical} id="physical" />
      <label className="block mb-2 text-base font-medium text-white ff-main">
        Do you have any disease?
      </label>
      <div className="flex bg-blue-300 p-3  rounded-xl">
        <input
          className="bg-blue-300 w-full border-none outline-none ff-main"
          type="text"
          placeholder="Write if you have any disease"
        />
      </div>
      <Selected label="Gender" options={gender} id="gender" />
      <div className="flex gap-4">
      <InputBack  type="submit"  value="Back" addBack={AddBack} />
      <InputNext type="submit" addNext={onCreateEvent} value="Next" />
      </div>
    </div>
  );
}
