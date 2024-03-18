import ViewPasswordIcon from "../../assets/ViewPasswordIcon/ViewPasswordIcon";
import "./FormPasswordInput.css";

// I have decided to split password input from text input in case we would have either 3rd scenario
// of input or if we would have to add more functionality to password input in future.
const FormPasswordInput = ({
  handleChange,
  label,
  placeholder,
  name,
  showPassword,
  onTogglePassword,
}) => {
  return (
    <div className="password-field-container">
      {label && <label>{label}</label>}
      <div className="password-input-wrapper">
        <input
          onChange={handleChange}
          name={name}
          placeholder={placeholder}
          type={showPassword ? "text" : "password"}
          className="password-input"
          required
        />
        <button
          type="button"
          onClick={onTogglePassword}
          className="show-hide-button"
        >
          <ViewPasswordIcon />
        </button>
      </div>
    </div>
  );
};

export default FormPasswordInput;
