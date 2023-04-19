import React from "react";
import "./UserInfo.css";
import { Avatar } from "..";
import { LogInReturnProps } from "othent/dist/types";

export interface UserInfoProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  userData?: LogInReturnProps | null;
}

const mainClassName = "othent-user-info";

const UserInfo = (props: UserInfoProps) => {
  const { className = "", userData: userInfo = null } = props;

  return (
    <div className={`${mainClassName} ${className}`} {...props}>
      <Avatar imgSrc={userInfo?.picture} userName={userInfo?.name} />
      <div className={`${mainClassName}-details`}>
        <div className={`${mainClassName}-details-name`}>{userInfo?.name}</div>
        <div className={`${mainClassName}-details-email`}>
          {userInfo?.email}
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
