import { useState } from "react";
import useAuthentication from "../../hooks/useAuthentication";
import FormPasswordInput from "../../shared_components/FormPasswordInput/FormPasswordInput";
import FormButton from "../../shared_components/FormButton/FormButton";

const ResetPasswordForm = () => {
  // Using dummy data for now, as it was told in email, that we currently don't have full access to the API
  // It is possible to retrieve it from url params, using useParams hook from react-router-dom
  const token = "token";
  const secret = "secret";

  //Form data for reset password form
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
    showPassword: false,
    showConfirmPassword: false,
  });
  const [error, setError] = useState(null);

  //Using custom hook to handle authentication
  const { resetPassword, message, resetMessage } = useAuthentication();

  //Handling input change and resseting error state
  const handleInput = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError(null);
  };

  //Function to toggle show password state
  const toggleShowPassword = (field) => {
    setFormData((prev) => ({
      ...prev,
      [`show${field}`]: !prev[`show${field}`],
    }));
  };

  //Handling form submit
  const handleSumbit = async (e) => {
    e.preventDefault();
    //reset message state
    resetMessage();
    //If password is less than 8 characters or passwords doesn't match we set error message and return from the function
    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    //Sending API request to reset password
    await resetPassword(
      token,
      secret,
      formData.password,
      formData.confirmPassword
    );
  };
  return (
    <form onSubmit={handleSumbit}>
      <FormPasswordInput
        label={"Password"}
        handleChange={handleInput}
        placeholder={"Password"}
        name={"password"}
        showPassword={formData.showPassword}
        onTogglePassword={() => toggleShowPassword("Password")}
      />
      <FormPasswordInput
        label={"Confirm Password"}
        handleChange={handleInput}
        placeholder={"Password"}
        name={"confirmPassword"}
        showPassword={formData.showConfirmPassword}
        onTogglePassword={() => toggleShowPassword("ConfirmPassword")}
      />
      {error ? <p className="message message-error">{error}</p> : null}
      {message ? <p className="message message-info">{message}</p> : null}
      <FormButton text="Reset Password" isSubmit={true} />
    </form>
  );
};

export default ResetPasswordForm;
