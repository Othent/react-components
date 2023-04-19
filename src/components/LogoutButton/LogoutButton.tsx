import React, { useState } from "react";
import "./LogoutButton.css";
import othent from "othent/dist/lib";
import { LogOutReturnProps } from "othent/dist/types";

export interface LogoutButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode | string;
  className?: string;
  onLogout?: (logoutResponse: LogOutReturnProps) => void;
}

const Button = (props: LogoutButtonProps) => {
  const { children = "Log Out", className = "", onLogout } = props;

  const [clicked, setClicked] = useState(false);

  const logout = async () => {
    setClicked(true);
    try {
      const logoutResponse = await othent.logOut();
      if (onLogout) onLogout(logoutResponse);
    } catch (e) {
      console.log(`othent.logout() failed:`);
      console.log(e);
    } finally {
      setClicked(false);
    }
  };

  return (
    <button
      className={`othent-button-logout ${className}`}
      disabled={clicked}
      onClick={() => void logout()}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
