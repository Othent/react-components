import React, { useState } from "react";
import "./LogoutButton.css";
import othent, { type LogOutReturnProps } from "othent";

export interface LogoutButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode | string;
  onlogout?: (logoutResponse: LogOutReturnProps) => void;
}

const LogoutButton = (props: LogoutButtonProps) => {
  const { children = "Log Out", onlogout } = props;

  const [clicked, setClicked] = useState(false);

  const logout = async () => {
    setClicked(true);
    try {
      const logoutResponse = await othent.logOut();
      if (onlogout) onlogout(logoutResponse);
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
