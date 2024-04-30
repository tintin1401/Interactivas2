import "../../index.css";
import { InputLogin } from "../inputs/InputLogin.jsx";

export function CreateAcount() {
  return (
      <form>
       <InputLogin
            placeholder="Fullname"
            type="text"
            img="../src/assets/imgs/profile.svg"
          />
          <InputLogin
            placeholder="Carnet"
            type="text"
            img="../src/assets/imgs/carnet.svg"
          />
          <InputLogin
            placeholder="Email"
            type="email"
            img="../src/assets/imgs/email.svg"
          />
          <InputLogin
            placeholder="Password"
            type="Password"
            img="../src/assets/imgs/password.svg"
          />
      </form>
  );
}
