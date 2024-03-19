import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../../shared_components/FormInput/FormInput";
import FormButton from "../../shared_components/FormButton/FormButton";
import { validateEmail } from "../../functions/validateEmail";
import useAuthentication from "../../hooks/useAuthentication";
import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE, RESET_PASSWORD_ROUTE } from "../../router/consts";

//test+ui@qencode.com - example email
const ForgetPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  //Using custom hook to handle authentication
  const { sendResetPasswordLink, resetMessage, message } = useAuthentication();
  //Using useNavigate to simulate reset password flow
  const navigator = useNavigate();

  //Handling form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    resetMessage();
    //If email is not valid we set error message and return from the function
    if (!validateEmail(email)) {
      setError("Invalid email");
      return;
    }

    //Sending API request to send reset password link
    try {
      const response = await sendResetPasswordLink(email);
      //Simulating reset password flow by navigating to reset password page, because we don't have access to the full API now
      if (response) {
        setTimeout(() => {
          navigator(RESET_PASSWORD_ROUTE);
        }, 1500);
      }
    } catch (error) {
      setError("Error sending reset password link");
    }
  };

  //Reseting error message on input change
  const handleInput = (e) => {
    setEmail(e.target.value);
    setError(null);
  };
  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        name={"email"}
        type={"text"}
        placeholder={"Enter your email"}
        handleChange={handleInput}
        label={"email"}
      />
      {error ? <p className="message message-error">{error}</p> : null}
      {message ? <p className="message message-info">{message}</p> : null}
      <FormButton text="Send" isSubmit={true} />
      <NavLink to={LOGIN_ROUTE}>
        <FormButton text="Cancel" isSubmit={false} />
      </NavLink>
    </form>
  );
};

export default ForgetPasswordForm;
