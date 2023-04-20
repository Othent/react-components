import React, { useState } from "react";
import "./OthentLogin.css";
import {
  type LogOutReturnProps,
  type LogInReturnProps,
} from "othent/dist/types";
import Avatar from "../Avatar";
import LoginButton from "../LoginButton";
import LogoutButton from "../LogoutButton";
import UserInfo from "../UserInfo";
import Modal from "../Modal";

export interface OthentLoginProps {
  children?: React.ReactNode;
}

const OthentLogin = (props: OthentLoginProps) => {
  const { children } = props;

  const [userData, setUserData] = useState<LogInReturnProps | null>(null);

  const onLogin = (userData: LogInReturnProps) => {
    setUserData(userData);
  };

  const onLogout = (logoutResponse: LogOutReturnProps) => {
    logoutResponse.response && setUserData(null);
  };

  return (
    <div className="othent-login">
      {userData === null ? (
        <LoginButton onLogin={onLogin} />
      ) : (
        <Modal
          parent={
            children ? (
              children
            ) : (
              <Avatar userName={userData.name} imgSrc={userData.picture} />
            )
          }
        >
          <div className="othent-login othent-login-modal-children">
            <UserInfo userData={userData} />
            <LogoutButton onLogout={onLogout} />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default OthentLogin;
