import React from "react";

type SelectProps = {
  data?: { value: string; text: string }[];
  register?: any;
  className?: string;
};

const Select = ({ data, register, className }: SelectProps) => {
  const defaultClassName = "text-slate-400 rounded-md w-2/3 outline-none p-2";
  return (
    <select {...register} className={className ? className : defaultClassName}>
      {data?.map((item, index) => (
        <option value={item.value} key={index}>
          {item.text ? item.text : item.value}
        </option>
      ))}
    </select>
  );
};

export default Select;
