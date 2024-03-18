import React, { useState } from "react";
import FormInput from "../../shared_components/FormInput/FormInput";
import FormPasswordInput from "../../shared_components/FormPasswordInput/FormPasswordInput";
import FormButton from "../../shared_components/FormButton/FormButton";
import { NavLink } from "react-router-dom";
import { FORGET_PASSWORD_ROUTE } from "../../router/consts";
import { validateEmail } from "../../functions/validateEmail";

////test+ui@qencode.com C4aLE2dRM7QE5mT*
const LoginPageForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    showPassword: false,
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError(null);
  };

  const toggleShowPassword = (field) => {
    setFormData((prev) => ({
      ...prev,
      [`show${field}`]: !prev[`show${field}`],
    }));
  };

  const handleSubmut = (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setError("Invalid email");
      return;
    }
    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }
  };
  return (
    <form onSubmit={handleSubmut}>
      <FormInput
        handleChange={handleChange}
        placeholder={"Work email"}
        type={"text"}
        name={"email"}
      />

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
      {error ? <p className="error-message">{error}</p> : null}
      <FormButton text={"Log in to Qencode"} isSubmit={true} />
    </form>
  );
};

export default LoginPageForm;
