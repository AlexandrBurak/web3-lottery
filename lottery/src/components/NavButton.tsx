import React, { FC } from "react";

type Props = {
  title: string;
  isActive?: boolean;
  onClick?: () => void;
};

export const NavButton: FC<Props> = ({ title, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${
        isActive && "bg-[#036756]"
      } hover:bg-[#036756] text-white py-2 px-2 rounded font-bold`}
    >
      {title}
    </button>
  );
};
