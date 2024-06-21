import "../../index.css";
import { InputLogin } from "../inputs/InputLogin.jsx";
import { InputNext } from "../inputs/InputNext.jsx";
import { useState } from "react";
import { register } from "../hooks/authService.js";

/**
 * CreateAccount is a React functional component that renders a form for creating a new account.
 *
 * @param {Object} props - The props object containing the following property:
 *   - addEvent: A function to be called when the form is submitted.
 * @return {JSX.Element} The rendered form.
 */
export function CreateAcount({ addEvent }) {
  const [formData, setFormData] = useState({
    username: '',
    carnet: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onCreateEvent = async (event) => {
    event.preventDefault();
    try {
      const response = await register({
        name: formData.username,
        email: formData.email,
        password: formData.password,
        password_confirmation: formData.password,
        carnet: formData.carnet // está manejado en el backend
      });
      console.log('Registration successful:', response);
      addEvent(); // función pasada por props si es necesario
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <form id="account" onSubmit={onCreateEvent}>
      <InputLogin
        name="username"
        placeholder="Username"
        type="text"
        img="../src/assets/imgs/profile.svg"
        value={formData.username}
        onChange={handleChange}
      />
      <InputLogin
        name="carnet"
        placeholder="Carnet"
        type="text"
        img="../src/assets/imgs/carnet.svg"
        value={formData.carnet}
        onChange={handleChange}
      />
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
      <InputNext value="Next" />
    </form>
  );
}
