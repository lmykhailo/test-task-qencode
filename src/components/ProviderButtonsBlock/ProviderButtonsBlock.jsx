import GithubLogo from "../../assets/GithubLogo/GithubLogo";
import GoogleLogo from "../../assets/GoogleLogo/GoogleLogo";
import ProviderLoginButton from "../../shared_components/ProviderLoginButton/ProviderLoginButton";
import "./ProviderButtonsBlock.css";

//Component to display third-party providers login buttons

const ProviderButtonsBlock = () => {
  return (
    <div className="provider-block-container">
      <ProviderLoginButton>
        <GoogleLogo />
        <span>Google</span>
      </ProviderLoginButton>
      <ProviderLoginButton>
        <GithubLogo />
        <span>Github</span>
      </ProviderLoginButton>
    </div>
  );
};

export default ProviderButtonsBlock;
