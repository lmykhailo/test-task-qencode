import axios from "axios";
import { useState } from "react";

export const BASE_URL = "https://auth-qa.qencode.com/v1/auth/";

const useAuthentication = () => {
  const [message, setMessage] = useState(null);

  const resetMessage = () => {
    setMessage(null);
  };
  const sendResetPasswordLink = async (email, redirectUrl) => {
    resetMessage();
    const url = `${BASE_URL}password-reset`;
    console.log(url);
    const data = {
      email: email,
      redirect_url: redirectUrl,
    };

    try {
      const response = await axios.post(url, data);
      setMessage(response.data.detail);
      return response.data;
    } catch (error) {
      setMessage("Error resetting password ", error);
    }
  };
  const resetPassword = async (token, secret, password, confirmPassword) => {
    resetMessage();
    const url = `${BASE_URL}password-set`;
    console.log(url);
    const data = {
      token: token,
      secret: secret,
      password: password,
      confirmPassword: confirmPassword,
    };

    try {
      const response = await axios.post(url, data);
      setMessage(response.data.detail);
      return response.data;
    } catch (error) {
      setMessage("Error setting new password ", error);
    }
  };
  const loginUser = async (email, password) => {
    resetMessage();
    const url = `${BASE_URL}login`;
    const data = {
      email: email,
      password: password,
    };
    try {
      const response = await axios.post(url, data);
      setMessage(response.data.detail);
      return response.data;
    } catch (error) {
      setMessage("Error logging in ", error);
    }
  };

  return {
    sendResetPasswordLink,
    resetPassword,
    resetMessage,
    loginUser,
    message,
  };
};

export default useAuthentication;
