import React, { useState } from "react";
import "./OthentLogin.css";
import Avatar from "../Avatar";
import LoginButton from "../LoginButton";
import LogoutButton from "../LogoutButton";
import UserInfo from "../UserInfo";
import Modal from "../Modal";
import { ModalLocation } from "../Modal/Modal";
import { type LogOutReturnProps, type LogInReturnProps } from "othent";

export interface OthentLoginProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  location?: ModalLocation;
  apiid: string;
}

const OthentLogin = (props: OthentLoginProps) => {
  const { children, location = ModalLocation.bottom, apiid } = props;

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
        <LoginButton onlogin={onLogin} apiid={apiid} />
      ) : (
        <Modal
          location={location}
          parent={
            children ? (
              children
            ) : (
              <Avatar username={userData.name} src={userData.picture} />
            )
          }
        >
          <div className="othent-login othent-login-modal-children">
            <UserInfo userdata={userData} />
            <LogoutButton onlogout={onLogout} apiid={apiid} />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default OthentLogin;
