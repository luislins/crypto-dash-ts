import React,{ReactElement} from 'react'
import { IconType } from 'react-icons/lib';

import { useStateContext } from '../contexts/Context';

interface ButtonProps {
  icon?: ReactElement<IconType>
  bgColor?: string
  color?: string
  bgHoverColor?: string
  size?: string
  text?: string
  borderRadius?: string
  width?: string
};

export function Button({ icon, bgColor, color, bgHoverColor, size, text, borderRadius, width } : ButtonProps) {
  const { setIsClicked, defaultStateIsClicked } = useStateContext();
  return (
    <button
      type="button"
      onClick={() => setIsClicked(defaultStateIsClicked)}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    >
      {icon} {text}
    </button>
  );
}

