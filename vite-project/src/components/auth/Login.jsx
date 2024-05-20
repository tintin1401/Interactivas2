import "../../index.css";
import logo from "../../assets/imgs/logo-white.svg";
import { InputLogin } from "../inputs/InputLogin.jsx";
import { NavLink } from "react-router-dom";
import { useComponentContext } from "../hooks/useComponentContext.jsx";

/**
 * Login is a React functional component that renders a form for logging in.
 *
 * @return {JSX.Element} The rendered form.
 */
export function Login() {
  const { setCurrentComponent } = useComponentContext();
  return (
    
      <div className="my-16 bg-blue-600 rounded-3xl grid justify-center items-center ">
        <form
          className="mx-10  lg:mx-16 w-[30vh] lg:w-[37vh]"
          method="post"
          action="signIn.php"
        >
          <div className="grid justify-center mt-8">
            <img className="w-52" src={logo} alt="" />
          </div>
          
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
          <input className="text-white p-2 bg-orange-500 flex rounded-xl items-center justify-center w-full my-8 cursor-pointer transition delay-150 duration-300 ease-in-out hover:bg-white hover:text-orange-500 ff-main" type="submit" name="btn-login" value="Next"/>
          <p className="text-white m-5 mr-4 ml-2 ff-main">Don't have an account?
          <NavLink
            to="/auth"
            className="text-orange-300 m-5 ml-1 cursor-pointer hover:text-orange-200 ff-main"
            onClick={() => setCurrentComponent('MultiStepper')}
          >
            Create one
          </NavLink>
          </p>
          
        </form>
      </div>
   
  );
}
