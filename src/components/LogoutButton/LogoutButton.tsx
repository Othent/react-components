import React, { HTMLProps } from "react";
import "./LogoutButton.css";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode | string;
  className?: string;
}

const Button = (props: ButtonProps) => {
  const { children = "Log Out", className = "" } = props;

  const logout = () => {
    // TODO: Call othent.logOut()
    console.log("TODO: call othent.LogOut()");
  };

  return (
    <button
      className={`othent-button-logout ${className}`}
      onClick={logout}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
