"use client";

import React, { useState, useEffect } from "react";
import { DesktopIcon } from "@/components/DesktopIcon";
import { Window, WindowState } from "@/components/Window";
import { Taskbar } from "@/components/Taskbar";
import { StartMenu } from "@/components/StartMenu";
import { sounds } from "@/components/SoundManager";

import {
  MyComputerIcon,
  ResumeIcon,
  ProjectsFolderIcon,
  SkillsIcon,
  CertificateIcon,
  ContactIcon,
  DownloadFloppyIcon,
  RecycleBinIcon,
  SettingsIcon,
  ShutdownIcon,
  PhotoFileIcon,
} from "@/components/PixelIcons";
import { ProfileWidget } from "@/components/ProfileWidget";
import { PhotoWindow } from "@/components/windows/PhotoWindow";
import { cvData } from "@/data/cvData";

import { AboutWindow } from "@/components/windows/AboutWindow";
import { ResumeWindow } from "@/components/windows/ResumeWindow";
import { ProjectsWindow } from "@/components/windows/ProjectsWindow";
import { SkillsWindow } from "@/components/windows/SkillsWindow";
import { CertificatesWindow } from "@/components/windows/CertificatesWindow";
import { ContactWindow } from "@/components/windows/ContactWindow";
import { DownloadWindow } from "@/components/windows/DownloadWindow";
import { SettingsWindow } from "@/components/windows/SettingsWindow";
import { ShutdownDialog } from "@/components/windows/ShutdownDialog";

