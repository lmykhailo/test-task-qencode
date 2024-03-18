import "./FormInput.css";

const FormInput = ({ handleChange, label, placeholder, type, name }) => {
  return (
    <input
      onChange={handleChange}
      label={label}
      name={name}
      placeholder={placeholder}
      type={type}
      className="form-input"
      required
    ></input>
  );
};

export default FormInput;
