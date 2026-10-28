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
  title,
  icon,
  isSelected,
  onSelect,
  onOpen,
}) => {
  // Satu klik/tap membuka shortcut (juga berlaku untuk Enter/Space via button native).
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    sounds.playWindowOpen();
    onSelect();
    onOpen();
  };

  return (
    <button
      onClick={handleClick}
      className={`win98-desktop-icon group ${isSelected ? "selected" : ""}`}
      aria-label={`Buka ${title}`}
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
