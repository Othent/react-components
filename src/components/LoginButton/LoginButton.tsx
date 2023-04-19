import React, { useState } from "react";
import "./LoginButton.css";
import logo from "../assets/othent-logo.svg";
import othent from "othent/dist/lib";
import { type LogInReturnProps } from "othent/dist/types";

export interface LoginButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
  onLogin?: (userData: LogInReturnProps) => void;
}

const Button = (props: LoginButtonProps) => {
  const { children, className = "", onLogin } = props;

  const [clicked, setClicked] = useState(false);

  const login = async () => {
    setClicked(true);
    try {
      const loginResponse = await othent.logIn();
      if (onLogin) onLogin(loginResponse);
    } catch (e) {
      console.log(`othent.login() failed:`);
      console.log(e);
    } finally {
      setClicked(false);
    }
  };

  return (
    <button
      className={`othent-button-login ${className}`}
      disabled={clicked}
      onClick={() => void login()}
      {...props}
    >
      <img src={logo} alt="logo" className="othent-button-login-logo"></img>
      {children ? (
        children
      ) : (
        <>
          Login&nbsp;with&nbsp;
          <span className="othent-button-login-brandname">Othent</span>
        </>
      )}
    </button>
  );
};

export default Button;
