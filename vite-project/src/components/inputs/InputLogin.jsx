import "../../index.css";

/**
 * Renders an input login component with a placeholder, type, and image.
 *
 * @param {Object} props - The properties for the input login component.
 * @param {string} props.placeholder - The placeholder text for the input.
 * @param {string} props.type - The type of the input.
 * @param {string} props.img - The URL of the image for the input.
 * @return {JSX.Element} The rendered input login component.
 */
export function InputLogin({ name, placeholder, type, img, value, onChange }) {
  return (
    <div className="flex bg-blue-300 p-3 gap-2 my-8 rounded-xl">
      <img className="w-7" src={img} alt={`${name} icon`} />
      <input
        className="bg-blue-300 w-full border-none outline-none text-base ff-main"
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

