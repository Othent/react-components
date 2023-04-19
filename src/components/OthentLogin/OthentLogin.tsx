import React, { useState } from "react";
import "./OthentLogin.css";
import {
  type LogOutReturnProps,
  type LogInReturnProps,
} from "othent/dist/types";
import { Avatar, LoginButton, LogoutButton, UserInfo, Modal } from "..";

export interface OthentLoginProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
}

const OthentLogin = (props: OthentLoginProps) => {
  const { children, className = "" } = props;

  const [userData, setUserData] = useState<LogInReturnProps | null>(null);

  const onLogin = (userData: LogInReturnProps) => {
    setUserData(userData);
  };

  const onLogout = (logoutResponse: LogOutReturnProps) => {
    logoutResponse.response && setUserData(null);
  };

  return userData === null ? (
    <LoginButton
      className={`othent-login ${className}`}
      onLogin={onLogin}
      {...props}
    />
  ) : (
    <Modal
      className={`othent-login ${className}`}
      parent={
        children ? (
          children
        ) : (
          <Avatar
            userName={userData.name}
            imgSrc={userData.picture}
            className={`othent-login ${className}`}
          />
        )
      }
    >
      <div className={`othent-login othent-login-modal-children`}>
        <UserInfo userData={userData} className={`othent-login ${className}`} />
        <LogoutButton
          onLogout={onLogout}
          className={`othent-login ${className}`}
        />
      </div>
    </Modal>
  );
};

export default OthentLogin;
