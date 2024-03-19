import "./FormInput.css";

//Reusable form input component that is used in multiple forms for text input
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
