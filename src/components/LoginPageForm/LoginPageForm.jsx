import React, { useState } from "react";
import FormInput from "../../shared_components/FormInput/FormInput";
import FormPasswordInput from "../../shared_components/FormPasswordInput/FormPasswordInput";
import FormButton from "../../shared_components/FormButton/FormButton";
import { NavLink } from "react-router-dom";
import { FORGET_PASSWORD_ROUTE } from "../../router/consts";
import { validateEmail } from "../../functions/validateEmail";
import useAuthentication from "../../hooks/useAuthentication";

//test+ui@qencode.com C4aLE2dRM7QE5mT* - example email and password
const LoginPageForm = () => {
  //Form data state
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    showPassword: false,
  });
  const [error, setError] = useState(null);

  //Using custom hook to handle authentication
  const { loginUser, message, resetMessage } = useAuthentication();

  //Handling input change and resseting error and message states
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError(null);
    resetMessage();
  };

  //Function to toggle show password state
  const toggleShowPassword = (field) => {
    setFormData((prev) => ({
      ...prev,
      [`show${field}`]: !prev[`show${field}`],
    }));
  };

  //Handling form submit
  const handleSubmut = async (e) => {
    e.preventDefault();

    //If email is not valid or password length is less than 8 we set error message and return from the function
    if (!validateEmail(formData.email)) {
      setError("Invalid email");
      return;
    }
    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }

    //Sending API request to login user
    await loginUser(formData.email, formData.password);
  };
  return (
    <form onSubmit={handleSubmut}>
      <FormInput
        handleChange={handleChange}
        placeholder={"Work email"}
        type={"text"}
        name={"email"}
      />

      {/*Logic to simulate password input field to appear if we have email*/}
      {/* Possible to make block appearence smooth but it was not required*/}
      {formData.email.length > 0 ? (
        <>
          <FormPasswordInput
            handleChange={handleChange}
            placeholder={"Password"}
            name={"password"}
            showPassword={formData.showPassword}
            onTogglePassword={() => toggleShowPassword("Password")}
          />
          <NavLink
            to={FORGET_PASSWORD_ROUTE}
            className="forgot-password-wrapper"
          >
            <p className="forgot-password">Forgot your Password?</p>
          </NavLink>
        </>
      ) : null}
      {error ? <p className="message message-error">{error}</p> : null}
      {message ? <p className="message message-info">{message}</p> : null}
      <FormButton text={"Log in to Qencode"} isSubmit={true} />
    </form>
  );
};

export default LoginPageForm;
