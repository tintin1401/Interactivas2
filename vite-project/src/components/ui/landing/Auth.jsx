import '../../../index.css'
import { Login } from "../../auth/Login.jsx";
import { CreateAcount } from "../../auth/CreateAcount.jsx";
import { MultiStepper } from '../../Steppers/MultiStepper.jsx';

//<Login /> 
export function Auth() {
  return (
    <div
      className="bg-no-repeat bg-cover flex justify-center items-center h-[100vh]"
      style={{ backgroundImage: "url(../src/assets/imgs/bg-register.png" }}
    >
      <div className="grid justify-center">
        <MultiStepper
        />
      </div>
    </div>
  );
}
