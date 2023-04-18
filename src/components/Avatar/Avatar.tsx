import React, { HTMLProps, useState } from "react";
import "./Avatar.css";

export interface AvatarProps extends HTMLProps<HTMLImageElement> {
  className?: string;
  userName?: string;
  imgSrc?: string;
}

const Avatar = (props: AvatarProps) => {
  const { className = "", userName = "", imgSrc = "" } = props;
  const [error, setError] = useState(false);

  const avatarClassName = className
    ? `othent-avatar ${className}`
    : "othent-avatar";

  return (
    <>
      {!error && imgSrc ? (
        <img
          src={imgSrc}
          alt={`${userName}'s avatar`}
          className={avatarClassName}
          {...props}
          referrerPolicy="no-referrer"
          onError={() => setError(true)}
        />
      ) : (
        <div className={avatarClassName} {...props}>
          {userName ? userName.charAt(0).toUpperCase() : <>&nbsp;</>}
        </div>
      )}
    </>
  );
};

export default Avatar;
