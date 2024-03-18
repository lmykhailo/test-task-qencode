import loginPage from "../pages/loginPage/loginPage";
import forgetPasswordPage from "../pages/forgetPasswordPage/forgetPasswordPage";
import resetPasswordPage from "../pages/resetPasswordPage/resetPasswordPage";

import {
  FORGET_PASSWORD_ROUTE,
  LOGIN_ROUTE,
  RESET_PASSWORD_ROUTE,
} from "./consts";

export const routes = [
  {
    path: LOGIN_ROUTE,
    Component: loginPage,
  },
  {
    path: FORGET_PASSWORD_ROUTE,
    Component: forgetPasswordPage,
  },
  {
    path: RESET_PASSWORD_ROUTE,
    Component: resetPasswordPage,
  },
];
