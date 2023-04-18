import React, { HTMLProps, useState } from "react";
import "./UserInfo.css";
import { Avatar, UserData } from "..";

export interface UserInfoProps extends HTMLProps<HTMLDivElement> {
  className?: string;
  userData?: UserData | null;
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
