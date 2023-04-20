import React from "react";
import "./UserInfo.css";
import Avatar from "../Avatar";
import { LogInReturnProps } from "othent/dist/types";

export interface UserInfoProps {
  userData?: LogInReturnProps | null;
}

const UserInfo = (props: UserInfoProps) => {
  const { userData: userInfo = null } = props;

  return (
    <div className="othent-user-info">
      <Avatar imgSrc={userInfo?.picture} userName={userInfo?.name} />
      <div className="othent-user-info-details">
        <div className="othent-user-info-details-name">{userInfo?.name}</div>
        <div className="othent-user-info-details-email">{userInfo?.email}</div>
      </div>
    </div>
  );
};

export default UserInfo;
