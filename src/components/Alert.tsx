import React, { ReactNode } from "react";

interface AlertProps {
  //define properties
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: AlertProps) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button
        type="button"
        className="btn-close"
        data-btn-dismiss="alert"
        onClick={onClose}
        aria-label="Close"
      >
      </button>
    </div>
  );
};

export default Alert;
