import React from "react";

type ComponentTitleProps = {
  subTitle: string;
  title: string;
};
const ComponentTitle = ({ subTitle, title }: ComponentTitleProps) => {
  return (
    <div>
      {" "}
      <div>
        <h2 className="text-lg font-semibold text-red-600">{subTitle}</h2>
        <h1 className="text-bold text-3xl capitalize font-bold">{title}</h1>
      </div>
    </div>
  );
};

export default ComponentTitle;
