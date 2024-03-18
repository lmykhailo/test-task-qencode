import React, { useState } from "react";
import FormInput from "../../shared_components/FormInput/FormInput";
import FormButton from "../../shared_components/FormButton/FormButton";
import { validateEmail } from "../../functions/validateEmail";
import useAuthentication from "../../hooks/useAuthentication";

//test+ui@qencode.com
const ForgetPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const { sendResetPasswordLink, resetMessage, message } = useAuthentication();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      sendResetPasswordLink(email);
    } else {
      setError("Invalid email");
      return;
    }
  };

  const handleInput = (e) => {
    setEmail(e.target.value);
    resetMessage();
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
      <FormButton text="Cancel" isSubmit={false} />
    </form>
  );
};

export default ForgetPasswordForm;
