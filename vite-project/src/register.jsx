import "./index.css";
import { Login } from "./Login.jsx";
import { CreateAcount } from "./CreateAcount.jsx";
//<Login /> 
export function Register() {
  return (
    <div
      className="bg-no-repeat bg-cover flex justify-center items-center h-[100vh]"
      style={{ backgroundImage: "url(../src/assets/imgs/bg-register.png" }}
    >
      <CreateAcount/>
    </div>
  );
}
