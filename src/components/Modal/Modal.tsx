import React, { useEffect, useRef, useState } from "react";
import "./Modal.css";

const LOCATIONS = [
  "top",
  "right",
  "bottom",
  "left",
  "top-right",
  "top-left",
  "bottom-right",
  "bottom-left",
];

enum ModalLocation {
  "top",
  "right",
  "bottom",
  "left",
  "top-right",
  "top-left",
  "bottom-right",
  "bottom-left",
}

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  parent?: React.ReactNode;
  children?: React.ReactNode;
  location?: ModalLocation;
}

const mainClassName = "othent-modal";

const Modal = (props: ModalProps) => {
  const {
    className = "",
    parent = "Show Modal",
    children = "Modal Content",
    location = ModalLocation.bottom,
  } = props;

  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setShowModal(false);
      }
    };
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef]);

  return (
    <div
      className={`othent-login-button ${mainClassName} ${className}`}
      onClick={() => setShowModal(!showModal)}
      {...props}
    >
      {parent}
      {showModal && (
        <div
          className={`${mainClassName}-children ${mainClassName}-children-${LOCATIONS[location]}`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Modal;
