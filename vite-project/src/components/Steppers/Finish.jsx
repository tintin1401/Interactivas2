import "../../index.css";
import { InputNext } from "../inputs/InputNext.jsx";
import { InputBack } from "../inputs/InputBack.jsx";

export function Finish({ AddBack}) {
    return (
        <>
        <div>
            <h1 className="text-3xl font-bold  text-white my-8 ff-main">Thanks for your time!!</h1>
        </div>
        <div className="flex gap-4">
        <InputBack  type="submit"  value="Back" addBack={AddBack} />
        <InputNext type="submit" value="Finish" />
        </div>
        </>
    );
}