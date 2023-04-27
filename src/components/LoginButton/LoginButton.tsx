import React, { useState } from "react";
import "./LoginButton.css";
import Logo from "../Logo";
import othent, { type LogInReturnProps } from "othent";

export interface LoginButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  onlogin?: (userData: LogInReturnProps) => void;
}

const LoginButton = (props: LoginButtonProps) => {
  const { children, onlogin } = props;

  const [clicked, setClicked] = useState(false);

  const login = async () => {
    setClicked(true);
    try {
      const loginResponse = await othent.logIn();
      if (onlogin) onlogin(loginResponse);
    } catch (e) {
      console.log(`othent.login() failed:`);
      console.log(e);
    } finally {
      setClicked(false);
    }
  };

  return (
    <button
      className="othent-button-login"
      disabled={clicked}
      onClick={() => void login()}
      {...props}
    >
      <Logo />
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

export default LoginButton;
