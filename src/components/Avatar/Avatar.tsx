import React, { useState } from "react";
import "./Avatar.css";

export interface AvatarProps extends React.HTMLAttributes<HTMLImageElement> {
  username?: string;
  src?: string;
}

const Avatar = (props: AvatarProps) => {
  const { username = "", src = "" } = props;
  const [error, setError] = useState(false);

  return (
    <>
      {!error && src ? (
        <img
          src={src}
          alt={`${username}'s avatar`}
          className="othent-avatar"
          {...props}
          referrerPolicy="no-referrer"
          onError={() => setError(true)}
        />
      ) : (
        <div className="othent-avatar">
          {username ? username.charAt(0).toUpperCase() : <>&nbsp;</>}
        </div>
      )}
    </>
  );
};

export default Avatar;
