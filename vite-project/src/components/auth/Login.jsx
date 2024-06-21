// src/components/Login.jsx
import "../../index.css";
import { InputLogin } from "../inputs/InputLogin.jsx";
import { NavLink, useNavigate } from "react-router-dom"; 
import { useState } from "react";
import { useComponentContext } from "../hooks/useComponentContext.jsx";
import { login } from "../hooks/authService.js";
import { useUser } from "../../context/UserContext.jsx"; 

/**
 * Login is a React functional component that renders a form for logging in.
 *
 * @return {JSX.Element} The rendered form.
 */
export function Login() {
  const navigate = useNavigate();
  const { setCurrentComponent } = useComponentContext();
  const { setUser } = useUser();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await login({
        email: formData.email,
        password: formData.password,
      });
      console.log('Login successful:', response);
      setUser(response.user); 
      setCurrentComponent('Home');
      navigate('/');
    } catch (error) {
      console.error('Login error:', error);
      setError('Invalid credentials, please try again.');
    }
  };

  return (
    <div className="my-16 bg-blue-600 rounded-3xl grid justify-center items-center">
      <form
        className="mx-10 lg:mx-16 w-[30vh] lg:w-[37vh]"
        onSubmit={handleSubmit}
      >
        <div className="grid justify-center mt-8">
          <img className="w-52 hidden" src="https://randomuser.me/api/portraits/women/31.jpg" alt="Logo" />
        </div>
        <InputLogin
          name="email"
          placeholder="Email"
          type="email"
          img="../src/assets/imgs/email.svg"
          value={formData.email}
          onChange={handleChange}
        />
        <InputLogin
          name="password"
          placeholder="Password"
          type="password"
          img="../src/assets/imgs/password.svg"
          value={formData.password}
          onChange={handleChange}
        />
        {error && <p className="text-red-500">{error}</p>}
        <input
          className="text-white p-2 bg-orange-500 flex rounded-xl items-center justify-center w-full my-8 cursor-pointer transition delay-150 duration-300 ease-in-out hover:bg-white hover:text-orange-500 ff-main"
          type="submit"
          name="btn-login"
          value="Next"
        />
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
