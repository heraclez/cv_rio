import React, { useEffect, useRef } from "react";
import {
  MyComputerIcon,
  ResumeIcon,
  ProjectsFolderIcon,
  SkillsIcon,
  CertificateIcon,
  ContactIcon,
  DownloadFloppyIcon,
  SettingsIcon,
  ShutdownIcon,
} from "@/components/PixelIcons";
import { sounds } from "@/components/SoundManager";

interface StartMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenWindow: (id: string) => void;
}

export const StartMenu: React.FC<StartMenuProps> = ({
  isOpen,
  onClose,
  onOpenWindow,
}) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleItemClick = (id: string) => {
    sounds.playClick();
    onOpenWindow(id);
    onClose();
  };

  return (
    <div
      ref={menuRef}
      className="fixed bottom-[38px] left-0 z-[9999] win98-window-frame flex shadow-2xl w-[260px] bg-[#c0c0c0]"
      role="menu"
      aria-label="Start Menu"
    >
      {/* Windows 98 Vertical Blue Banner */}
      <div className="w-8 bg-[#000080] flex flex-col justify-end items-center pb-2 select-none relative overflow-hidden">
        <div
          className="text-white font-bold tracking-widest text-[16px] whitespace-nowrap transform -rotate-90 origin-bottom-center mb-10 opacity-90"
          style={{ letterSpacing: "2px" }}
        >
          <span className="font-serif">Windows</span>
          <span className="text-[#ffff55] font-sans ml-1 font-black">98</span>
        </div>
      </div>

      {/* Menu Options List */}
      <div className="flex-1 py-1 px-1 bg-[#c0c0c0] text-[12px] space-y-0.5">
        <button
          onClick={() => handleItemClick("about")}
          className="w-full text-left px-2 py-1.5 flex items-center gap-2.5 hover:bg-[#000080] hover:text-white transition-colors cursor-pointer group"
          role="menuitem"
          type="button"
        >
          <MyComputerIcon size={20} />
          <span className="font-medium">About Rio</span>
        </button>

        <button
          onClick={() => handleItemClick("resume")}
          className="w-full text-left px-2 py-1.5 flex items-center gap-2.5 hover:bg-[#000080] hover:text-white transition-colors cursor-pointer group"
          role="menuitem"
          type="button"
        >
          <ResumeIcon size={20} />
          <span className="font-medium">My Resume</span>
        </button>

        <button
          onClick={() => handleItemClick("projects")}
          className="w-full text-left px-2 py-1.5 flex items-center gap-2.5 hover:bg-[#000080] hover:text-white transition-colors cursor-pointer group"
          role="menuitem"
          type="button"
        >
          <ProjectsFolderIcon size={20} />
          <span className="font-medium">My Projects</span>
        </button>

        <button
          onClick={() => handleItemClick("skills")}
          className="w-full text-left px-2 py-1.5 flex items-center gap-2.5 hover:bg-[#000080] hover:text-white transition-colors cursor-pointer group"
          role="menuitem"
          type="button"
        >
          <SkillsIcon size={20} />
          <span className="font-medium">Skills & Tech</span>
        </button>

        <button
          onClick={() => handleItemClick("certificates")}
          className="w-full text-left px-2 py-1.5 flex items-center gap-2.5 hover:bg-[#000080] hover:text-white transition-colors cursor-pointer group"
          role="menuitem"
          type="button"
        >
          <CertificateIcon size={20} />
          <span className="font-medium">Certificates (LSP)</span>
        </button>

        <button
          onClick={() => handleItemClick("contact")}
          className="w-full text-left px-2 py-1.5 flex items-center gap-2.5 hover:bg-[#000080] hover:text-white transition-colors cursor-pointer group"
          role="menuitem"
          type="button"
        >
          <ContactIcon size={20} />
          <span className="font-medium">Contact Rio</span>
        </button>

        <button
          onClick={() => handleItemClick("download")}
          className="w-full text-left px-2 py-1.5 flex items-center gap-2.5 hover:bg-[#000080] hover:text-white transition-colors cursor-pointer group font-bold"
          role="menuitem"
          type="button"
        >
          <DownloadFloppyIcon size={20} />
          <span>Download CV (PDF)</span>
        </button>

        {/* Separator line */}
        <div className="border-t border-[#808080] border-b border-white my-1" />

        <button
          onClick={() => handleItemClick("settings")}
          className="w-full text-left px-2 py-1.5 flex items-center gap-2.5 hover:bg-[#000080] hover:text-white transition-colors cursor-pointer group"
          role="menuitem"
          type="button"
        >
          <SettingsIcon size={18} />
          <span>Settings & Theme</span>
        </button>

        <button
          onClick={() => handleItemClick("shutdown")}
          className="w-full text-left px-2 py-1.5 flex items-center gap-2.5 hover:bg-[#000080] hover:text-white transition-colors cursor-pointer group text-[#800000] hover:text-white font-bold"
          role="menuitem"
          type="button"
        >
          <ShutdownIcon size={18} />
          <span>Shut Down...</span>
        </button>
      </div>
    </div>
  );
};
