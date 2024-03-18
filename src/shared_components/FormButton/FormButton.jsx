import "./FormButton.css";

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
