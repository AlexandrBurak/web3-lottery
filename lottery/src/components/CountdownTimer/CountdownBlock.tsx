import React, { FC } from "react";

type CountdownBlockProps = {
  value: number;
  label: string;
};

const CountdownBlock: FC<CountdownBlockProps> = ({ value, label }) => {
  return (
    <div className="flex-1">
      <div className="countdown">{value}</div>
      <div className="countdown-label">{label}</div>
    </div>
  );
};

export default CountdownBlock;
