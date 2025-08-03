import React from "react";

type InputProps = {
  type: string;
  placeholder: string;
  className: string;
  id?: string;
  step?: undefined;
  register?: () => void;
};
const Input = ({
  type,
  placeholder,
  className,
  id,
  register,
  step,
}: InputProps) => {
  const defaultClassName = "text-slate-400 rounded-md w-2/3 outline-none p-2";

  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className={className ? className : defaultClassName}
        id={id}
        step={step}
        {...register}
      />
    </>
  );
};

export default Input;
