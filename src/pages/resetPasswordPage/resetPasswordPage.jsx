import "./resetPasswordPage.css";
import QencodeLogo from "../../assets/QencodeLogo/QencodeLogo";
import ResetPasswordForm from "../../components/ResetPasswordForm/ResetPasswordForm";

const ResetPasswordPage = () => {
  return (
    <div className="reset-password-page">
      <QencodeLogo></QencodeLogo>
      <h1>Create new Password?</h1>
      <ResetPasswordForm />
    </div>
  );
};

export default ResetPasswordPage;
