import React from "react";

type InputProps = {
  type: string;
  placeholder: string;
  className: string;
  id?: string;
  step?: undefined;
  register?: any;
  isShadow: boolean;
};
const Input = ({
  type,
  placeholder,
  className,
  id,
  register,
  step,
  isShadow,
}: InputProps) => {
  const defaultClassName = "text-slate-400 rounded-md w-2/3 outline-none p-2";

  return (
    <>
      {!isShadow ? (
        <input
          type={type}
          placeholder={placeholder}
          className={className ? className : defaultClassName}
          id={id}
          step={step}
          {...register}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className={className ? className : defaultClassName}
          id={id}
          step={step}
          {...register}
          style={{
            boxShadow:
              "inset 5px 5px 10px #a6a6a6, inset -5px -5px 8px #ffffff",
          }}
        />
      )}
    </>
  );
};

export default Input;
