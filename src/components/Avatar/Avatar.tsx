import React, { useState } from "react";
import "./Avatar.css";

export interface AvatarProps {
  userName?: string;
  imgSrc?: string;
}

const Avatar = (props: AvatarProps) => {
  const { userName = "", imgSrc = "" } = props;
  const [error, setError] = useState(false);

  return (
    <>
      {!error && imgSrc ? (
        <img
          src={imgSrc}
          alt={`${userName}'s avatar`}
          className="othent-avatar"
          {...props}
          referrerPolicy="no-referrer"
          onError={() => setError(true)}
        />
      ) : (
        <div className="othent-avatar">
          {userName ? userName.charAt(0).toUpperCase() : <>&nbsp;</>}
        </div>
      )}
    </>
  );
};

export default Avatar;
