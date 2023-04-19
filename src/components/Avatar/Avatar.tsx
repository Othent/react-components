import React, { useState } from "react";
import "./Avatar.css";

export interface AvatarProps extends React.HTMLAttributes<HTMLImageElement> {
  className?: string;
  userName?: string;
  imgSrc?: string;
}

const Avatar = (props: AvatarProps) => {
  const { className = "", userName = "", imgSrc = "" } = props;
  const [error, setError] = useState(false);

  return (
    <>
      {!error && imgSrc ? (
        <img
          src={imgSrc}
          alt={`${userName}'s avatar`}
          className={`othent-avatar ${className}`}
          {...props}
          referrerPolicy="no-referrer"
          onError={() => setError(true)}
        />
      ) : (
        <div className={`othent-avatar ${className}`} {...props}>
          {userName ? userName.charAt(0).toUpperCase() : <>&nbsp;</>}
        </div>
      )}
    </>
  );
};

export default Avatar;
