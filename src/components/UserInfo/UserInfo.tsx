import React from "react";
import "./UserInfo.css";
import Avatar from "../Avatar";
import { type LogInReturnProps } from "othent";

export interface UserInfoProps extends React.HTMLAttributes<HTMLDivElement> {
  userdata?: LogInReturnProps | null;
}

const UserInfo = (props: UserInfoProps) => {
  const { userdata = null } = props;

  return (
    <div className="othent-user-info">
      <Avatar src={userdata?.picture} username={userdata?.name} />
      <div className="othent-user-info-details">
        <div className="othent-user-info-details-name">{userdata?.name}</div>
        <div className="othent-user-info-details-email">{userdata?.email}</div>
      </div>
    </div>
  );
};

export default UserInfo;