export const Desktop: React.FC = () => {
  const [selectedIconId, setSelectedIconId] = useState<string | null>(null);
  const [activeWindowId, setActiveWindowId] = useState<string | null>("about");
  const [isStartMenuOpen, setIsStartMenuOpen] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(false);
  const [crtEnabled, setCrtEnabled] = useState<boolean>(false);
  const [desktopBg, setDesktopBg] = useState<string>("#008080");
  const [isShutDown, setIsShutDown] = useState<boolean>(false);
  const [maxZIndex, setMaxZIndex] = useState<number>(100);

  // Initialize Windows list with "About Me" open by default
  const [windows, setWindows] = useState<WindowState[]>([
    {
      id: "about",
      title: "About Me — Reunard Rio E.K",
      icon: <MyComputerIcon size={16} />,
      isOpen: true,
      isMinimized: false,
      isMaximized: false,
      zIndex: 100,
      position: { x: 40, y: 30 },
    },
    {
      id: "resume",
      title: "My Resume — Riwayat Kerja & Pendidikan",
      icon: <ResumeIcon size={16} />,
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 90,
      position: { x: 70, y: 50 },
    },
    {
      id: "projects",
      title: "My Projects — Portofolio Proyek Rio",
      icon: <ProjectsFolderIcon size={16} />,
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 90,
      position: { x: 90, y: 60 },
    },
    {
      id: "skills",
      title: "Skills — Control Panel Keahlian",
      icon: <SkillsIcon size={16} />,
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 90,
      position: { x: 110, y: 70 },
    },
    {
      id: "certificates",
      title: "Certificates — LSP Telematika Indonesia",
      icon: <CertificateIcon size={16} />,
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 90,
      position: { x: 80, y: 40 },
    },
    {
      id: "contact",
      title: "Contact Rio — Outlook Express 5.0",
      icon: <ContactIcon size={16} />,
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 90,
      position: { x: 120, y: 80 },
    },
    {
      id: "download",
      title: "File Download — CV Reunard Rio E.K (PDF)",
      icon: <DownloadFloppyIcon size={16} />,
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 90,
      position: { x: 140, y: 100 },
    },
    {
      id: "photo",
      title: `${cvData.personal.fullPhotoFileName} — Penampil Gambar`,
      icon: <PhotoFileIcon size={16} />,
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 90,
      position: { x: 160, y: 30 },
    },
    {
      id: "settings",
      title: "Display & Sound Properties",
      icon: <SettingsIcon size={16} />,
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 90,
      position: { x: 130, y: 90 },
    },
    {
      id: "shutdown",
      title: "Shut Down Windows",
      icon: <ShutdownIcon size={16} />,
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 999,
      position: { x: 150, y: 120 },
    },
  ]);

  // Sync sound settings with SoundManager
  useEffect(() => {
    sounds.enabled = soundEnabled;
  }, [soundEnabled]);

  // Center About window on desktop mount based on window width
  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth > 768) {
      const centerX = Math.max(30, Math.floor((window.innerWidth - 600) / 2));
      const centerY = Math.max(20, Math.floor((window.innerHeight - 560) / 2));
      setWindows((prev) =>
        prev.map((w) =>
          w.id === "about" ? { ...w, position: { x: centerX, y: centerY } } : w
        )
      );
    }
  }, []);

  const bringToFront = (id: string) => {
    const newZ = maxZIndex + 1;
    setMaxZIndex(newZ);
    setActiveWindowId(id);
    setWindows((prev) =>
      prev.map((w) =>
        w.id === id ? { ...w, zIndex: newZ, isMinimized: false } : w
      )
    );
  };

  const openWindow = (id: string) => {
    sounds.playWindowOpen();
    const newZ = maxZIndex + 1;
    setMaxZIndex(newZ);
    setActiveWindowId(id);
    setWindows((prev) =>
      prev.map((w) =>
        w.id === id ? { ...w, isOpen: true, isMinimized: false, zIndex: newZ } : w
      )
    );
  };

  const closeWindow = (id: string) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, isOpen: false } : w))
    );
    if (activeWindowId === id) {
      const remainingOpen = windows.filter((w) => w.isOpen && w.id !== id);
      if (remainingOpen.length > 0) {
        setActiveWindowId(remainingOpen[remainingOpen.length - 1].id);
      } else {
        setActiveWindowId(null);
      }
    }
  };

  const minimizeWindow = (id: string) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, isMinimized: true } : w))
    );
    if (activeWindowId === id) {
      const remaining = windows.filter(
        (w) => w.isOpen && !w.isMinimized && w.id !== id
      );
      if (remaining.length > 0) {
        setActiveWindowId(remaining[remaining.length - 1].id);
      } else {
        setActiveWindowId(null);
      }
    }
  };

  const toggleMaximize = (id: string) => {
    setWindows((prev) =>
      prev.map((w) =>
        w.id === id ? { ...w, isMaximized: !w.isMaximized } : w
      )
    );
  };

  const updatePosition = (id: string, pos: { x: number; y: number }) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, position: pos } : w))
    );
  };

  const handleTaskbarItemClick = (id: string) => {
    const target = windows.find((w) => w.id === id);
    if (!target) return;

    if (activeWindowId === id && !target.isMinimized) {
      // Minimize if already active
      minimizeWindow(id);
    } else {
      // Bring to front & un-minimize
      bringToFront(id);
    }
  };

  const desktopIcons = [
    {
      id: "about",
      title: "About Me",
      icon: <MyComputerIcon size={36} />,
    },
    {
      id: "resume",
      title: "My Resume",
      icon: <ResumeIcon size={36} />,
    },
    {
      id: "projects",
      title: "My Projects",
      icon: <ProjectsFolderIcon size={36} />,
    },
    {
      id: "skills",
      title: "Skills",
      icon: <SkillsIcon size={36} />,
    },
    {
      id: "certificates",
      title: "Certificates",
      icon: <CertificateIcon size={36} />,
    },
    {
      id: "contact",
      title: "Contact",
      icon: <ContactIcon size={36} />,
    },
    {
      id: "download",
      title: "Download CV",
      icon: <DownloadFloppyIcon size={36} />,
    },
    {
      id: "photo",
      title: cvData.personal.fullPhotoFileName,
      icon: <PhotoFileIcon size={36} />,
    },
    {
      id: "recycle-bin",
      title: "Recycle Bin",
      icon: <RecycleBinIcon size={36} />,
      isSpecial: true,
    },
  ];

  // Easter Egg: Retro Shutdown Screen
  if (isShutDown) {
    return (
      <main
        className="fixed inset-0 bg-black flex flex-col items-center justify-center p-6 text-center select-none"
        role="main"
      >
        <p className="text-[#FF8800] font-serif text-2xl sm:text-3xl font-bold tracking-wider mb-6 animate-pulse">
          It&apos;s now safe to turn off your computer.
        </p>
        <p className="text-[#888888] font-sans text-xs mb-8">
          Windows 98 Desktop Experience by Reunard Rio E.K
        </p>
        <button
          onClick={() => {
            setIsShutDown(false);
            openWindow("about");
          }}
          className="win98-btn text-black font-bold px-4 py-2"
          type="button"
        >
          <span>🔄</span> Hidupkan Kembali Desktop
        </button>
      </main>
    );
  }

  return (
    <div
      style={{ backgroundColor: desktopBg }}
      onClick={() => {
        setSelectedIconId(null);
        if (isStartMenuOpen) setIsStartMenuOpen(false);
      }}
      className={`fixed inset-0 overflow-hidden select-none ${
        crtEnabled ? "crt-overlay" : ""
      }`}
    >
      {/* Lapisan desktop (di bawah jendela): widget profil + shortcut.
          Mobile: mengalir vertikal dan bisa di-scroll di atas taskbar.
          Desktop (md+): widget di kanan atas, ikon di kiri. */}
      <div className="absolute inset-x-0 top-0 bottom-[38px] overflow-y-auto md:overflow-hidden z-[1]">
        <div className="flex flex-col md:block">
          <ProfileWidget className="mx-3 mt-3 md:absolute md:top-5 md:right-8 md:mx-0 md:mt-0" />

          {/* Desktop Shortcuts Grid */}
          <div className="p-3 flex flex-row flex-wrap items-start gap-2 md:flex-col md:gap-4 md:max-h-[calc(100vh-60px)] md:w-fit">
            {desktopIcons.map((item) => (
              <DesktopIcon
                key={item.id}
                id={item.id}
                title={item.title}
                icon={item.icon}
                isSelected={selectedIconId === item.id}
                onSelect={() => setSelectedIconId(item.id)}
                onOpen={() => {
                  if (item.isSpecial) {
                    alert("Recycle Bin is currently empty. Rio writes clean, bug-free code!");
                  } else {
                    openWindow(item.id);
                  }
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Floating Windows Area */}
      {windows.map((win) => (
        <Window
          key={win.id}
          windowState={win}
          isActive={activeWindowId === win.id && !win.isMinimized}
          onFocus={() => bringToFront(win.id)}
          onClose={() => closeWindow(win.id)}
          onMinimize={() => minimizeWindow(win.id)}
          onToggleMaximize={() => toggleMaximize(win.id)}
          onUpdatePosition={(pos) => updatePosition(win.id, pos)}
        >
          {win.id === "about" && (
            <AboutWindow onOpenWindow={(targetId) => openWindow(targetId)} />
          )}
          {win.id === "resume" && <ResumeWindow />}
          {win.id === "projects" && <ProjectsWindow />}
          {win.id === "skills" && <SkillsWindow />}
          {win.id === "certificates" && <CertificatesWindow />}
          {win.id === "contact" && <ContactWindow />}
          {win.id === "download" && (
            <DownloadWindow onClose={() => closeWindow("download")} />
          )}
          {win.id === "photo" && <PhotoWindow />}
          {win.id === "settings" && (
            <SettingsWindow
              soundEnabled={soundEnabled}
              onToggleSound={setSoundEnabled}
              crtEnabled={crtEnabled}
              onToggleCrt={setCrtEnabled}
              desktopBg={desktopBg}
              onChangeBg={setDesktopBg}
            />
          )}
          {win.id === "shutdown" && (
            <ShutdownDialog
              onClose={() => closeWindow("shutdown")}
              onConfirmShutdown={() => {
                closeWindow("shutdown");
                setIsShutDown(true);
              }}
            />
          )}
        </Window>
      ))}

      {/* Start Menu */}
      <StartMenu
        isOpen={isStartMenuOpen}
        onClose={() => setIsStartMenuOpen(false)}
        onOpenWindow={(id) => openWindow(id)}
      />

      {/* Bottom Taskbar */}
      <Taskbar
        windows={windows}
        activeWindowId={activeWindowId}
        isStartMenuOpen={isStartMenuOpen}
        onToggleStartMenu={() => setIsStartMenuOpen(!isStartMenuOpen)}
        onTaskbarItemClick={handleTaskbarItemClick}
        soundEnabled={soundEnabled}
        onToggleSound={setSoundEnabled}
      />
    </div>
  );
};
