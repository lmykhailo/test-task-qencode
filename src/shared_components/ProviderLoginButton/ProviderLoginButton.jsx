import "./ProviderLoginButton.css";

//reusable button component for third-party provider login buttons
const ProviderLoginButton = ({ children }) => {
  return <button className="btn-provider">{children} </button>;
};

export default ProviderLoginButton;
