import { ReactElement } from "react";
import { IconType } from "react-icons/lib";

interface ButtonProps {
  icon?: ReactElement<IconType>;
  bgColor?: string;
  color?: string;
  bgHoverColor?: string;
  size?: string;
  text?: string;
  borderRadius?: string;
  width?: string;
}

export function Button({
  icon,
  bgColor,
  color,
  bgHoverColor,
  size,
  text,
  borderRadius,
  width,
}: ButtonProps) {
  return (
    <button
      type="button"
      onClick={() => {}}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    >
      {icon} {text}
    </button>
  );
}
