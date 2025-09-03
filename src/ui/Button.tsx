import React from "react";
import { Circles } from "react-loader-spinner";
type ButtonProps = {
  text: string;
  handleSubmit?: () => void;
  disabled?: boolean;
  className?: string;
};
const Button = ({ text, handleSubmit, disabled, className }: ButtonProps) => {
  const defaultClassName = "bg-red-600 rounded-md w-2/3 text-white py-2 px-4";

  return (
    <button
      className={className ? className : defaultClassName}
      onClick={handleSubmit}
      type="submit"
      disabled={disabled}
    >
      {disabled ? (
        <span className="m-auto flex items-center justify-center">
          <Circles color="white" />{" "}
        </span>
      ) : (
        text
      )}
    </button>
  );
};

export default Button;
