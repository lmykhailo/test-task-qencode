import "./FormButton.css";

//Reusable form button component that has two use cases - submit and regular button
// Style of the button depends on the isSubmit prop
const formButton = ({ text, isSubmit, onClick }) => {
  return (
    <button
      type={`${isSubmit ? "submit" : "button"}`}
      className={`btn-base ${isSubmit ? "btn-submit" : "btn"}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default formButton;
