import React, { useState } from "react";
import "./LogoutButton.css";
import { Othent, type LogOutReturnProps } from "othent";

export interface LogoutButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode | string;
  onlogout?: (logoutResponse: LogOutReturnProps) => void;
  apiId: string;
}

const LogoutButton = (props: LogoutButtonProps) => {
  const { children = "Log Out", onlogout, apiId } = props;

  const [clicked, setClicked] = useState(false);

  const logout = async () => {
    setClicked(true);
    try {
      const othent = await Othent({ API_ID: apiId });
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
