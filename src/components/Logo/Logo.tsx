import React from "react";
import "./Logo.css";

export interface LogoProps extends React.HTMLAttributes<HTMLOrSVGElement> {
  width?: number;
  height?: number;
}

const Logo = (props: LogoProps) => {
  const { width = 44, height = 24 } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="othent-logo"
    >
      <rect width={width} height={height} rx={height / 2} fill="#2375EF" />
      <circle
        cx={width - height / 2}
        cy={height / 2}
        r={(height / 2) * 0.93273}
        fill="#F7F7FA"
      />
    </svg>
  );
};

export default Logo;
