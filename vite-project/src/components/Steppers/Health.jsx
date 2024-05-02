import "../../index.css";
import { Selected } from "../selected/Selected.jsx";
import { InputNext } from "../inputs/InputNext.jsx";
import { InputBack } from "../inputs/InputBack.jsx";

export function Health({addEvent}) {
  const hours = [
    { id: "choose", name: "Choose a option" },
    { id: "4hours", name: "Less than 4 hours" },
    { id: "6hours", name: "4 to 6 hours" },
    { id: "8hours", name: "6 to 8 hours" },
    { id: "9hours", name: "More than 8 hours" },
  ];

  const gender = [
    { id: "choose", name: "Choose a option" },
    { id: "f", name: "Woman" },
    { id: "m", name: "Men" },
    { id: "n", name: "No specified" },
  ];

  const physical = [
    { id: "choose", name: "Choose a option" },
    { id: "y", name: "Yes" },
    { id: "n", name: "No" },
  ];

  const disease = [
    { id: "choose", name: "Choose a option" },
    { id: "y", name: "Yes" },
    { id: "n", name: "No" },
  ];
  const onCreateEvent = (event) => {
    event.preventDefault(); 
    addEvent() ; 
 };

  return (
    <form id="health" onSubmit={onCreateEvent} >
      <Selected label="How many hours do you sleep?" options={hours} />
      <Selected label="Do you do physical activity?" options={physical} />
      <label className="block mb-2 text-base font-medium text-white">
        Do you have any disease?
      </label>
      <div className="flex bg-blue-300 p-3  rounded-xl">
        <input
          className="bg-blue-300 w-full border-none outline-none"
          type="text"
          placeholder="Write if you have any disease"
        />
      </div>
      <Selected label="Gender" options={gender} />
      <div className="flex gap-4">
        <InputNext value="Next" />
        <InputBack value="Back" />
      </div>
     

    </form>
  );
}
