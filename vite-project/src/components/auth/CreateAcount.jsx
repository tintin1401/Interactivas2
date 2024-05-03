import "../../index.css";
import { InputLogin } from "../inputs/InputLogin.jsx";
import { InputNext } from "../inputs/InputNext.jsx";

export function CreateAcount({addEvent}) {
  const onCreateEvent = (event) => {
     event.preventDefault(); 
     addEvent() ; 
  };
  return (
    <form id="account" onSubmit={onCreateEvent}>
      <InputLogin
        placeholder="Username"
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
       <InputNext
        value="Next"/>
      
    </form>
  );
}
