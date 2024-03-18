import QencodeLogo from "../../assets/QencodeLogo/QencodeLogo";
import ProviderButtonsBlock from "../../components/ProviderButtonsBlock/ProviderButtonsBlock";
import DividerLoginPage from "../../assets/DividerLoginPage/DividerLoginPage";
import LoginPageForm from "../../components/LoginPageForm/LoginPageForm";

import "./loginPage.css";

const LoginPage = () => {
  return (
    <div className="login-page">
      <QencodeLogo />
      <h1>Log in to your account</h1>
      <ProviderButtonsBlock />

      <span className="divider-login-page">
        <DividerLoginPage />
      </span>

      <LoginPageForm />
      <p className="bottom-text-login-page">
        Is your company new to Qencode? <span>Sign up</span>
      </p>
    </div>
  );
};

export default LoginPage;
