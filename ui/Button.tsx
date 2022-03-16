import React, { ReactNode } from "react";
import { FaWizardsOfTheCoast } from "react-icons/fa";

const sizes = {
  xLarge: " px-6 py-3",
  large: "py-2 px-2",
  md: "py-1 px-1",
};

const colors = {
  primary: "bg-primary text-white hover:text-primary hover:bg-white",
  grey: "bg-white text-primary hover:text-white hover:bg-primary",
};

const roundeds = {
  full: " rounded-full",
  sm: "rounded-sm",
  lg: "rounded-lg",
};

const widths = {
  full: "w-full",
  md: " w-md",
};

type Iprops = {
  children: ReactNode;
  size?: keyof typeof sizes;
  color?: keyof typeof colors;
  rounded?: keyof typeof roundeds;
  width?: keyof typeof widths;
  onClick: () => void;
  type?: string;
};

export default function Button({
  children,
  size = "md",
  color = "primary",
  rounded = "sm",
  width = "full",

  onClick,
  type = "text",
}: Iprops) {
  return (
    <button
      className={`
       transition-all
      ${sizes[size]} ${colors[color]} ${roundeds[rounded]} ${widths[width]}
      `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
