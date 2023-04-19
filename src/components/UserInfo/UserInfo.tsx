import React from "react";
import "./UserInfo.css";
import Avatar from "../Avatar";
import { LogInReturnProps } from "othent/dist/types";

export interface UserInfoProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  userData?: LogInReturnProps | null;
}

const UserInfo = (props: UserInfoProps) => {
  const { className = "", userData: userInfo = null } = props;

  return (
    <div className={`othent-user-info ${className}`} {...props}>
      <Avatar imgSrc={userInfo?.picture} userName={userInfo?.name} />
      <div className="othent-user-info-details">
        <div className="othent-user-info-details-name">{userInfo?.name}</div>
        <div className="othent-user-info-details-email">{userInfo?.email}</div>
      </div>
    </div>
  );
};

export default UserInfo;
