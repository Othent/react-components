import React, { HTMLProps } from "react";
import "./Button.css";

export interface ButtonProps extends HTMLProps<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

const Button = (props: ButtonProps) => {
  const { children = <></>, className = "" } = props;
  return (
    <div className={`button-custom ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Button;
