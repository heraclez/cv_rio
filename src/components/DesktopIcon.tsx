import React from "react";
import { sounds } from "@/components/SoundManager";

interface DesktopIconProps {
  id: string;
  title: string;
  icon: React.ReactNode;
  isSelected: boolean;
  onSelect: () => void;
  onOpen: () => void;
}

export const DesktopIcon: React.FC<DesktopIconProps> = ({
  id,
  title,
  icon,
  isSelected,
  onSelect,
  onOpen,
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    sounds.playClick();
    onSelect();
  };

  const handleDoubleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    sounds.playWindowOpen();
    onOpen();
  };

  // Keyboard accessibility
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      sounds.playWindowOpen();
      onOpen();
    }
  };

  return (
    <button
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      onKeyDown={handleKeyDown}
      className={`win98-desktop-icon group ${isSelected ? "selected" : ""}`}
      tabIndex={0}
      aria-label={`Open ${title}`}
      type="button"
    >
      <div className="w-10 h-10 flex items-center justify-center transform group-active:translate-y-0.5">
        {icon}
      </div>
      <span className="icon-label font-sans font-medium">
        {title}
      </span>
    </button>
  );
};
