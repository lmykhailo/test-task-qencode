import axios from "axios";
import { useState } from "react";

//Base URL for the API
export const BASE_URL = "https://auth-qa.qencode.com/v1/auth/";

const useAuthentication = () => {
  //state to store info/error messages that occur when making API calls
  const [message, setMessage] = useState(null);

  //Function to reset the message state
  const resetMessage = () => {
    setMessage(null);
  };

  //Function to send a reset password link to the user's email
  const sendResetPasswordLink = async (email, redirectUrl) => {
    //Reset the message state
    resetMessage();
    const url = `${BASE_URL}password-reset`;
    const data = {
      email: email,
      redirect_url: redirectUrl,
    };

    //Function to send the reset password link
    try {
      const response = await axios.post(url, data);
      setMessage(response.data.detail);
      return response.data;
    } catch (error) {
      //If an error occurs, log the error and set the message state to the error message
      if (error.response) {
        console.log(error.response.data.detail);
        setMessage(
          "Error sending reset password link: " + error.response.data.detail
        );
      }
    }
  };

  //Function to reset the user's password
  const resetPassword = async (token, secret, password, confirmPassword) => {
    //Reset the message state
    resetMessage();
    const url = `${BASE_URL}password-set`;
    const data = {
      token: token,
      secret: secret,
      password: password,
      confirmPassword: confirmPassword,
    };

    try {
      const response = await axios.post(url, data);
      // Because we don't have access to the API, we can't test this functionality properly, because we will always encounter an error
      console.log("Successful password reset");
      setMessage(response.data.detail);
      return response.data;
    } catch (error) {
      setMessage(error.response.data.detail[0].error);
    }
  };

  //Function to log the user in
  const loginUser = async (email, password) => {
    //Reset the message state
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
      setMessage("Error logging in: " + error.response.data.detail);
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
