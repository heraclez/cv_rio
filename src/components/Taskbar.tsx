import React, { useState, useEffect } from "react";
import { WindowsLogoIcon, VolumeIcon, MutedVolumeIcon } from "@/components/PixelIcons";
import { WindowState } from "@/components/Window";
import { sounds } from "@/components/SoundManager";

interface TaskbarProps {
  windows: WindowState[];
  activeWindowId: string | null;
  isStartMenuOpen: boolean;
  onToggleStartMenu: () => void;
  onTaskbarItemClick: (id: string) => void;
  soundEnabled: boolean;
  onToggleSound: (enabled: boolean) => void;
}

export const Taskbar: React.FC<TaskbarProps> = ({
  windows,
  activeWindowId,
  isStartMenuOpen,
  onToggleStartMenu,
  onTaskbarItemClick,
  soundEnabled,
  onToggleSound,
}) => {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [currentDate, setCurrentDate] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("id-ID", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
      setCurrentDate(
        now.toLocaleDateString("id-ID", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      );
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const openWindows = windows.filter((w) => w.isOpen);

  return (
    <footer
      className="fixed bottom-0 left-0 right-0 h-[38px] bg-[#c0c0c0] border-t-2 border-white win98-bevel-out flex items-center justify-between px-1 z-[10000] select-none"
      role="navigation"
      aria-label="Taskbar"
    >
      {/* Left side: Start Button & Open Windows */}
      <div className="flex items-center gap-1.5 flex-1 min-w-0 pr-2">
        {/* Start Button */}
        <button
          onClick={() => {
            sounds.playClick();
            onToggleStartMenu();
          }}
          className={`win98-btn h-[28px] px-2 font-bold flex items-center gap-1.5 ${
            isStartMenuOpen ? "active" : ""
          }`}
          aria-expanded={isStartMenuOpen}
          aria-label="Start Menu"
          type="button"
        >
          <WindowsLogoIcon size={16} />
          <span className="text-[12px] font-black tracking-wide">Start</span>
        </button>

        {/* Quick Launch Divider */}
        <div className="h-5 w-1 border-l border-[#808080] border-r border-white mx-0.5 hidden sm:block" />

        {/* Active Windows Buttons */}
        <div className="flex items-center gap-1 flex-1 min-w-0 overflow-x-auto no-scrollbar py-0.5">
          {openWindows.map((w) => {
            const isActive = activeWindowId === w.id && !w.isMinimized;
            return (
              <button
                key={w.id}
                onClick={() => {
                  sounds.playClick();
                  onTaskbarItemClick(w.id);
                }}
                className={`h-[28px] max-w-[170px] min-w-[90px] px-2 text-[11px] font-medium flex items-center gap-1.5 truncate text-left cursor-pointer transition-none ${
                  isActive
                    ? "win98-bevel-in-gray bg-[#dfdfdf] font-bold"
                    : "win98-btn bg-[#c0c0c0]"
                }`}
                title={w.title}
                type="button"
              >
                <span className="flex-shrink-0 flex items-center">{w.icon}</span>
                <span className="truncate">{w.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Right side: System Tray */}
      <div
        className="win98-bevel-in-gray h-[26px] px-2 flex items-center gap-2 flex-shrink-0 bg-[#dfdfdf]"
        title={currentDate}
      >
        <button
          onClick={() => onToggleSound(!soundEnabled)}
          className="border-none bg-transparent cursor-pointer p-0 flex items-center"
          title={soundEnabled ? "Audio Nyala (Klik untuk mute)" : "Audio Mati (Klik untuk nyalakan)"}
          type="button"
        >
          {soundEnabled ? <VolumeIcon size={16} /> : <MutedVolumeIcon size={16} />}
        </button>

        <span className="text-[10px] text-[#606060]">ID</span>

        <span className="font-mono text-[11px] font-bold text-black tracking-wider">
          {currentTime || "12:00"}
        </span>
      </div>
    </footer>
  );
};
