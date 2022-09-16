import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import React, { useContext, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";

import { Context } from "../contexts/Context";

interface NavButtonProps {
  title: string;
  customFunc: React.MouseEventHandler<HTMLButtonElement>;
  icon: React.ReactNode;
  dotColor?: string;
}

const NavButton = ({ title, customFunc, icon, dotColor }: NavButtonProps) => {
  return (
    <TooltipComponent content={title} position="BottomCenter">
      <button
        type="button"
        onClick={customFunc}
        className="relative text-xl rounded-full p-3 hover:bg-light gray text-white"
      >
        <span
          style={{ background: dotColor }}
          className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
        />
        {icon}
      </button>
    </TooltipComponent>
  );
};

export function Navbar() {
  const { activeMenu, setActiveMenu, setScreenSize, screenSize } =
    useContext(Context);
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize !== null && screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
      <NavButton
        title="Menu"
        customFunc={handleActiveMenu}
        icon={<AiOutlineMenu />}
      />
    </div>
  );
}
