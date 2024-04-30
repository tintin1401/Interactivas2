import "../../index.css";
import { Selected } from "../selected/Selected.jsx";

export function Health() {
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

  return (
    <>
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
     

    </>
  );
}
