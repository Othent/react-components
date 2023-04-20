import React, { useState } from "react";
import "./LogoutButton.css";
import othent from "othent/dist/lib";
import { LogOutReturnProps } from "othent/dist/types";

export interface LogoutButtonProps {
  children?: React.ReactNode | string;
  onLogout?: (logoutResponse: LogOutReturnProps) => void;
}

const LogoutButton = (props: LogoutButtonProps) => {
  const { children = "Log Out", onLogout } = props;

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
      className="othent-button-logout"
      disabled={clicked}
      onClick={() => void logout()}
      {...props}
    >
      {children}
    </button>
  );
};

export default LogoutButton;
