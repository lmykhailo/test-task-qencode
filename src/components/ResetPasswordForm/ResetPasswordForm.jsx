import { useState } from "react";
import FormPasswordInput from "../../shared_components/FormPasswordInput/FormPasswordInput";
import FormButton from "../../shared_components/FormButton/FormButton";

const ResetPasswordForm = () => {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
    showPassword: false,
    showConfirmPassword: false,
  });
  const [error, setError] = useState(null);

  const handleInput = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError(null);
  };

  const toggleShowPassword = (field) => {
    setFormData((prev) => ({
      ...prev,
      [`show${field}`]: !prev[`show${field}`],
    }));
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    console.log(132131);
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
      <FormButton text="Reset Password" isSubmit={true} />
    </form>
  );
};

export default ResetPasswordForm;
