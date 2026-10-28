import React, { useRef, useState, useEffect } from "react";
import { sounds } from "@/components/SoundManager";

export interface WindowState {
  id: string;
  title: string;
  icon: React.ReactNode;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
  position: { x: number; y: number };
  size?: { width: number; height?: number };
}

interface WindowProps {
  windowState: WindowState;
  isActive: boolean;
  onFocus: () => void;
  onClose: () => void;
  onMinimize: () => void;
  onToggleMaximize: () => void;
  onUpdatePosition: (pos: { x: number; y: number }) => void;
  children: React.ReactNode;
}

export const Window: React.FC<WindowProps> = ({
  windowState,
  isActive,
  onFocus,
  onClose,
  onMinimize,
  onToggleMaximize,
  onUpdatePosition,
  children,
}) => {
  const windowRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle Dragging
  const handlePointerDown = (e: React.PointerEvent) => {
    if (windowState.isMaximized || isMobile) return;
    onFocus();
    setIsDragging(true);
    const rect = windowRef.current?.getBoundingClientRect();
    if (rect) {
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || windowState.isMaximized || isMobile) return;
    const maxX = window.innerWidth - 80;
    const maxY = window.innerHeight - 80;
    const newX = Math.max(10, Math.min(maxX, e.clientX - dragOffset.x));
    const newY = Math.max(10, Math.min(maxY, e.clientY - dragOffset.y));
    onUpdatePosition({ x: newX, y: newY });
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // Ignore
    }
  };

  if (!windowState.isOpen || windowState.isMinimized) {
    return null;
  }

  // Mobile layout styles vs Desktop floating styles
  const containerStyle: React.CSSProperties = isMobile
    ? {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 38, // Above taskbar
        zIndex: windowState.zIndex,
        width: "100%",
        height: "calc(100% - 38px)",
      }
    : windowState.isMaximized
    ? {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 38,
        zIndex: windowState.zIndex,
        width: "100%",
        height: "calc(100% - 38px)",
      }
    : {
        position: "absolute",
        left: `${windowState.position.x}px`,
        top: `${windowState.position.y}px`,
        zIndex: windowState.zIndex,
        maxWidth: "96vw",
      };

  return (
    <div
      ref={windowRef}
      style={containerStyle}
      onClick={onFocus}
      className={`win98-window-frame flex flex-col ${
        isActive ? "shadow-2xl" : "shadow-md opacity-95"
      }`}
      role="dialog"
      aria-label={windowState.title}
    >
      {/* Title Bar */}
      <div
        className={`win98-titlebar ${
          isActive ? "" : "inactive"
        } cursor-move select-none`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onDoubleClick={onToggleMaximize}
      >
        <div className="flex items-center gap-1.5 truncate pr-2">
          <span className="flex-shrink-0 flex items-center">{windowState.icon}</span>
          <span className="truncate text-[12px] font-bold">
            {windowState.title}
          </span>
        </div>

        {/* Window Control Buttons */}
        <div className="flex items-center gap-1 flex-shrink-0" onPointerDown={(e) => e.stopPropagation()}>
          <button
            onClick={() => {
              sounds.playClick();
              onMinimize();
            }}
            title="Minimize"
            aria-label="Minimize"
            className="win98-titlebar-btn"
            type="button"
          >
            _
          </button>
          {!isMobile && (
            <button
              onClick={() => {
                sounds.playClick();
                onToggleMaximize();
              }}
              title={windowState.isMaximized ? "Restore" : "Maximize"}
              aria-label={windowState.isMaximized ? "Restore" : "Maximize"}
              className="win98-titlebar-btn"
              type="button"
            >
              {windowState.isMaximized ? "❐" : "□"}
            </button>
          )}
          <button
            onClick={() => {
              sounds.playClick();
              onClose();
            }}
            title="Close"
            aria-label="Close"
            className="win98-titlebar-btn font-black text-[#800000] hover:bg-[#ffaaaa]"
            type="button"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Menu Bar */}
      <div className="flex items-center gap-3 px-2 py-0.5 bg-[#c0c0c0] text-[11px] border-b border-[#808080]">
        <span className="cursor-pointer hover:bg-[#000080] hover:text-white px-1">File</span>
        <span className="cursor-pointer hover:bg-[#000080] hover:text-white px-1">Edit</span>
        <span className="cursor-pointer hover:bg-[#000080] hover:text-white px-1">View</span>
        <span className="cursor-pointer hover:bg-[#000080] hover:text-white px-1">Help</span>
      </div>

      {/* Window Body (Scrollable Client Area) */}
      <div className="flex-1 overflow-y-auto bg-[#c0c0c0] p-1 win98-bevel-thin-in">
        {children}
      </div>
    </div>
  );
};
