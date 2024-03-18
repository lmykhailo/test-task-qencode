import QencodeLogo from "../../assets/QencodeLogo/QencodeLogo";
import ForgetPasswordForm from "../../components/ForgetPasswordForm/ForgetPasswordForm";
import "./forgetPasswordPage.css";

const ForgetPasswordPage = () => {
  return (
    <div className="forget-password-page">
      <QencodeLogo></QencodeLogo>
      <h1>Forgot Password?</h1>
      <ForgetPasswordForm />
    </div>
  );
};

export default ForgetPasswordPage;
